#!/usr/bin/env python3
"""Deterministic extraction for the `review` skill.

Offloads the mechanical parts of the checklist so the model spends tokens only on
judgment calls. Prints a compact report; the model reads that instead of parsing
the document itself.

Usage:
  extract_refs.py DOC.md            # compact report (anchors, long sentences, US/UK, link inventory)
  extract_refs.py DOC.md --urls     # print unique external URLs only, one per line
                                     # (pipe into check_links.sh)

Handles .md and .mdx. Fenced code blocks and frontmatter are stripped before prose
analysis and link extraction (links inside code samples are usually illustrative).
"""
import re
import sys

HEADING_RE = re.compile(r'^(#{1,6})\s+(.*?)\s*$', re.M)
EXPLICIT_ID_RE = re.compile(r'\{#([\w-]+)\}\s*$')
MD_LINK_RE = re.compile(r'\[([^\]]*)\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)')
REF_DEF_RE = re.compile(r'^\s*\[[^\]]+\]:\s*(\S+)', re.M)
AUTOLINK_RE = re.compile(r'<((?:https?://)[^>\s]+)>')
BARE_URL_RE = re.compile(r'(?<![("\[<])\bhttps?://[^\s)\]<>"]+')

# Common US/UK variant pairs (US, UK). Extend as Centreon's style guide requires.
US_UK_PAIRS = [
    ("color", "colour"), ("behavior", "behaviour"), ("organize", "organise"),
    ("analyze", "analyse"), ("catalog", "catalogue"), ("center", "centre"),
    ("customize", "customise"), ("gray", "grey"), ("canceled", "cancelled"),
    ("labeled", "labelled"), ("defense", "defence"), ("favorite", "favourite"),
    ("authorization", "authorisation"), ("initialize", "initialise"),
    ("optimize", "optimise"), ("license", "licence"), ("fulfill", "fulfil"),
    ("enrollment", "enrolment"), ("modeling", "modelling"),
]


def strip_frontmatter(text):
    if text.startswith('---'):
        end = text.find('\n---', 3)
        if end != -1:
            nl = text.find('\n', end + 1)
            return text[nl + 1:] if nl != -1 else ''
    return text


def strip_code(text):
    text = re.sub(r'```.*?```', '', text, flags=re.S)
    text = re.sub(r'~~~.*?~~~', '', text, flags=re.S)
    text = re.sub(r'`[^`]*`', '', text)
    return text


def slugify(heading):
    """Docusaurus/GitHub-style anchor slug from a heading's visible text."""
    h = EXPLICIT_ID_RE.sub('', heading)          # drop {#id} marker for text slug
    h = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', h)  # link -> text
    h = re.sub(r'[*_`~]', '', h).strip().lower()
    h = re.sub(r'[^\w\s-]', '', h)
    h = re.sub(r'\s+', '-', h)
    return h


def collect_headings(text):
    slugs = set()
    for _, htext in HEADING_RE.findall(text):
        m = EXPLICIT_ID_RE.search(htext)
        if m:
            slugs.add(m.group(1))
        slugs.add(slugify(htext))
    return slugs


def collect_links(text):
    """Return (external_urls set, internal_anchors list, relative_links list)."""
    ext, anchors, rel = set(), [], []
    urls = []
    for _, url in MD_LINK_RE.findall(text):
        urls.append(url)
    urls += REF_DEF_RE.findall(text)
    urls += AUTOLINK_RE.findall(text)
    urls += BARE_URL_RE.findall(text)
    for url in urls:
        url = url.rstrip('.,;:')
        if url.startswith(('http://', 'https://')):
            ext.add(url)
        elif url.startswith('#'):
            anchors.append(url[1:])
        elif url.startswith(('/', './', '../')) or url.endswith(('.md', '.mdx')):
            rel.append(url)
    return ext, anchors, rel


def long_sentences(text, limit=30):
    prose = strip_code(text)
    prose = re.sub(r'^\s*[#>*\-+|].*$', '', prose, flags=re.M)   # drop headings/lists/tables/quotes
    prose = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', prose)        # link -> text
    prose = re.sub(r'\s+', ' ', prose)
    out = []
    for sent in re.split(r'(?<=[.!?])\s+', prose):
        words = [w for w in sent.split() if any(c.isalpha() for c in w)]
        if len(words) > limit:
            snippet = sent.strip()[:80]
            out.append((len(words), snippet))
    return out


def usuk_hits(text):
    prose = strip_code(text).lower()
    hits = []
    for us, uk in US_UK_PAIRS:
        has_us = re.search(r'\b' + re.escape(us) + r'\w*\b', prose)
        has_uk = re.search(r'\b' + re.escape(uk) + r'\w*\b', prose)
        if has_us and has_uk:
            hits.append((us, uk, "BOTH — inconsistent"))
        elif has_uk:
            hits.append((us, uk, "UK form present (US required)"))
    return hits


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    flags = {a for a in sys.argv[1:] if a.startswith('--')}
    if not args:
        sys.exit("usage: extract_refs.py DOC.md [--urls]")
    with open(args[0], encoding='utf-8') as f:
        raw = f.read()
    body = strip_code(strip_frontmatter(raw))

    ext, anchors, rel = collect_links(body)

    if '--urls' in flags:
        for u in sorted(ext):
            print(u)
        return

    headings = collect_headings(strip_frontmatter(raw))
    broken_anchors = sorted({a for a in anchors if a not in headings})

    print("=== LINK INVENTORY ===")
    print(f"external URLs (unique): {len(ext)}   "
          f"-> validate with: extract_refs.py {args[0]} --urls | bash check_links.sh")
    print(f"internal anchors: {len(anchors)}   relative doc links: {len(rel)}")
    print()
    print("=== BROKEN INTERNAL ANCHORS (no matching heading) ===")
    print("\n".join(f"  #{a}" for a in broken_anchors) or "  none")
    print()
    if rel:
        print("=== RELATIVE DOC LINKS (verify against repo manually) ===")
        for r in sorted(set(rel)):
            print(f"  {r}")
        print()
    print("=== LONG SENTENCES (>30 words — plain-language candidates) ===")
    ls = long_sentences(body)
    print("\n".join(f"  [{n}w] {s}…" for n, s in ls) or "  none")
    print()
    print("=== US/UK SPELLING ===")
    hits = usuk_hits(body)
    print("\n".join(f"  {us}/{uk}: {note}" for us, uk, note in hits) or "  none detected")


if __name__ == "__main__":
    main()
