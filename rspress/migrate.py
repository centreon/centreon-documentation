#!/usr/bin/env python3
"""Migrate ALL Docusaurus markdown files to rspress format and generate sidebar."""

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).parent
DOCS_ROOT = ROOT / "docs"
SOURCE_ROOT = ROOT.parent

VERSIONS = ["26.10", "25.10"]

SOURCES: dict[str, dict[str, Path]] = {
    "en": {
        "26.10": SOURCE_ROOT / "versioned_docs/version-26.10",
        "25.10": SOURCE_ROOT / "versioned_docs/version-25.10",
    },
    "fr": {
        "26.10": SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs/version-26.10",
        "25.10": SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs/version-25.10",
    },
}

SIDEBARS_PATH: dict[str, Path] = {
    "26.10": SOURCE_ROOT / "versioned_sidebars/version-26.10-sidebars.json",
    "25.10": SOURCE_ROOT / "versioned_sidebars/version-25.10-sidebars.json",
}

FR_LABELS_PATH: dict[str, Path] = {
    "26.10": SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs/version-26.10.json",
    "25.10": SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs/version-25.10.json",
}

# ── MD content transformation ─────────────────────────────────────────────────

_RE_DOCCARD_IMPORT = re.compile(r"^import DocCardList from '@theme/DocCardList';\n", re.MULTILINE)
_RE_DOCCARD_USAGE = re.compile(r"^<DocCardList />\n?", re.MULTILINE)
_RE_TABS_IMPORT = re.compile(r"^import Tabs from '@theme/Tabs';\n", re.MULTILINE)
_RE_TABITEM_IMPORT = re.compile(r"^import TabItem from '@theme/TabItem';\n", re.MULTILINE)
_RE_TABITEM_OPEN = re.compile(r"<TabItem\b")
_RE_TABITEM_CLOSE = re.compile(r"</TabItem>")
# Strip Docusaurus-specific @site/ imports and their JSX usage (e.g. ExpandCollapseAll)
_RE_SITE_IMPORT = re.compile(r"^import \w+ from '@site/[^']*';\n", re.MULTILINE)
_RE_SITE_COMPONENT = re.compile(r"^<[A-Z]\w* */>\n?", re.MULTILINE)
_RE_BLANK_LINES = re.compile(r"\n{3,}")
# Handles indented/non-indented fences and optional space before the language name
_RE_CODE_FENCE_LANG = re.compile(r"^([ \t]*)([`~]{3,}) *(\w+)", re.MULTILINE)
_RE_HTML_COMMENT = re.compile(r"<!--.*?-->", re.DOTALL)
# Markdown image/link reference pointing into the version-root assets folder.
# Some source files use the wrong number of `../` (e.g. `../assets/foo.png` from
# a file at depth 3 where `../../assets/foo.png` is needed). We rewrite them all
# to use the correct prefix based on the file's depth from its version root.
_RE_ASSET_REF = re.compile(r"(!?\[[^\]]*\]\()(?:\.\./)+assets/([^)]+\))")

HAS_JSX = re.compile(
    r"^import .* from '@theme/Tabs'|^import .* from '@theme/TabItem'",
    re.MULTILINE,
)

# Language aliases not bundled in rspress/shiki → map to a supported equivalent
_LANG_ALIASES: dict[str, str] = {
    "apacheconf": "bash",
    "phpconf":    "bash",
    "sql":        "text",  # rspress v2 beta shiki bundle omits sql
    "xml":        "text",  # rspress v2 beta shiki bundle omits xml
    "url":        "text",
}


def _normalize_lang(lang: str) -> str:
    lower = lang.lower()
    return _LANG_ALIASES.get(lower, lower)


def transform(content: str, is_mdx: bool = False, depth: int = 1) -> str:
    content = _RE_DOCCARD_IMPORT.sub("", content)
    content = _RE_DOCCARD_USAGE.sub("", content)
    content = _RE_SITE_IMPORT.sub("", content)
    content = _RE_SITE_COMPONENT.sub("", content)
    content = _RE_TABS_IMPORT.sub("import { Tabs } from 'rspress/theme';\n", content)
    content = _RE_TABITEM_IMPORT.sub("import { Tab } from 'rspress/theme';\n", content)
    content = _RE_TABITEM_OPEN.sub("<Tab", content)
    content = _RE_TABITEM_CLOSE.sub("</Tab>", content)
    # Decode %20 in image/link paths → hyphens (assets are renamed to remove spaces)
    content = re.sub(r'(\!\[.*?\]\([^)]*?)%20([^)]*?\))', lambda m: m.group(0).replace('%20', '-'), content)
    # Normalize asset reference depth: every `../assets/...` link must use the
    # right number of `../` for the file's location, regardless of what the
    # source had. depth is the file's depth from its version root (e.g. 3 for
    # version-X/monitoring/basic-objects/foo.md → needs `../../assets/...`).
    asset_prefix = "../" * (depth - 1)
    content = _RE_ASSET_REF.sub(
        lambda m: f"{m.group(1)}{asset_prefix}assets/{m.group(2)}",
        content,
    )
    # Normalize code-fence language names (lowercase + alias map), handle indented fences
    content = _RE_CODE_FENCE_LANG.sub(
        lambda m: m.group(1) + m.group(2) + _normalize_lang(m.group(3)),
        content,
    )
    # MDX doesn't support HTML comments — strip them
    if is_mdx:
        content = _RE_HTML_COMMENT.sub("", content)
    content = _RE_BLANK_LINES.sub("\n\n", content)
    return content


# ── Frontmatter title extraction ──────────────────────────────────────────────

_RE_FRONTMATTER_TITLE = re.compile(
    r"^---\n.*?^title:\s*['\"]?(.+?)['\"]?\s*$.*?^---",
    re.MULTILINE | re.DOTALL,
)
_RE_H1 = re.compile(r"^#\s+(.+)$", re.MULTILINE)


def _read_title(filepath: Path) -> str:
    try:
        content = filepath.read_text(encoding="utf-8")
        m = _RE_FRONTMATTER_TITLE.search(content)
        if m:
            return m.group(1).strip("'\"")
        m = _RE_H1.search(content)
        if m:
            return m.group(1).strip()
    except Exception:
        pass
    return filepath.stem.replace("-", " ").title()


def get_doc_title(doc_id: str, src_root: Path) -> str:
    """Resolve the page title for a given doc ID by reading its frontmatter."""
    candidate = src_root / (doc_id + ".md")
    if not candidate.exists():
        # Case-insensitive fallback (e.g. IT100 → it100)
        parent = (src_root / doc_id).parent
        stem = Path(doc_id).stem
        if parent.exists():
            for f in parent.iterdir():
                if f.stem.lower() == stem.lower() and f.suffix == ".md":
                    return _read_title(f)
        return Path(doc_id).stem.replace("-", " ").title()
    return _read_title(candidate)


# ── Sidebar generation ────────────────────────────────────────────────────────


def _build_items(
    items: list,
    src_root: Path,
    prefix: str,
    fr_labels: dict | None,
) -> list:
    result = []
    for item in items:
        if isinstance(item, str):
            title = get_doc_title(item, src_root)
            result.append({"text": title, "link": f"{prefix}/{item}"})

        elif isinstance(item, dict):
            t = item.get("type", "")

            if t == "doc":
                doc_id = item["id"]
                label = item.get("label") or get_doc_title(doc_id, src_root)
                result.append({"text": label, "link": f"{prefix}/{doc_id}"})

            elif t == "category":
                en_label = item.get("label", "")
                label = en_label
                if fr_labels:
                    fr_key = f"sidebar.docs.category.{en_label}"
                    label = fr_labels.get(fr_key, {}).get("message", en_label)

                sub_items = _build_items(item.get("items", []), src_root, prefix, fr_labels)
                group: dict = {
                    "text": label,
                    "collapsible": True,
                    "collapsed": item.get("collapsed", True),
                    "items": sub_items,
                }
                # Preserve category link when it points to an actual doc
                cat_link = item.get("link", {})
                if isinstance(cat_link, dict) and cat_link.get("type") == "doc":
                    group["link"] = f"{prefix}/{cat_link['id']}"

                result.append(group)

            # type "link" / "html" / unknown → skip

    return result


def generate_sidebar() -> None:
    sidebar_data: dict[str, list] = {}

    for version in VERSIONS:
        sidebar_json = json.loads(SIDEBARS_PATH[version].read_text(encoding="utf-8"))
        top_items = sidebar_json["docs"]

        en_src = SOURCES["en"][version]
        fr_src = SOURCES["fr"][version]
        fr_labels = json.loads(FR_LABELS_PATH[version].read_text(encoding="utf-8"))

        is_default = version == VERSIONS[0]  # 26.10 is the default version

        # EN sidebar
        # For the default version, use no version prefix in links so that the rspress
        # version-switcher (replaceVersion) can correctly rewrite /getting-started/foo
        # → /25.10/getting-started/foo. If links include /26.10/, the switcher produces
        # /25.10/26.10/... because it only strips the prefix when current != default.
        en_prefix = "" if is_default else f"/{version}"
        en_key = "/" if is_default else f"/{version}/"
        sidebar_data[en_key] = _build_items(top_items, en_src, en_prefix, None)

        # FR sidebar (same logic — FR default routes live at /fr/... without version)
        fr_prefix = "/fr" if is_default else f"/fr/{version}"
        fr_key = "/fr/" if is_default else f"/fr/{version}/"
        sidebar_data[fr_key] = _build_items(top_items, fr_src, fr_prefix, fr_labels)

    out = ROOT / "src" / "sidebar.ts"
    out.parent.mkdir(parents=True, exist_ok=True)
    json_body = json.dumps(sidebar_data, ensure_ascii=False, indent=2)
    out.write_text(
        "import type { Sidebar } from '@rspress/shared';\n\n"
        f"export const sidebar: Sidebar = {json_body};\n",
        encoding="utf-8",
    )
    print(f"  Generated {out.relative_to(ROOT)}")


# ── Doc migration ─────────────────────────────────────────────────────────────

def _rename_assets_with_spaces(assets_dir: Path) -> None:
    """Rename asset files with spaces to use hyphens (rspack can't resolve space-containing paths)."""
    for f in sorted(assets_dir.rglob("*")):
        if f.is_file() and " " in f.name:
            new_name = f.name.replace(" ", "-")
            f.rename(f.parent / new_name)


def migrate_docs() -> None:
    for lang, versions in SOURCES.items():
        for version, src_root in versions.items():
            dst_root = DOCS_ROOT / lang / version
            dst_root.mkdir(parents=True, exist_ok=True)
            # For FR, skip files that have no EN counterpart — they're stale
            # leftovers (often with broken relative asset paths) and produce
            # routes inconsistent with the navigation derived from the EN tree.
            en_src = SOURCES["en"][version] if lang == "fr" else None
            count = 0
            skipped = 0

            # Process both .md and .mdx source files
            for src_file in sorted(src_root.rglob("*.md")) + sorted(src_root.rglob("*.mdx")):
                rel = src_file.relative_to(src_root)
                if rel.parts[0] == "assets":
                    continue
                # Skip root index — each version has a hand-crafted homepage (index.mdx)
                if rel == Path("index.md") or rel == Path("index.mdx"):
                    continue
                if en_src is not None:
                    en_md = en_src / rel.parent / (rel.stem + ".md")
                    en_mdx = en_src / rel.parent / (rel.stem + ".mdx")
                    if not en_md.exists() and not en_mdx.exists():
                        skipped += 1
                        continue
                original = src_file.read_text(encoding="utf-8")
                # Source .mdx files are always MDX; .md files are MDX if they have JSX imports
                is_mdx = src_file.suffix == ".mdx" or bool(HAS_JSX.search(original))
                # depth = number of dir levels from version root (e.g. 'monitoring/foo.md' → 2)
                depth = len(rel.parts)
                transformed = transform(original, is_mdx=is_mdx, depth=depth)
                out_ext = ".mdx" if is_mdx else ".md"
                dst_file = dst_root / rel.parent / (src_file.stem + out_ext)
                dst_file.parent.mkdir(parents=True, exist_ok=True)
                dst_file.write_text(transformed, encoding="utf-8")
                count += 1

            # Copy assets tree (renaming files with spaces → hyphens)
            src_assets = src_root / "assets"
            dst_assets = dst_root / "assets"
            if src_assets.exists():
                if dst_assets.exists():
                    shutil.rmtree(dst_assets)
                shutil.copytree(src_assets, dst_assets)
                _rename_assets_with_spaces(dst_assets)
                asset_count = sum(1 for _ in dst_assets.rglob("*") if _.is_file())
                suffix = f", {skipped} orphan FR skipped" if skipped else ""
                print(f"  {lang}/{version}: {count} md files, {asset_count} assets{suffix}")
            else:
                suffix = f", {skipped} orphan FR skipped" if skipped else ""
                print(f"  {lang}/{version}: {count} md files{suffix}")


# ── Entry point ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("Migrating docs…")
    migrate_docs()
    print("Generating sidebar…")
    generate_sidebar()
    print("\nDone.")
