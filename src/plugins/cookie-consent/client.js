// Page view on each client-side navigation, as the gtag plugin of Docusaurus
// did, once Google Analytics is loaded (after consent).
export function onRouteDidUpdate({ location, previousLocation }) {
  if (
    !window.__gaLoaded ||
    !previousLocation ||
    (location.pathname === previousLocation.pathname &&
      location.search === previousLocation.search &&
      location.hash === previousLocation.hash)
  ) {
    return;
  }
  // The document title is updated in the next tick (react-helmet-async).
  setTimeout(() => {
    window.gtag('set', 'page_path', location.pathname + location.search + location.hash);
    window.gtag('event', 'page_view');
  });
}
