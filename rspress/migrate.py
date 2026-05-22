#!/usr/bin/env python3
"""Migrate Docusaurus markdown files to rspress format."""

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).parent
DOCS_ROOT = ROOT / "docs"
SOURCE_ROOT = ROOT.parent

SOURCES = [
    {
        "src": SOURCE_ROOT / "versioned_docs/version-26.10/getting-started",
        "dst": DOCS_ROOT / "en/26.10/getting-started",
    },
    {
        "src": SOURCE_ROOT / "versioned_docs/version-25.10/getting-started",
        "dst": DOCS_ROOT / "en/25.10/getting-started",
    },
    {
        "src": SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs/version-26.10/getting-started",
        "dst": DOCS_ROOT / "fr/26.10/getting-started",
    },
    {
        "src": SOURCE_ROOT / "i18n/fr/docusaurus-plugin-content-docs/version-25.10/getting-started",
        "dst": DOCS_ROOT / "fr/25.10/getting-started",
    },
]


def transform(content: str) -> str:
    # Remove DocCardList import and usage
    content = re.sub(r"^import DocCardList from '@theme/DocCardList';\n", "", content, flags=re.MULTILINE)
    content = re.sub(r"^<DocCardList />\n?", "", content, flags=re.MULTILINE)

    # Replace Docusaurus Tabs/TabItem imports with rspress equivalents
    content = re.sub(
        r"^import Tabs from '@theme/Tabs';\n",
        "import { Tabs } from 'rspress/theme';\n",
        content,
        flags=re.MULTILINE,
    )
    content = re.sub(
        r"^import TabItem from '@theme/TabItem';\n",
        "import { Tab } from 'rspress/theme';\n",
        content,
        flags=re.MULTILINE,
    )

    # Replace <TabItem ...> with <Tab ...> and </TabItem> with </Tab>
    content = re.sub(r"<TabItem\b", "<Tab", content)
    content = re.sub(r"</TabItem>", "</Tab>", content)

    # Clean up trailing blank lines left by removed imports
    content = re.sub(r"\n{3,}", "\n\n", content)

    return content


HAS_JSX = re.compile(
    r"^import .* from '@theme/Tabs'|"
    r"^import .* from '@theme/TabItem'",
    re.MULTILINE,
)


def migrate():
    for mapping in SOURCES:
        src_dir: Path = mapping["src"]
        dst_dir: Path = mapping["dst"]
        dst_dir.mkdir(parents=True, exist_ok=True)

        for src_file in sorted(src_dir.glob("*.md")):
            original = src_file.read_text(encoding="utf-8")
            transformed = transform(original)
            # Use .mdx for files with JSX imports so rspress enables full MDX pipeline
            ext = ".mdx" if HAS_JSX.search(original) else ".md"
            dst_file = dst_dir / (src_file.stem + ext)
            dst_file.write_text(transformed, encoding="utf-8")
            print(f"  {src_file.relative_to(SOURCE_ROOT)}  →  {dst_file.relative_to(ROOT)}")

    print("\nDone.")


if __name__ == "__main__":
    migrate()
