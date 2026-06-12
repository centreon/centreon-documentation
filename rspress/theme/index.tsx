import React, { useRef, useState } from 'react';
import { Layout as DefaultLayout, Link } from '@rspress/core/theme-original';
import { useLang, useLocation } from '@rspress/core/runtime';

export * from '@rspress/core/theme-original';

const DEFAULT_VERSION = '26.10';
const VERSIONS = ['26.10', '25.10'] as const;
const PP_ENTRY = '/pp/integrations/plugin-packs/getting-started/introduction';
const CLOUD_ENTRY = '/cloud/getting-started/welcome';
const LOGMGMT_ENTRY = '/logmanagement/getting-started/welcome';

type Lang = 'en' | 'fr';

const LANG_META: Record<Lang, { short: string; label: string }> = {
  en: { short: 'GB', label: 'English' },
  fr: { short: 'FR', label: 'Français' },
};

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
 */
function parsePathname(pathname: string): { lang: Lang; version: string; rest: string } {
  let path = pathname.replace(/\.html$/, '');
  let lang: Lang = 'en';
  let version = '';

  if (path.startsWith('/fr/') || path === '/fr') {
    lang = 'fr';
    path = path.slice(3) || '/';
  }

  for (const v of VERSIONS) {
    if (path.startsWith(`/${v}/`) || path === `/${v}`) {
      version = v;
      path = path.slice(`/${v}`.length) || '/';
      break;
    }
  }

  if (!version) version = DEFAULT_VERSION;

  return { lang, version, rest: path };
}

function buildPathname(lang: Lang, version: string, rest: string): string {
  const langPart = lang === 'fr' ? '/fr' : '';
  return `${langPart}/${version}${rest === '/' ? '' : rest}`;
}

type DropdownProps = {
  buttonContent: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

function Dropdown({ buttonContent, className, children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const handleMouseEnter = () => {
    clearCloseTimer();
    setOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className={`rp-nav-dropdown ${className ?? ''}`} onMouseLeave={handleMouseLeave}>
      <div className="rp-nav-dropdown-button" onMouseEnter={handleMouseEnter}>
        {buttonContent}
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      <div
        className="rp-nav-dropdown-menu"
        onMouseEnter={clearCloseTimer}
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
    <Dropdown buttonContent={<span>{version}</span>}>
      {VERSIONS.map((v) => (
        <Link
          key={v}
          href={buildPathname(lang, v, rest)}
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
  const { lang, version, rest } = parsePathname(pathname);
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
          href={buildPathname(l, version, rest)}
          className={`rp-nav-dropdown-item rp-lang-item${l === lang ? ' rp-nav-dropdown-item-active' : ''}`}
        >
          <LangBadge short={LANG_META[l].short} />
          {LANG_META[l].label}
        </Link>
      ))}
    </Dropdown>
  );
}

function VersionAwareNav() {
  const { pathname } = useLocation();
  const lang = useLang() as Lang;
  const { version } = parsePathname(pathname);

  const langPrefix = lang === 'fr' ? '/fr' : '';
  const infraLink = `${langPrefix}/${version}/getting-started/welcome`;
  const cloudLink = `${langPrefix}${CLOUD_ENTRY}`;
  const ppLink = `${langPrefix}${PP_ENTRY}`;
  const logMgmtLink = `${langPrefix}${LOGMGMT_ENTRY}`;
  const connectorLabel = lang === 'fr' ? 'Connecteurs de supervision' : 'Monitoring Connectors';
  const logMgmtLabel = lang === 'fr' ? 'Log Management' : 'Log Management';

  return (
    <div className="rp-version-aware-nav">
      <Link href={infraLink} className="rp-nav-link">
        Infra Monitoring OnPrem
      </Link>
      <Link href={cloudLink} className="rp-nav-link">
        Infra Monitoring Cloud
      </Link>
      <Link href={ppLink} className="rp-nav-link">
        {connectorLabel}
      </Link>
      <Link href={logMgmtLink} className="rp-nav-link">
        {logMgmtLabel}
      </Link>
      <VersionSelector />
      <LanguageSelector />
      <style>{`
        .rp-version-aware-nav {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          font-size: 0.875rem;
          font-weight: 500;
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
        /* Hide rspress's built-in language + version selectors. They both use
           class 'translation'. We replace them with the custom selectors above
           because:
           - the version selector reads page.version which is always '26.10'
             with our docs/<lang>/<version> layout (see parsePathname comment);
           - the language selector only shows a globe icon, but we want the
             current language to be visible like Docusaurus does. */
        .translation {
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
      `}</style>
    </div>
  );
}

export function Layout(props: any) {
  return (
    <DefaultLayout
      {...props}
      afterNavMenu={<VersionAwareNav />}
    />
  );
}
