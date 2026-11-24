import React from 'react';
import CookieConsent from '@site/src/components/CookieConsent';

// Wraps every page: the cookie banner and preferences window are rendered
// once for the whole site.
export default function Root({ children }) {
  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
