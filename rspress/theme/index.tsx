import React, { useEffect, useRef, useState } from 'react';
import { Layout as DefaultLayout, Link, SwitchAppearance } from '@rspress/core/theme-original';
import { useLang, useLocation } from '@rspress/core/runtime';
import mediumZoom from 'medium-zoom';
import 'medium-zoom/dist/style.css';

export * from '@rspress/core/theme-original';

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
        <SwitchAppearance />
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

      {/* Mobile panel */}
      <div className={`rp-vnav-mobile-panel${mobileOpen ? ' open' : ''}`}>
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
          <SwitchAppearance />
        </div>
      </div>

      <style>{`
        .rp-version-aware-nav {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .rp-vnav-desktop {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .rp-nav-link {
          color: var(--rp-c-text-1);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .rp-nav-link:hover {
          color: var(--rp-c-brand);
        }
        /* Hide rspress's built-in language (NavLangs) + version (NavVersions)
           selectors. In rspress 2.x they render as plain '.rp-nav-menu__item'
           elements directly inside '.rp-nav__others', so we hide those while
           keeping the divider, the appearance toggle and the social links. */
        /* The appearance toggle is re-rendered inside our own nav cluster (in the
           right order: version, language, theme, product switcher), so hide
           rspress's entire built-in "others" group (langs/versions/appearance). */
        .rp-nav__others {
          display: none !important;
        }
        .rp-nav-sections {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          margin-left: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .rp-nav-link-active {
          color: var(--rp-c-brand);
        }
        .rp-version-current {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .rp-version-star {
          color: #f5b50a;
        }
        @media (max-width: 1280px) {
          .rp-nav-sections {
            display: none;
          }
        }
        /* We provide our own responsive burger (rp-vnav-burger) for the custom
           nav, so hide rspress's built-in mobile hamburger to avoid two burgers. */
        .rp-nav-hamburger {
          display: none !important;
        }
        .rp-nav-dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }
        .rp-nav-dropdown-button {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--rp-c-text-1);
          cursor: pointer;
          padding: 0.5rem 0.5rem;
          transition: color 0.2s;
          white-space: nowrap;
          background: none;
          border: none;
          font: inherit;
        }
        .rp-nav-dropdown-button:hover {
          color: var(--rp-c-text-2);
        }
        .rp-nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          right: 0;
          min-width: 140px;
          padding: 0.5rem;
          background: var(--rp-c-bg);
          border: 1px solid var(--rp-c-divider-light);
          border-radius: var(--rp-radius-large);
          box-shadow: var(--rp-shadow-3);
          z-index: 100;
          transition: opacity 0.2s;
        }
        .rp-nav-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.75rem;
          color: var(--rp-c-text-1);
          text-decoration: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          white-space: nowrap;
        }
        .rp-nav-dropdown-item:hover {
          background: var(--rp-c-bg-mute);
        }
        .rp-nav-dropdown-item-active {
          color: var(--rp-c-brand);
        }
        .rp-lang-current {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .rp-lang-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--rp-c-text-2);
          text-transform: uppercase;
        }

        .rp-product-switcher .rp-nav-dropdown-button {
          padding: 0.4rem;
        }
        .rp-product-switcher .rp-nav-dropdown-menu {
          width: 16rem;
          padding: 0.5rem;
        }
        .rp-product-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.5rem;
          color: var(--rp-c-text-1);
          text-decoration: none;
          border-radius: 0.5rem;
        }
        .rp-product-item:hover {
          background: var(--rp-c-bg-mute);
        }
        .rp-product-item-active {
          background: var(--rp-c-bg-mute);
        }
        .rp-product-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
        .rp-product-label {
          font-size: 0.9rem;
        }

        /* --- Responsive burger (mobile / tablet) --- */
        .rp-vnav-burger {
          display: none;
          align-items: center;
          justify-content: center;
          padding: 6px;
          color: var(--rp-c-text-1);
          background: transparent;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .rp-vnav-burger:hover {
          background: var(--rp-c-bg-mute);
          color: var(--rp-c-brand);
        }
        .rp-vnav-mobile-panel {
          display: none;
          position: absolute;
          top: var(--rp-nav-height);
          right: 0;
          width: min(280px, 92vw);
          max-height: calc(100vh - var(--rp-nav-height));
          overflow-y: auto;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--rp-c-bg);
          border: 1px solid var(--rp-c-divider-light);
          border-radius: var(--rp-radius-large);
          box-shadow: var(--rp-shadow-3);
          z-index: 100;
        }
        .rp-vnav-mobile-section {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--rp-c-divider-light);
        }
        .rp-vnav-mobile-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .rp-vnav-mobile-title {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--rp-c-text-2);
          padding: 0.25rem 0.5rem;
        }
        .rp-vnav-mobile-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          color: var(--rp-c-text-1);
          text-decoration: none;
          border-radius: 0.5rem;
          font-size: 0.9rem;
        }
        .rp-vnav-mobile-link:hover {
          background: var(--rp-c-bg-mute);
        }
        .rp-vnav-mobile-link-active {
          color: var(--rp-c-brand);
        }
        .rp-vnav-mobile-badge {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
        }
        .rp-vnav-mobile-appearance {
          padding-top: 0.25rem;
        }

        @media (max-width: 1280px) {
          .rp-vnav-desktop {
            display: none;
          }
          .rp-vnav-burger {
            display: flex;
          }
          .rp-vnav-mobile-panel.open {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Enables click-to-zoom on documentation images, mirroring the medium-zoom
 * behaviour of the Docusaurus site (which zoomed `.markdown img`). We re-attach
 * on every navigation because rspress swaps the page content client-side, and
 * pick the overlay background from the active theme (white in light mode, the
 * Centreon navy in dark mode).
 */
function useImageZoom() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    const zoom = mediumZoom('.rspress-doc img, .rp-doc img', {
      background: isDark ? '#00003d' : '#ffffff',
      margin: 24,
    });

    return () => zoom.detach();
  }, [pathname]);
}

/**
 * Global footer rendered on documentation pages, mirroring the Docusaurus
 * footer: corporate links, the Centreon logo and the copyright line.
 */
function SiteFooter() {
  return (
    <footer className="rp-site-footer">
      <div className="rp-site-footer__inner">
        <picture>
          <img
            className="rp-site-footer__logo rp-site-footer__logo--light"
            src="/img/logo_centreon_dark.png"
            alt="Centreon"
          />
          <img
            className="rp-site-footer__logo rp-site-footer__logo--dark"
            src="/img/logo_centreon.png"
            alt="Centreon"
          />
        </picture>
        <nav className="rp-site-footer__links" aria-label="Footer">
          <a href="https://www.centreon.com/en/" target="_blank" rel="noreferrer">
            Corporate Website
          </a>
          <a href="https://www.centreon.com/en/blog/" target="_blank" rel="noreferrer">
            Blog
          </a>
          <a href="https://download.centreon.com/" target="_blank" rel="noreferrer">
            Download
          </a>
        </nav>
        <div className="rp-site-footer__copyright">Copyright © 2005 - 2026 Centreon</div>
      </div>
      <style>{`
        .rp-site-footer {
          margin-top: 3rem;
          padding: 2.5rem 1.5rem;
          border-top: 1px solid var(--rp-c-divider-light);
        }
        .rp-site-footer__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }
        .rp-site-footer__logo {
          height: 34px;
          width: auto;
        }
        .rp-site-footer__logo--dark {
          display: none;
        }
        .dark .rp-site-footer__logo--light {
          display: none;
        }
        .dark .rp-site-footer__logo--dark {
          display: inline-block;
        }
        .rp-site-footer__links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .rp-site-footer__links a {
          color: var(--rp-c-text-2);
          text-decoration: none;
          transition: color 0.2s;
        }
        .rp-site-footer__links a:hover {
          color: var(--rp-c-brand);
        }
        .rp-site-footer__copyright {
          font-size: 0.8125rem;
          color: var(--rp-c-text-2);
        }
      `}</style>
    </footer>
  );
}

export function Layout(props: any) {
  useImageZoom();
  return (
    <DefaultLayout
      {...props}
      afterNavTitle={<NavSections />}
      afterNavMenu={<VersionAwareNav />}
      bottom={<SiteFooter />}
    />
  );
}
