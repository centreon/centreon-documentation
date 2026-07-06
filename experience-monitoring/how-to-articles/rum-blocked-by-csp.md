---
id: rum-blocked-by-csp
title: Troubleshooting RUM
---

## A strict Content Security Policy (CSP) blocks the RUM data collection

In certain web environments with an enforced security policy ([Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)), the Centreon Real User Monitoring (RUM) tag may require additional configuration. The issue is rare, but can prevent RUM data from being transmitted until the Experience Monitoring domains are correctly authorized.

### Symptom - RUM data is not being transmitted

If you have installed the Centreon Experience Monitoring RUM tag via GTM or another tag manager and you observe that:
- the Centreon Experience Monitoring script loads correctly,
- but no RUM data is being transmitted,
- and/or the request to ``beacon.gif`` appears as ``blocked:csp``.

Your site uses a CSP that requires an update. This behavior is completely normal in environments where the security policy is strict (banking, advanced retail, sites under WAF/CDN, etc.).

### Issue - The RUM tag is blocked by a CSP

Centreon Experience Monitoring uses a script loaded from `https://appstatic.quanta.io`, and then sends its performance metrics to `https://rum-metrics.quanta.io`. 
On the large majority of sites, this works automatically, including when the tag is installed via GTM, Axeptio or another manager. However, some sites implement an advanced Content Security Policy (CSP).

This is a security mechanism that precisely defines:
- which scripts can be loaded,
- to which domains the browser can send requests,
- which images / pixels can be called.

**If the Centreon Experience Monitoring domains are not added to this list, the browser will block the RUM beacon**, even if the script itself is loaded correctly.

> In Chrome DevTools, this appears as ``blocked:csp`` on the ``beacon.gif`` type request.

### Solution - Add authorizations

To allow the RUM module to work while strictly respecting your security rules, simply add the two Centreon Experience Monitoring domains to the appropriate directives.

1. Authorize the loading of the RUM script

   In the directive: ``script-src``, add ``https://appstatic.quanta.io``.

2. Authorize the sending of the RUM beacon

   In the directive: ``img-src``, add ``https://rum-metrics.quanta.io``. The beacon is sent as an image (``beacon.gif``), hence the necessity of this addition.

3. Recommended: authorize associated network requests

   In the directive: ``connect-src``, add ``https://rum-metrics.quanta.io``.

   Even if the current beacon passes through ``img-src``, this addition ensures compatibility with:
      - browsers using ``sendBeacon``,
      - future optimizations of the RUM API,
      - enforced security environments.

### CSP adjustment example

Here is a schematic example (to be adapted to your existing configuration):

```shell
Content-Security-Policy:
  script-src 'self' https://appstatic.quanta.io ...;
  img-src 'self' https://rum-metrics.quanta.io ...;
  connect-src 'self' https://rum-metrics.quanta.io ...;
```

Once these additions are made in your server/CDN/WAF, RUM requests will no longer be blocked.
