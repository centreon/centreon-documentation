import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SearchBarWrapper({ placement = 'navbar', ...props }) {
  const { pathname } = useLocation();
  const homePath = useBaseUrl('/');

  // The /search results page already provides its own context-aware search
  // input and section selector. The global navbar search bar derives its
  // context from the current pathname, which on /search matches no section,
  // so it would search everywhere and ignore the ctx= query parameter. Hide
  // it there to avoid a second, context-less input.
  // Matches any locale/baseUrl prefix (e.g. /fr/search/, /previews/.../search/).
  if (pathname.replace(/\/+$/, '').endsWith('/search')) {
    return null;
  }

  // On the homepage, the search lives in the hero (placement="hero"): the
  // navbar one is not rendered, so there is a single search input.
  if (placement === 'navbar' && pathname === homePath) {
    return null;
  }

  return <SearchBar {...props} />;
}
