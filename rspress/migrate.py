#!/usr/bin/env python3
"""Migrate ALL Docusaurus markdown files to rspress format and generate sidebar."""

import json
import re
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).parent
DOCS_ROOT = ROOT / "docs"
SOURCE_ROOT = ROOT.parent

VERSIONS = ["26.10", "25.10"]

# ── Sources for the versioned core docs ───────────────────────────────────────
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

# ── Standalone (non-versioned) docs: pp (Monitoring Connectors) and cloud ─────
# These live outside versioned_docs/ in the Docusaurus repo and have a single
# CommonJS sidebar file each.
PP_SOURCE_EN = SOURCE_ROOT / "pp"
PP_SOURCE_FR = SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs-pp/current"
PP_SIDEBAR_JS = SOURCE_ROOT / "pp" / "sidebarsPp.js"
PP_FR_LABELS_PATH = SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs-pp/current.json"

CLOUD_SOURCE_EN = SOURCE_ROOT / "cloud"
CLOUD_SOURCE_FR = SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs-cloud/current"
CLOUD_SIDEBAR_JS = SOURCE_ROOT / "cloud" / "sidebarsCloud.js"
CLOUD_FR_LABELS_PATH = SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs-cloud/current.json"

LM_SOURCE_EN = SOURCE_ROOT / "logmanagement"
LM_SOURCE_FR = SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs-logmanagement/current"
LM_SIDEBAR_JS = SOURCE_ROOT / "logmanagement" / "sidebarsLogmanagement.js"
LM_FR_LABELS_PATH = SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs-logmanagement/current.json"

EM_SOURCE_EN = SOURCE_ROOT / "experience-monitoring"
EM_SOURCE_FR = SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs-experience-monitoring/current"
EM_SIDEBAR_JS = SOURCE_ROOT / "experience-monitoring" / "sidebarsExperienceMonitoring.js"
EM_FR_LABELS_PATH = SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs-experience-monitoring/current.json"

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
# Handles indented/non-indented fences and optional space before the language name.
# Requires the rest of the line to contain no backticks, so inline triple-backtick
# spans like ```rrdcached``` is not supported. don't get falsely treated as fence
# openers. Trailing fence attributes (e.g. ```bash {1,3}) are preserved as-is.
_RE_CODE_FENCE_LANG = re.compile(r"^([ \t]*)([`~]{3,}) *(\w+)([^`\n]*)$", re.MULTILINE)
_RE_HTML_COMMENT = re.compile(r"<!--.*?-->", re.DOTALL)
# Markdown image/link reference pointing into the version-root assets folder.
# Some source files use the wrong number of `../` (e.g. `../assets/foo.png` from
# a file at depth 3 where `../../assets/foo.png` is needed). We rewrite them all
# to use the correct prefix based on the file's depth from its version root.
_RE_ASSET_REF = re.compile(r"(!?\[[^\]]*\]\()(?:\.\.?/)*assets/([^)]+\))")

HAS_JSX = re.compile(
    r"^import .* from '@theme/Tabs'|^import .* from '@theme/TabItem'",
    re.MULTILINE,
)

# Language aliases not bundled in rspress/shiki → map to a supported equivalent
_LANG_ALIASES: dict[str, str] = {
    "apacheconf":  "bash",
    "phpconf":     "bash",
    "commandline": "bash",
    "cmd":         "bash",
    "sql":         "text",  # rspress v2 beta shiki bundle omits sql
    "xml":         "text",  # rspress v2 beta shiki bundle omits xml
    "mysql":       "text",
    "url":         "text",
    "smarty":      "text",
    "csv":         "text",
    "txt":         "text",
}


def _normalize_lang(lang: str) -> str:
    lower = lang.lower()
    return _LANG_ALIASES.get(lower, lower)


def transform(content: str, is_mdx: bool = False, depth: int = 1) -> str:
    content = _RE_DOCCARD_IMPORT.sub("", content)
    content = _RE_DOCCARD_USAGE.sub("", content)
    content = _RE_SITE_IMPORT.sub("", content)
    content = _RE_SITE_COMPONENT.sub("", content)
    content = _RE_TABS_IMPORT.sub("import { Tabs } from '@rspress/core/theme';\n", content)
    content = _RE_TABITEM_IMPORT.sub("import { Tab } from '@rspress/core/theme';\n", content)
    content = _RE_TABITEM_OPEN.sub("<Tab", content)
    content = _RE_TABITEM_CLOSE.sub("</Tab>", content)
    # Decode %20 in image/link paths → hyphens (assets are renamed to remove spaces)
    content = re.sub(r'(\!\[.*?\]\([^)]*?)%20([^)]*?\))', lambda m: m.group(0).replace('%20', '-'), content)
    # Normalize asset reference depth: every `../assets/...` link must use the
    # right number of `../` for the file's location, regardless of what the
    # source had. depth is the file's depth from its version root (e.g. 3 for
    # version-X/monitoring/basic-objects/foo.md → needs `../../assets/...`).
    asset_prefix = "./" if depth == 1 else "../" * (depth - 1)
    content = _RE_ASSET_REF.sub(
        lambda m: f"{m.group(1)}{asset_prefix}assets/{m.group(2)}",
        content,
    )
    # Normalize code-fence language names (lowercase + alias map), handle indented fences
    content = _RE_CODE_FENCE_LANG.sub(
        lambda m: m.group(1) + m.group(2) + _normalize_lang(m.group(3)) + m.group(4),
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


def _load_js_sidebar(js_path: Path) -> list:
    """Load a CommonJS sidebar file (`module.exports = { name: [...] }`) via node."""
    code = (
        f"const s = require({json.dumps(str(js_path.absolute()))});"
        "process.stdout.write(JSON.stringify(Object.values(s)[0], null, 2))"
    )
    result = subprocess.run(["node", "-e", code], capture_output=True, text=True, check=True)
    return json.loads(result.stdout)


def _build_items(
    items: list,
    src_root: Path,
    prefix: str,
    fr_labels: dict | None,
    fr_key_prefix: str = "sidebar.docs.category.",
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
                    fr_key = f"{fr_key_prefix}{en_label}"
                    label = fr_labels.get(fr_key, {}).get("message", en_label)

                sub_items = _build_items(item.get("items", []), src_root, prefix, fr_labels, fr_key_prefix)
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

            # type "link" / "html" / "generated-index" / unknown → skip

    return result


def generate_sidebar() -> None:
    # Separate dicts so the default version is emitted after the others. All keys
    # are now distinct version/section prefixes (/26.10/, /25.10/, /pp/, ...), so
    # there is no longer a catch-all "/" key that could swallow other requests;
    # the ordering is kept only for a stable, readable sidebar.ts.
    non_default_en: dict[str, list] = {}
    non_default_fr: dict[str, list] = {}
    default_en: dict[str, list] = {}
    default_fr: dict[str, list] = {}

    for version in VERSIONS:
        sidebar_json = json.loads(SIDEBARS_PATH[version].read_text(encoding="utf-8"))
        top_items = sidebar_json["docs"]
        en_src = SOURCES["en"][version]
        fr_src = SOURCES["fr"][version]
        fr_labels = json.loads(FR_LABELS_PATH[version].read_text(encoding="utf-8"))

        is_default = version == VERSIONS[0]  # 26.10
        # Every version (including the default 26.10) is keyed and linked with its
        # version prefix. The site only serves pages under /<version>/..., and the
        # custom switcher (VersionAwareNav in theme/index.tsx) builds /<version>/...
        # links via buildPathname(). Version-less links such as /getting-started/foo
        # are not routed and 404, which previously broke every sidebar link on the
        # default-version (26.10) pages.
        en_prefix = f"/{version}"
        en_key = f"/{version}/"
        fr_prefix = f"/fr/{version}"
        fr_key = f"/fr/{version}/"

        if is_default:
            default_en[en_key] = _build_items(top_items, en_src, en_prefix, None)
            default_fr[fr_key] = _build_items(top_items, fr_src, fr_prefix, fr_labels)
        else:
            non_default_en[en_key] = _build_items(top_items, en_src, en_prefix, None)
            non_default_fr[fr_key] = _build_items(top_items, fr_src, fr_prefix, fr_labels)

    # pp (Monitoring Connectors) — single (non-versioned) tree
    pp_items = _load_js_sidebar(PP_SIDEBAR_JS)
    pp_fr_labels = json.loads(PP_FR_LABELS_PATH.read_text(encoding="utf-8"))
    non_default_en["/pp/"] = _build_items(pp_items, PP_SOURCE_EN, "/pp", None, "sidebar.pp.category.")
    non_default_fr["/fr/pp/"] = _build_items(pp_items, PP_SOURCE_FR, "/fr/pp", pp_fr_labels, "sidebar.pp.category.")

    # cloud — single (non-versioned) tree
    cloud_items = _load_js_sidebar(CLOUD_SIDEBAR_JS)
    cloud_fr_labels = json.loads(CLOUD_FR_LABELS_PATH.read_text(encoding="utf-8"))
    non_default_en["/cloud/"] = _build_items(cloud_items, CLOUD_SOURCE_EN, "/cloud", None, "sidebar.cloud.category.")
    non_default_fr["/fr/cloud/"] = _build_items(cloud_items, CLOUD_SOURCE_FR, "/fr/cloud", cloud_fr_labels, "sidebar.cloud.category.")

    # logmanagement — single (non-versioned) tree
    lm_items = _load_js_sidebar(LM_SIDEBAR_JS)
    lm_fr_labels = json.loads(LM_FR_LABELS_PATH.read_text(encoding="utf-8"))
    non_default_en["/logmanagement/"] = _build_items(lm_items, LM_SOURCE_EN, "/logmanagement", None, "sidebar.logmanagement.category.")
    non_default_fr["/fr/logmanagement/"] = _build_items(lm_items, LM_SOURCE_FR, "/fr/logmanagement", lm_fr_labels, "sidebar.logmanagement.category.")

    # experience-monitoring — single (non-versioned) tree
    em_items = _load_js_sidebar(EM_SIDEBAR_JS)
    em_fr_labels = json.loads(EM_FR_LABELS_PATH.read_text(encoding="utf-8"))
    non_default_en["/experience-monitoring/"] = _build_items(em_items, EM_SOURCE_EN, "/experience-monitoring", None, "sidebar.experience-monitoring.category.")
    non_default_fr["/fr/experience-monitoring/"] = _build_items(em_items, EM_SOURCE_FR, "/fr/experience-monitoring", em_fr_labels, "sidebar.experience-monitoring.category.")

    sidebar_data = {**non_default_en, **non_default_fr, **default_en, **default_fr}

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


def _migrate_tree(
    src_root: Path,
    dst_root: Path,
    label: str,
    en_src_for_filter: Path | None,
    skip_root_index: bool = False,
) -> None:
    """Walk src_root, transform each md/mdx, write into dst_root preserving layout.

    en_src_for_filter: when set, skip files that have no .md/.mdx counterpart in
    that EN tree (orphan FR files with broken paths and no EN equivalent).
    """
    # Clean the destination first so re-running the migration doesn't leave stale
    # files: if a previous run wrote foo.md and JSX detection now yields foo.mdx,
    # both would survive and create duplicate routes.
    if dst_root.exists():
        shutil.rmtree(dst_root)
    dst_root.mkdir(parents=True, exist_ok=True)
    count = 0
    skipped = 0

    for src_file in sorted(src_root.rglob("*.md")) + sorted(src_root.rglob("*.mdx")):
        rel = src_file.relative_to(src_root)
        if rel.parts[0] == "assets":
            continue
        if skip_root_index and (rel == Path("index.md") or rel == Path("index.mdx")):
            continue
        if en_src_for_filter is not None:
            en_md = en_src_for_filter / rel.parent / (rel.stem + ".md")
            en_mdx = en_src_for_filter / rel.parent / (rel.stem + ".mdx")
            if not en_md.exists() and not en_mdx.exists():
                skipped += 1
                continue
        original = src_file.read_text(encoding="utf-8")
        is_mdx = src_file.suffix == ".mdx" or bool(HAS_JSX.search(original))
        # depth = number of path levels from version root (e.g. 'monitoring/foo.md' → 2)
        depth = len(rel.parts)
        transformed = transform(original, is_mdx=is_mdx, depth=depth)
        out_ext = ".mdx" if is_mdx else ".md"
        dst_file = dst_root / rel.parent / (src_file.stem + out_ext)
        dst_file.parent.mkdir(parents=True, exist_ok=True)
        dst_file.write_text(transformed, encoding="utf-8")
        count += 1

    src_assets = src_root / "assets"
    dst_assets = dst_root / "assets"
    suffix = f", {skipped} orphan FR skipped" if skipped else ""
    if src_assets.exists():
        if dst_assets.exists():
            shutil.rmtree(dst_assets)
        shutil.copytree(src_assets, dst_assets)
        _rename_assets_with_spaces(dst_assets)
        asset_count = sum(1 for _ in dst_assets.rglob("*") if _.is_file())
        print(f"  {label}: {count} md files, {asset_count} assets{suffix}")
    else:
        print(f"  {label}: {count} md files{suffix}")


def migrate_docs() -> None:
    for lang, versions in SOURCES.items():
        for version, src_root in versions.items():
            dst_root = DOCS_ROOT / lang / version
            en_src = SOURCES["en"][version] if lang == "fr" else None
            _migrate_tree(src_root, dst_root, f"{lang}/{version}", en_src, skip_root_index=True)


def migrate_pp() -> None:
    _migrate_tree(PP_SOURCE_EN, DOCS_ROOT / "en" / "pp", "en/pp", None)
    _migrate_tree(PP_SOURCE_FR, DOCS_ROOT / "fr" / "pp", "fr/pp", PP_SOURCE_EN)


def migrate_cloud() -> None:
    _migrate_tree(CLOUD_SOURCE_EN, DOCS_ROOT / "en" / "cloud", "en/cloud", None)
    _migrate_tree(CLOUD_SOURCE_FR, DOCS_ROOT / "fr" / "cloud", "fr/cloud", CLOUD_SOURCE_EN)


def migrate_logmanagement() -> None:
    _migrate_tree(LM_SOURCE_EN, DOCS_ROOT / "en" / "logmanagement", "en/logmanagement", None)
    _migrate_tree(LM_SOURCE_FR, DOCS_ROOT / "fr" / "logmanagement", "fr/logmanagement", LM_SOURCE_EN)


def migrate_experience() -> None:
    _migrate_tree(EM_SOURCE_EN, DOCS_ROOT / "en" / "experience-monitoring", "en/experience-monitoring", None)
    _migrate_tree(EM_SOURCE_FR, DOCS_ROOT / "fr" / "experience-monitoring", "fr/experience-monitoring", EM_SOURCE_EN)


# ── Media optimization (images handled by the build; gif/video here) ──────────

def _find_bin(node_rel: str, name: str) -> str | None:
    """Locate a binary: prefer the npm-vendored one, else fall back to PATH."""
    cand = ROOT / node_rel
    if cand.exists():
        return str(cand)
    import shutil as _sh
    return _sh.which(name)


def optimize_media() -> None:
    """Recompress migrated GIFs (gifsicle) and MP4 videos (ffmpeg/libx264) in
    place. Images (PNG/JPEG) are compressed by the build via
    @rsbuild/plugin-image-compress; GIF and video have no build-time codec, so we
    optimize the assets here. No-ops (with a warning) if the tools are missing."""
    import subprocess, hashlib

    ffmpeg = _find_bin("node_modules/ffmpeg-static/ffmpeg", "ffmpeg")
    gifsicle = _find_bin("node_modules/gifsicle/vendor/gifsicle", "gifsicle")

    gifs = sorted(DOCS_ROOT.rglob("*.gif"))
    mp4s = sorted(DOCS_ROOT.rglob("*.mp4"))

    # GIFs: lossy + max optimization, keep result only if smaller.
    if gifsicle:
        saved = 0
        for g in gifs:
            tmp = g.with_suffix(".gif.opt")
            r = subprocess.run([gifsicle, "-O3", "--lossy=80", str(g), "-o", str(tmp)],
                               capture_output=True)
            if r.returncode != 0:
                print(f"    warning: gifsicle failed on {g.name}: "
                      f"{r.stderr.decode('utf-8', 'replace').strip()[:200]}")
            if r.returncode == 0 and tmp.exists() and tmp.stat().st_size < g.stat().st_size:
                saved += g.stat().st_size - tmp.stat().st_size
                tmp.replace(g)
            elif tmp.exists():
                tmp.unlink()
        print(f"  gifsicle: {len(gifs)} GIFs, {saved/1024/1024:.1f} MB saved")
    else:
        print("  gifsicle not found, skipping GIF optimization")

    # MP4: encode once per unique file (identical copies share a hash), copy result
    # to all siblings so the bundler keeps deduplicating them.
    if ffmpeg:
        groups: dict[str, list] = {}
        for m in mp4s:
            h = hashlib.md5(m.read_bytes()).hexdigest()
            groups.setdefault(h, []).append(m)
        saved = 0
        for paths in groups.values():
            src = paths[0]
            tmp = src.with_name(src.stem + ".opt.mp4")
            r = subprocess.run(
                [ffmpeg, "-y", "-i", str(src), "-vf", "scale='min(720,iw)':-2",
                 "-c:v", "libx264", "-crf", "30", "-preset", "slow",
                 "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", str(tmp)],
                capture_output=True)
            if r.returncode != 0:
                print(f"    warning: ffmpeg failed on {src.name}: "
                      f"{r.stderr.decode('utf-8', 'replace').strip()[-200:]}")
            if r.returncode == 0 and tmp.exists() and tmp.stat().st_size < src.stat().st_size:
                data = tmp.read_bytes()
                tmp.unlink()
                for p in paths:
                    saved += p.stat().st_size - len(data)
                    p.write_bytes(data)
            elif tmp.exists():
                tmp.unlink()
        print(f"  ffmpeg: {len(mp4s)} MP4s, {saved/1024/1024:.1f} MB saved")
    else:
        print("  ffmpeg not found, skipping video optimization")


# ── Entry point ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("Migrating versioned docs…")
    migrate_docs()
    print("Migrating pp (Monitoring Connectors)…")
    migrate_pp()
    print("Migrating cloud…")
    migrate_cloud()
    print("Migrating log management…")
    migrate_logmanagement()
    print("Migrating experience monitoring…")
    migrate_experience()
    print("Optimizing media (gif/video)…")
    optimize_media()
    print("Generating sidebar…")
    generate_sidebar()
    print("\nDone.")
