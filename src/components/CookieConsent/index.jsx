/**
 * Cookie banner and preferences window, the same as on www.centreon.com
 * (centreon/WebApp-corporate-website: src/components/Tracking.astro): same
 * texts, categories, buttons and storage ("cookie-consent-v2" in
 * localStorage). The consent itself is applied by the script of
 * src/plugins/cookie-consent, in the <head>.
 *
 * Any element with a data-cookie-settings attribute opens the preferences
 * (the "Manage cookies" link of the footer).
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { translate } from '@docusaurus/Translate';
import { usePluginData } from '@docusaurus/useGlobalData';
import './styles.css';

const STORAGE_KEY = 'cookie-consent-v2';

const DEFAULT_PREFS = { necessary: true, measurement: true, performance: false, functional: false, advertising: false };

const currentPrefs = () => window.__cookieConsent || DEFAULT_PREFS;

function save(prefs) {
  // A category withdrawn while its scripts already run in the page: they
  // would keep measuring (and setting their cookies) until the next load.
  // The page reloads to stop them.
  const withdrawn =
    (!prefs.performance && window.__gaLoaded) || (prefs.measurement === false && window.__quantaLoaded);
  window.__cookieConsent = prefs;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (e) {
    // Storage disabled: the choice applies to this page only.
  }
  window.__applyConsent?.(prefs);
  if (withdrawn) {
    window.location.reload();
  }
}

const acceptAll = () =>
  save({ necessary: true, measurement: true, performance: true, functional: true, advertising: true });

// The technical measurement (exempt) is not affected by "Only necessary
// cookies": only its switch in the preferences turns it off.
const necessaryOnly = () =>
  save({
    necessary: true,
    measurement: currentPrefs().measurement !== false,
    performance: false,
    functional: false,
    advertising: false,
  });

const privacyHref = () =>
  translate({ id: 'footer.legal.privacy.url', message: 'https://www.centreon.com/privacy-policy/' });
const privacyLabel = () => translate({ id: 'cookie.privacyPolicy', message: 'Privacy policy' });

const Chevron = () => (
  <svg className="cookie-chevron-icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
    <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M4 6l4 4 4-4" />
  </svg>
);

function Category({ id, title, description, locked, checked, onChange }) {
  const [expanded, setExpanded] = useState(false);
  const alwaysActive = translate({ id: 'cookie.modal.alwaysActive', message: 'Always active' });
  return (
    <div className="cookie-cat">
      <div className="cookie-cat-head">
        <button
          type="button"
          className="cookie-cat-chevron"
          aria-expanded={expanded}
          aria-controls={`cookie-desc-${id}`}
          onClick={() => setExpanded(!expanded)}>
          <Chevron />
          <span className="cookie-cat-title">{title}</span>
        </button>
        {locked ? (
          <span className="cookie-switch cookie-switch-locked">
            <input type="checkbox" checked disabled aria-label={alwaysActive} />
            <span className="cookie-switch-track">
              <span className="cookie-switch-thumb" />
            </span>
          </span>
        ) : (
          <label className="cookie-switch">
            <input type="checkbox" aria-label={title} checked={checked} onChange={(e) => onChange(e.target.checked)} />
            <span className="cookie-switch-track">
              <span className="cookie-switch-thumb" />
            </span>
          </label>
        )}
      </div>
      <p id={`cookie-desc-${id}`} className="cookie-cat-desc" hidden={!expanded}>
        {description}
        {locked && (
          <>
            {' '}
            <em>{alwaysActive}</em>
          </>
        )}
      </p>
    </div>
  );
}

function PreferencesModal({ dialogRef, gaId }) {
  const [tab, setTab] = useState('settings');
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  // Switches show the stored choice each time the window opens.
  useEffect(() => {
    const dialog = dialogRef.current;
    const onOpen = () => {
      const stored = currentPrefs();
      setPrefs({ ...stored, measurement: stored.measurement !== false });
      setTab('settings');
    };
    dialog.addEventListener('cookie-open', onOpen);
    return () => dialog.removeEventListener('cookie-open', onOpen);
  }, [dialogRef]);

  const set = (category) => (value) => setPrefs((current) => ({ ...current, [category]: value }));
  const close = () => dialogRef.current.close();
  const apply = (action) => () => {
    action();
    close();
  };

  const tabs = [
    ['settings', translate({ id: 'cookie.modal.tab.settings', message: 'Settings' })],
    ['cookies', translate({ id: 'cookie.modal.tab.cookies', message: 'Cookies' })],
    ['policy', translate({ id: 'cookie.modal.tab.policy', message: 'Cookie policy' })],
  ];

  return (
    <dialog
      ref={dialogRef}
      id="cookie-preferences-modal"
      className="cookie-modal"
      tabIndex={-1}
      aria-label={translate({ id: 'cookie.modal.title', message: 'Privacy settings' })}
      onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="cookie-modal-header">
        <p className="cookie-modal-title">{translate({ id: 'cookie.modal.title', message: 'Privacy settings' })}</p>
        <a className="cookie-modal-policy-link" href={privacyHref()}>
          {privacyLabel()}
        </a>
        <button
          type="button"
          className="cookie-modal-close"
          aria-label={translate({ id: 'cookie.modal.close', message: 'Close' })}
          onClick={close}>
          ×
        </button>
      </div>

      <div className="cookie-modal-tabs" role="tablist">
        {tabs.map(([name, label]) => (
          <button
            key={name}
            type="button"
            className="cookie-tab"
            role="tab"
            aria-selected={tab === name}
            onClick={() => setTab(name)}>
            {label}
          </button>
        ))}
      </div>

      <div className="cookie-modal-body">
        <div className="cookie-tab-panel" hidden={tab !== 'settings'}>
          <Category
            id="necessary"
            locked
            title={translate({ id: 'cookie.cat.necessary.title', message: 'Necessary' })}
            description={translate({
              id: 'cookie.cat.necessary.desc',
              message: "These cookies are required for the site to work properly and can't be switched off.",
            })}
          />
          <Category
            id="measurement"
            checked={prefs.measurement}
            onChange={set('measurement')}
            title={translate({ id: 'cookie.cat.measurement.title', message: 'Technical performance measurement' })}
            description={translate({
              id: 'cookie.cat.measurement.desc',
              message:
                "Anonymous measurement of the site's load times (Centreon Experience Monitoring), exempt from consent under CNIL rules. On by default, you can switch it off.",
            })}
          />
          <Category
            id="performance"
            checked={prefs.performance}
            onChange={set('performance')}
            title={translate({ id: 'cookie.cat.performance.title', message: 'Performance' })}
            description={translate({
              id: 'cookie.cat.performance.desc',
              message:
                'We use these cookies to gather anonymized audience statistics (Google Analytics) and improve the site.',
            })}
          />
          <Category
            id="functional"
            checked={prefs.functional}
            onChange={set('functional')}
            title={translate({ id: 'cookie.cat.functional.title', message: 'Functional' })}
            description={translate({
              id: 'cookie.cat.functional.desc',
              message:
                'These cookies would enable extra features such as live chat, videos, or social media sharing. The site does not use any at this time.',
            })}
          />
          <Category
            id="advertising"
            checked={prefs.advertising}
            onChange={set('advertising')}
            title={translate({ id: 'cookie.cat.advertising.title', message: 'Advertising' })}
            description={translate({
              id: 'cookie.cat.advertising.desc',
              message:
                'These cookies and trackers would be used to measure our advertising campaigns. The documentation site does not use any at this time.',
            })}
          />
        </div>

        <div className="cookie-tab-panel" hidden={tab !== 'cookies'}>
          <p>
            {translate({
              id: 'cookie.cookies.intro',
              message: 'Here is the list of cookies actually set on this site, depending on the choices above.',
            })}
          </p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>{translate({ id: 'cookie.cookies.table.name', message: 'Name' })}</th>
                <th>{translate({ id: 'cookie.cookies.table.provider', message: 'Provider' })}</th>
                <th>{translate({ id: 'cookie.cookies.table.purpose', message: 'Purpose' })}</th>
                <th>{translate({ id: 'cookie.cookies.table.duration', message: 'Duration' })}</th>
              </tr>
            </thead>
            <tbody>
              {gaId && (
                <tr>
                  <td>_ga, _gid</td>
                  <td>Google Analytics</td>
                  <td>{translate({ id: 'cookie.cookies.ga.purpose', message: 'Audience measurement (Google Analytics)' })}</td>
                  <td>{translate({ id: 'cookie.cookies.ga.duration', message: '13 months' })}</td>
                </tr>
              )}
              <tr>
                <td>_qta_rum</td>
                <td>Centreon Experience Monitoring</td>
                <td>
                  {translate({
                    id: 'cookie.cookies.quanta.purpose',
                    message: 'Technical measurement of site performance (load times), exempt from consent',
                  })}
                </td>
                <td>{translate({ id: 'cookie.cookies.quanta.duration', message: '30 minutes of inactivity (session)' })}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cookie-tab-panel" hidden={tab !== 'policy'}>
          <p>
            {translate({
              id: 'cookie.policy.text',
              message:
                'When you visit the site, your operating system, IP address, access date and time, browser and language, and more generally your browsing behaviour are recorded to compute aggregated, anonymized usage statistics used to improve the site. Data collected via cookies is kept for a maximum of two years.',
            })}
          </p>
          <a href={privacyHref()}>{translate({ id: 'cookie.policy.link', message: 'Read the full privacy policy' })}</a>
        </div>
      </div>

      {/* Same visual weight for the 3 choices, as on the banner (CNIL: "Accept
          all" never more visible than refusing). Refusal on the left. */}
      <div className="cookie-consent-actions">
        <button type="button" className="btn-consent" onClick={apply(necessaryOnly)}>
          {translate({ id: 'cookie.modal.necessaryOnly', message: 'Only necessary cookies' })}
        </button>
        <button type="button" className="btn-consent" onClick={apply(() => save({ ...prefs, necessary: true }))}>
          {translate({ id: 'cookie.modal.saveSelection', message: 'Save selection' })}
        </button>
        <button type="button" className="btn-consent" onClick={apply(acceptAll)}>
          {translate({ id: 'cookie.modal.acceptAll', message: 'Accept all' })}
        </button>
      </div>
    </dialog>
  );
}

export default function CookieConsent() {
  const { gaId } = usePluginData('cookie-consent') ?? {};
  const bannerRef = useRef(null);
  const modalRef = useRef(null);
  // The preferences window, which most readers never open, is only rendered
  // the first time it is needed.
  const [modalMounted, setModalMounted] = useState(false);
  const [openRequested, setOpenRequested] = useState(0);

  // No choice yet: the banner opens.
  useEffect(() => {
    const banner = bannerRef.current;
    if (window.__cookieConsent || !banner?.showModal) {
      return undefined;
    }
    banner.showModal();
    // Focus on the window itself, not on a button: no choice looks
    // preselected; Tab leads to the buttons.
    banner.focus();
    // Safety net: extensions such as "I don't care about cookies" hide the
    // banner with CSS without closing the <dialog>, whose backdrop would then
    // silently block the whole page. The dialog is closed, with no consent
    // stored (optional tracking stays off).
    const hiddenCheck = setInterval(() => {
      if (!banner.open) {
        clearInterval(hiddenCheck);
        return;
      }
      const style = window.getComputedStyle(banner);
      if (style.display === 'none' || style.visibility === 'hidden' || banner.getClientRects().length === 0) {
        clearInterval(hiddenCheck);
        banner.close();
      }
    }, 400);
    return () => clearInterval(hiddenCheck);
  }, []);

  const openPreferences = useCallback(() => {
    if (bannerRef.current?.open) {
      bannerRef.current.close();
    }
    setModalMounted(true);
    setOpenRequested((n) => n + 1);
  }, []);

  useEffect(() => {
    const modal = modalRef.current;
    if (!openRequested || !modal || modal.open) {
      return;
    }
    modal.dispatchEvent(new Event('cookie-open'));
    modal.showModal();
    modal.focus();
  }, [openRequested, modalMounted]);

  useEffect(() => {
    const onClick = (event) => {
      if (event.target.closest?.('[data-cookie-settings]')) {
        event.preventDefault();
        openPreferences();
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [openPreferences]);

  const choose = (action) => () => {
    action();
    bannerRef.current?.close();
  };

  return (
    <>
      <dialog
        ref={bannerRef}
        id="cookie-banner"
        className="cookie-modal cookie-consent-dialog"
        tabIndex={-1}
        aria-label={translate({ id: 'cookie.title', message: 'We use cookies' })}>
        <div className="cookie-modal-header">
          <p className="cookie-modal-title">{translate({ id: 'cookie.title', message: 'We use cookies' })}</p>
          <a className="cookie-modal-policy-link" href={privacyHref()}>
            {privacyLabel()}
          </a>
        </div>
        <div className="cookie-modal-body">
          <p>
            {translate({
              id: 'cookie.text',
              message:
                'We use cookies and similar technologies on this site. Some are technically necessary and always set. We only use other cookies, for statistics, with your explicit consent. You can adjust or withdraw your consent at any time from the cookie settings. If you do not want optional cookies, click "Only necessary cookies".',
            })}
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button type="button" className="btn-consent" onClick={choose(necessaryOnly)}>
            {translate({ id: 'cookie.modal.necessaryOnly', message: 'Only necessary cookies' })}
          </button>
          <button type="button" className="btn-consent" onClick={openPreferences}>
            {translate({ id: 'cookie.customize', message: 'Customize' })}
          </button>
          <button type="button" className="btn-consent" onClick={choose(acceptAll)}>
            {translate({ id: 'cookie.accept', message: 'Accept all' })}
          </button>
        </div>
      </dialog>
      {modalMounted && <PreferencesModal dialogRef={modalRef} gaId={gaId} />}
    </>
  );
}
