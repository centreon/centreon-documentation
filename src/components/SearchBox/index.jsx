import React, {useState} from 'react';
import {useHistory} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Search field used on the home page and the section landing pages.
// Submitting opens the search results page of @easyops-cn/docusaurus-search-local,
// limited to `context` (a path from `searchContextByPaths` in docusaurus.config.js,
// e.g. "logmanagement") when one is given.
export default function SearchBox({
  placeholder,
  context,
  className,
  inputClassName,
  iconClassName,
  kbdClassName,
}) {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const searchPage = useBaseUrl('/search');

  const onSubmit = (event) => {
    event.preventDefault();
    const q = query.trim();
    if (!q) return;
    const params = new URLSearchParams({q});
    if (context) params.set('ctx', context);
    history.push(`${searchPage}?${params.toString()}`);
  };

  return (
    <form role="search" className={className} onSubmit={onSubmit}>
      <svg className={iconClassName} viewBox="0 0 24 24" width="18" height="18" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4.35-4.35" />
      </svg>
      <input
        type="search"
        className={inputClassName}
        placeholder={placeholder}
        aria-label={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <kbd className={kbdClassName} aria-hidden="true">↵</kbd>
    </form>
  );
}
