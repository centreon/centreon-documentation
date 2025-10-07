import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useDocsVersion } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';

export default function DocVersionBannerWrapper() {
  const { banner, label } = useDocsVersion();
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();

  if (banner !== 'unmaintained') {
    return null;
  }

  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docVersionBanner,
        'alert alert--warning margin-bottom--md',
      )}
      role="alert"
    >
      <div>
        <Translate
          id="theme.docs.versions.unmaintainedVersionLabel"
          description="The label used to tell the user that he's browsing an unmaintained doc version"
          values={{
            siteTitle,
            versionLabel: <b>{label}</b>,
          }}
        />
      </div>
      <div className="margin-top--md">
        <Translate
          id="theme.docs.versions.latestVersionSuggestionLabel"
          values={{
            latestVersionLink: (
              <b>
                <Link to="https://docs.centreon.com">
                  <Translate id="theme.docs.versions.latestVersionLinkLabel" />
                </Link>
              </b>
            ),
          }}
        />
      </div>
    </div>
  );
}
