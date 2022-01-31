if (window && window.location && window.location.pathname.endsWith('/') && window.location.pathname !== '/')
{
  window.history.replaceState('', '', window.location.pathname.substr(0, window.location.pathname.length - 1))
}
else if (window && window.location && window.location.pathname.endsWith('/fr/') && window.location.pathname !== '/fr/')
{
  window.history.replaceState('fr/', 'fr/', window.location.pathname.substr(0, window.location.pathname.length - 1))
}
