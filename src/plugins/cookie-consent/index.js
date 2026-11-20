/**
 * Cookie consent (GDPR), the same as on www.centreon.com
 * (centreon/WebApp-corporate-website: src/components/Tracking.astro):
 * Google Consent Mode v2, everything denied by default, and Google Analytics
 * loaded only once the reader accepts the "Performance" category.
 *
 * This plugin replaces the gtag option of the classic preset, which loaded
 * Google Analytics on every page without asking. It injects, at the top of the
 * <head>, the script that applies the stored choice before any tag loads, and
 * sends a page view on each client-side navigation (what the gtag plugin did).
 * The banner and the preferences window are src/components/CookieConsent,
 * rendered by src/theme/Root.js.
 *
 * The Quanta snippet (Centreon Experience Monitoring RUM, in headTags of
 * docusaurus.config.js) is a technical performance measurement, exempt from
 * consent: it loads unless the reader switched it off (`measurement: false`).
 *
 * Options: { gaId } — Google Analytics is only loaded in production builds,
 * as with the gtag plugin.
 */
module.exports = function cookieConsentPlugin(context, { gaId = '' } = {}) {
  const cfg = { gaId: process.env.NODE_ENV === 'production' ? gaId : '' };

  return {
    name: 'cookie-consent',

    contentLoaded({ actions }) {
      actions.setGlobalData(cfg);
    },

    getClientModules() {
      return [require.resolve('./client.js')];
    },

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `(${consentScript.toString()})(${JSON.stringify(cfg)});`,
          },
        ],
      };
    },
  };
};

// Runs in the browser, in the <head>, before any tag. Same logic as
// Tracking.astro on www.centreon.com, without the trackers the documentation
// does not use (Google Tag Manager, HubSpot, Lemlist).
/* eslint-disable no-var, prefer-rest-params */
function consentScript(cfg) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });

  // Google Analytics ("Performance" category only).
  window.__loadTrackers = function () {
    if (cfg.gaId && !window.__gaLoaded) {
      window.__gaLoaded = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + cfg.gaId;
      document.head.appendChild(s);
      gtag('js', new Date());
      gtag('config', cfg.gaId, { anonymize_ip: true });
    }
  };

  // Cookies set by each category, removed when it is refused or withdrawn
  // (CNIL: withdrawing consent must delete what was set). The documentation
  // loads no advertising tracker, so that category sets none.
  var CONSENT_COOKIES = {
    performance: /^(_ga($|_)|_gid$|_gat)/,
    measurement: /^_qta_/,
  };
  function clearCookies(pattern) {
    var parts = location.hostname.split('.');
    var domains = [''];
    for (var i = 0; i < parts.length - 1; i++) domains.push('; domain=.' + parts.slice(i).join('.'));
    document.cookie.split('; ').forEach(function (c) {
      var name = c.split('=')[0];
      if (!name || !pattern.test(name)) return;
      domains.forEach(function (d) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
      });
    });
  }

  // Applies a choice {necessary, measurement, performance, functional,
  // advertising} to Consent Mode and loads the trackers it allows.
  window.__applyConsent = function (prefs) {
    if (!prefs.performance) clearCookies(CONSENT_COOKIES.performance);
    if (prefs.measurement === false) clearCookies(CONSENT_COOKIES.measurement);
    gtag('consent', 'update', {
      analytics_storage: prefs.performance ? 'granted' : 'denied',
      ad_storage: prefs.advertising ? 'granted' : 'denied',
      ad_user_data: prefs.advertising ? 'granted' : 'denied',
      ad_personalization: prefs.advertising ? 'granted' : 'denied',
    });
    if (prefs.performance) window.__loadTrackers();
  };

  function readStoredConsent() {
    try {
      var stored = localStorage.getItem('cookie-consent-v2');
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return null;
  }
  window.__cookieConsent = readStoredConsent();
  if (window.__cookieConsent) window.__applyConsent(window.__cookieConsent);
}
