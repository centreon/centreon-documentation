import React, { useRef, useState } from 'react';
import { Layout as DefaultLayout, Link, SwitchAppearance as OriginalSwitchAppearance } from '@rspress/core/theme-original';
import { useActiveMatcher, useLang, useLocation, usePage, useSidebar } from '@rspress/core/runtime';
import './index.css';

export * from '@rspress/core/theme-original';
// The default nav renders its own theme switch in .rp-nav__others, which is
// hidden in favor of the custom nav: render nothing there.
export function SwitchAppearance() {
  return null;
}
// Code block button icons drawn in CSS instead of inline SVG.
export { IconCopy, IconSuccess, IconWrap, IconWrapped } from './maskIcons';
// Lazily rendered sidebar groups (see components/Sidebar/SidebarGroup.tsx).
export { Sidebar, SidebarList } from './components/Sidebar';

const DEFAULT_VERSION = '26.10';
const VERSIONS = ['26.10', '25.10'] as const;
const PP_ENTRY = '/pp/integrations/plugin-packs/getting-started/introduction';
const CLOUD_ENTRY = '/cloud/getting-started/welcome';
const EM_ENTRY = '/experience-monitoring/getting-started/welcome';
const LOGMGMT_ENTRY = '/logmanagement/getting-started/welcome';

type Lang = 'en' | 'fr';

const LANG_META: Record<Lang, { short: string; label: string }> = {
  en: { short: 'GB', label: 'English' },
  fr: { short: 'FR', label: 'Français' },
};

/**
 * Product families, shown in the product switcher (grid icon) and the mobile
 * panel. "infra" (Infrastructure Monitoring) is the only versioned family.
 */
type FamilyKey = 'infra' | 'experience' | 'logmanagement';

const PRODUCTS: { key: FamilyKey; initials: string; color: string; label: string }[] = [
  { key: 'infra', initials: 'IM', color: '#0c00ff', label: 'Infrastructure Monitoring' },
  { key: 'experience', initials: 'XM', color: '#259788', label: 'Experience Monitoring' },
  { key: 'logmanagement', initials: 'LM', color: '#611485', label: 'Log Management' },
];

function familyOf(pathname: string): FamilyKey {
  const { rest } = parsePathname(pathname);
  if (rest.startsWith('/experience-monitoring')) return 'experience';
  if (rest.startsWith('/logmanagement')) return 'logmanagement';
  return 'infra';
}

/** Entry (home) link for a product family, language- and version-aware. */
function familyHome(key: FamilyKey, lang: Lang, version: string): string {
  const lp = lang === 'fr' ? '/fr' : '';
  if (key === 'experience') return `${lp}${EM_ENTRY}`;
  if (key === 'logmanagement') return `${lp}${LOGMGMT_ENTRY}`;
  return `${lp}/${version}/getting-started/welcome`;
}

/** Header sections shown for the current product family. */
function headerSections(family: FamilyKey, lang: Lang, version: string): { key: string; label: string; href: string }[] {
  const lp = lang === 'fr' ? '/fr' : '';
  if (family === 'infra') {
    return [
      { key: 'onprem', label: 'Infra Monitoring OnPrem', href: `${lp}/${version}/getting-started/welcome` },
      { key: 'cloud', label: 'Infra Monitoring Cloud', href: `${lp}${CLOUD_ENTRY}` },
      { key: 'pp', label: lang === 'fr' ? 'Connecteurs de supervision' : 'Monitoring Connectors', href: `${lp}${PP_ENTRY}` },
    ];
  }
  if (family === 'experience') return [{ key: 'experience', label: 'Experience Monitoring', href: `${lp}${EM_ENTRY}` }];
  return [{ key: 'logmanagement', label: 'Log Management', href: `${lp}${LOGMGMT_ENTRY}` }];
}

/** Which header section is active for the current path. */
function activeSection(pathname: string): string {
  const { rest } = parsePathname(pathname);
  if (rest.startsWith('/experience-monitoring')) return 'experience';
  if (rest.startsWith('/logmanagement')) return 'logmanagement';
  if (rest === '/cloud' || rest.startsWith('/cloud/')) return 'cloud';
  if (rest === '/pp' || rest.startsWith('/pp/')) return 'pp';
  return 'onprem';
}

/**
 * Parses the language and version out of a pathname.
 *
 * Why a custom parser instead of useVersion(): our docs are organised as
 * docs/<lang>/<version>/..., but rspress's route service expects
 * docs/<version>/<lang>/... (see getRoutePathParts in @rspress/core). Because of
 * this mismatch, rspress can't detect the version from the file path and
 * fills page.version with the default version for every page — so useVersion()
 * always returns '26.10'. We work around that by reading the version straight
 * from the URL, which always reflects the user's actual location.
 *
 * `versioned` tells whether a version segment was actually present: only the
 * Infrastructure Monitoring on-prem docs are versioned, so the version selector
 * is hidden everywhere else (cloud, connectors, experience, log management).
 */
function parsePathname(pathname: string): { lang: Lang; version: string; rest: string; versioned: boolean } {
  let path = pathname.replace(/\.html$/, '');
  let lang: Lang = 'en';
  let version = '';
  let versioned = false;

  if (path.startsWith('/fr/') || path === '/fr') {
    lang = 'fr';
    path = path.slice(3) || '/';
  }

  for (const v of VERSIONS) {
    if (path.startsWith(`/${v}/`) || path === `/${v}`) {
      version = v;
      versioned = true;
      path = path.slice(`/${v}`.length) || '/';
      break;
    }
  }

  if (!version) version = DEFAULT_VERSION;

  return { lang, version, rest: path, versioned };
}

function buildPathname(lang: Lang, version: string, rest: string, versioned: boolean): string {
  const langPart = lang === 'fr' ? '/fr' : '';
  const tail = rest === '/' ? '' : rest;
  // Only versioned (on-prem) pages carry a /<version>/ segment. Non-versioned
  // trees (homepage, cloud, connectors, experience, log management) must not,
  // otherwise switching language would build e.g. /fr/26.10/cloud/... (a 404)
  // or send the homepage to /fr/26.10 instead of the French homepage /fr.
  if (versioned) return `${langPart}/${version}${tail}`;
  return `${langPart}${tail}` || '/';
}

type DropdownProps = {
  buttonContent: React.ReactNode;
  className?: string;
  hideChevron?: boolean;
  children: React.ReactNode;
};

function Dropdown({ buttonContent, className, hideChevron, children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 150);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
  };
  // Close when focus moves outside the dropdown (keyboard navigation).
  const handleBlur = (e: React.FocusEvent) => {
    if (!rootRef.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={`rp-nav-dropdown ${className ?? ''}`}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className="rp-nav-dropdown-button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {buttonContent}
        {!hideChevron && (
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path fill="currentColor" d="M7 10l5 5 5-5z" />
          </svg>
        )}
      </button>
      <div
        className="rp-nav-dropdown-menu"
        style={{ opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </div>
  );
}

function VersionSelector() {
  const { pathname } = useLocation();
  const { lang, version, rest } = parsePathname(pathname);

  return (
    <Dropdown
      buttonContent={
        <span className="rp-version-current">
          <span className="rp-version-star" aria-hidden="true">★</span>
          {version}
        </span>
      }
    >
      {VERSIONS.map((v) => (
        <Link
          key={v}
          href={buildPathname(lang, v, rest, true)}
          className={`rp-nav-dropdown-item${v === version ? ' rp-nav-dropdown-item-active' : ''}`}
        >
          {v}
        </Link>
      ))}
    </Dropdown>
  );
}

function LangBadge({ short }: { short: string }) {
  return <span className="rp-lang-badge">{short}</span>;
}

function LanguageSelector() {
  const { pathname } = useLocation();
  const { lang, version, rest, versioned } = parsePathname(pathname);
  const meta = LANG_META[lang];

  return (
    <Dropdown
      buttonContent={
        <span className="rp-lang-current">
          <LangBadge short={meta.short} />
          {meta.label}
        </span>
      }
    >
      {(Object.keys(LANG_META) as Lang[]).map((l) => (
        <Link
          key={l}
          href={buildPathname(l, version, rest, versioned)}
          className={`rp-nav-dropdown-item rp-lang-item${l === lang ? ' rp-nav-dropdown-item-active' : ''}`}
        >
          <LangBadge short={LANG_META[l].short} />
          {LANG_META[l].label}
        </Link>
      ))}
    </Dropdown>
  );
}

/**
 * Product sections rendered on the LEFT of the navbar (next to the logo),
 * mirroring docs.centreon.com. Only the current product family's sections are
 * shown, with the active one highlighted.
 */
function NavSections() {
  const { pathname } = useLocation();
  const lang = useLang() as Lang;
  const { version } = parsePathname(pathname);
  const family = familyOf(pathname);
  const sections = headerSections(family, lang, version);
  const active = activeSection(pathname);

  // Like docs.centreon.com, the home page navbar has no section links.
  if (parsePathname(pathname).rest === '/') return null;

  return (
    <div className="rp-nav-sections">
      {sections.map((sec) => (
        <Link
          key={sec.key}
          href={sec.href}
          className={`rp-nav-link${sec.key === active ? ' rp-nav-link-active' : ''}`}
        >
          {sec.label}
        </Link>
      ))}
    </div>
  );
}

const PRODUCT_GRID_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="5" cy="5" r="2" />
    <circle cx="12" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
  </svg>
);

/**
 * Product switcher (grid icon) mirroring docs.centreon.com: a high-level
 * dropdown to jump between the Centreon product families.
 */
function ProductSwitcher() {
  const { pathname } = useLocation();
  const lang = useLang() as Lang;
  const { version } = parsePathname(pathname);
  const active = familyOf(pathname);

  return (
    <Dropdown className="rp-product-switcher" hideChevron buttonContent={PRODUCT_GRID_ICON}>
      {PRODUCTS.map((p) => (
        <Link
          key={p.key}
          href={familyHome(p.key, lang, version)}
          className={`rp-product-item${p.key === active ? ' rp-product-item-active' : ''}`}
        >
          <span className="rp-product-icon" style={{ backgroundColor: p.color }}>
            {p.initials}
          </span>
          <span className="rp-product-label">{p.label}</span>
        </Link>
      ))}
    </Dropdown>
  );
}

function VersionAwareNav() {
  const { pathname } = useLocation();
  const lang = useLang() as Lang;
  const { version, rest, versioned } = parsePathname(pathname);
  const family = familyOf(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = headerSections(family, lang, version);
  const active = activeSection(pathname);
  const close = () => setMobileOpen(false);

  return (
    <div className="rp-version-aware-nav">
      {/* Desktop right cluster: version (versioned only), language, theme, product switcher */}
      <div className="rp-vnav-desktop">
        {versioned && <VersionSelector />}
        <LanguageSelector />
        <OriginalSwitchAppearance />
        <ProductSwitcher />
      </div>

      {/* Mobile: hamburger button toggling a panel */}
      <button
        type="button"
        className="rp-vnav-burger"
        aria-label="Menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          {mobileOpen ? (
            <path fill="currentColor" d="M6.4 4.99L4.99 6.4 10.59 12l-5.6 5.6L6.4 19l5.6-5.6 5.6 5.6 1.41-1.4-5.6-5.6 5.6-5.6L17.6 4.99 12 10.59z" />
          ) : (
            <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          )}
        </svg>
      </button>

      {/* Mobile panel, only rendered while open (not repeated in every SSG page) */}
      {mobileOpen && (
      <div className="rp-vnav-mobile-panel open">
        {family === 'infra' && (
          <div className="rp-vnav-mobile-section">
            {sections.map((sec) => (
              <Link
                key={sec.key}
                href={sec.href}
                className={`rp-vnav-mobile-link${sec.key === active ? ' rp-vnav-mobile-link-active' : ''}`}
                onClick={close}
              >
                {sec.label}
              </Link>
            ))}
          </div>
        )}
        <div className="rp-vnav-mobile-section">
          <div className="rp-vnav-mobile-title">{lang === 'fr' ? 'Produits' : 'Products'}</div>
          {PRODUCTS.map((p) => (
            <Link
              key={p.key}
              href={familyHome(p.key, lang, version)}
              className={`rp-vnav-mobile-link${p.key === family ? ' rp-vnav-mobile-link-active' : ''}`}
              onClick={close}
            >
              <span className="rp-vnav-mobile-badge" style={{ backgroundColor: p.color }}>
                {p.initials}
              </span>
              {p.label}
            </Link>
          ))}
        </div>
        {versioned && (
          <div className="rp-vnav-mobile-section">
            <div className="rp-vnav-mobile-title">Version</div>
            {VERSIONS.map((v) => (
              <Link
                key={v}
                href={buildPathname(lang, v, rest, true)}
                className={`rp-vnav-mobile-link${v === version ? ' rp-vnav-mobile-link-active' : ''}`}
                onClick={close}
              >
                {v}
              </Link>
            ))}
          </div>
        )}
        <div className="rp-vnav-mobile-section">
          <div className="rp-vnav-mobile-title">{lang === 'fr' ? 'Langue' : 'Language'}</div>
          {(Object.keys(LANG_META) as Lang[]).map((l) => (
            <Link
              key={l}
              href={buildPathname(l, version, rest, versioned)}
              className={`rp-vnav-mobile-link${l === lang ? ' rp-vnav-mobile-link-active' : ''}`}
              onClick={close}
            >
              <LangBadge short={LANG_META[l].short} />
              {LANG_META[l].label}
            </Link>
          ))}
        </div>
        <div className="rp-vnav-mobile-section rp-vnav-mobile-appearance">
          <div className="rp-vnav-mobile-title">{lang === 'fr' ? 'Thème' : 'Theme'}</div>
          <OriginalSwitchAppearance />
        </div>
      </div>
      )}
    </div>
  );
}

interface SidebarNode {
  text?: string;
  link?: string;
  items?: SidebarNode[];
}

/** Sidebar entries leading to the active page, the page itself last. */
function findTrail(items: SidebarNode[], isActive: (link: string) => boolean): SidebarNode[] | null {
  for (const item of items) {
    if (item.items) {
      const sub = findTrail(item.items, isActive);
      if (sub) return [item, ...sub];
    }
    if (item.link && isActive(item.link)) return [item];
  }
  return null;
}

/** Breadcrumbs and version badge above the page title, like Docusaurus. */
function DocBreadcrumbs() {
  const { page } = usePage();
  const sidebar = useSidebar() as SidebarNode[];
  const isActive = useActiveMatcher();
  const { pathname } = useLocation();
  const lang = useLang() as Lang;
  if (page.pageType !== 'doc') return null;

  const trail = findTrail(sidebar, isActive);
  if (!trail) return null;
  const { version, versioned } = parsePathname(pathname);
  const section = headerSections(familyOf(pathname), lang, version).find((s) => s.key === activeSection(pathname));
  const current = trail[trail.length - 1];

  return (
    <>
      <nav className="rp-breadcrumbs" aria-label="Breadcrumbs">
        <ul>
          <li>
            <Link href={lang === 'fr' ? '/fr/' : '/'} aria-label={lang === 'fr' ? "Page d'accueil" : 'Home page'}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
            </Link>
          </li>
          {section && (
            <li>
              <Link href={section.href}>{section.label}</Link>
            </li>
          )}
          {trail.slice(0, -1).map((item, i) => (
            <li key={i}>{item.link ? <Link href={item.link}>{item.text}</Link> : <span>{item.text}</span>}</li>
          ))}
          <li className="rp-breadcrumbs__item--active">
            <span>{current.text}</span>
          </li>
        </ul>
      </nav>
      {versioned && (
        <span className="rp-version-badge">
          {lang === 'fr' ? 'Version :' : 'Version:'} {version}
        </span>
      )}
    </>
  );
}

const FOOTER_LINKS = [
  { label: 'Corporate Website', href: 'https://www.centreon.com/en/' },
  { label: 'Blog', href: 'https://www.centreon.com/en/blog/' },
  { label: 'Download', href: 'https://download.centreon.com/' },
];

/**
 * Global footer, like the Docusaurus one: links on one side, logo and
 * copyright on the other. Doc pages use the inverted color scheme.
 */
function SiteFooter() {
  const { page } = usePage();
  const inverted = page.pageType === 'doc';
  return (
    <footer className={`rp-site-footer${inverted ? ' rp-site-footer--inverted' : ''}`}>
      <div className="rp-site-footer__container">
        <nav className="rp-site-footer__links" aria-label="Footer">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </nav>
        <div className="rp-site-footer__bottom">
          <img
            className="rp-site-footer__logo rp-site-footer__logo--on-light"
            src="/img/logo_centreon_dark.png"
            alt="Centreon Open Source Logo"
            width={257}
            height={61}
            loading="lazy"
            decoding="async"
          />
          <img
            className="rp-site-footer__logo rp-site-footer__logo--on-dark"
            src="/img/logo_centreon.png"
            alt="Centreon Open Source Logo"
            width={257}
            height={61}
            loading="lazy"
            decoding="async"
          />
          <div className="rp-site-footer__copyright">Copyright © 2005 - 2026 Centreon</div>
        </div>
      </div>
    </footer>
  );
}

export function Layout(props: any) {
  return (
    <DefaultLayout
      {...props}
      afterNavTitle={<NavSections />}
      afterNavMenu={<VersionAwareNav />}
      beforeDocContent={<DocBreadcrumbs />}
      bottom={<SiteFooter />}
    />
  );
}
