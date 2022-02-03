if (window && window.location && window.location.pathname.endsWith('/') && window.location.pathname !== '/')
{
  window.history.replaceState('', '', window.location.pathname.slice(0, -1))
}
