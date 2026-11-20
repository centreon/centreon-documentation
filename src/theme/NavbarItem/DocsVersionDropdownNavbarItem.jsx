import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useHistory } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';
import { useWindowSize } from '@docusaurus/theme-common';
import {
  useActiveDocContext,
  useDocsPreferredVersion,
  useVersions,
} from '@docusaurus/plugin-content-docs/client';

// Version labels can start with an emoji (the latest version is "⭐ 27.10",
// see i18n/*/docusaurus-plugin-content-docs/version-*.json): not on phones.
const plainLabel = (label) => label.replace(/^[\p{Extended_Pictographic}️\s]+/u, '');

/**
 * Phones and tablets: a native select in the navbar, so that the version can
 * be changed in one tap (the dropdown of the desktop navbar is hidden there,
 * and its entry in the menu was hard to find). It opens the same page in the
 * chosen version, or the main page of that version, as the dropdown does.
 */
function MobileVersionSelect({ docsPluginId }) {
  const history = useHistory();
  const versions = useVersions(docsPluginId);
  const { activeVersion, alternateDocVersions } = useActiveDocContext(docsPluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);

  const onChange = (event) => {
    const version = versions.find((v) => v.name === event.target.value);
    const doc =
      alternateDocVersions[version.name] ?? version.docs.find((d) => d.id === version.mainDocId);
    savePreferredVersionName(version.name);
    history.push(doc.path);
  };

  return (
    <select
      className="navbar-version-select"
      value={activeVersion?.name}
      onChange={onChange}
      aria-label={translate({ id: 'navbar.version.label', message: 'Version' })}>
      {versions.map((version) => (
        <option key={version.name} value={version.name}>
          {plainLabel(version.label)}
        </option>
      ))}
    </select>
  );
}

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const { activeDoc } = useActiveDocContext(props.docsPluginId);
  const windowSize = useWindowSize();

  // do not display version dropdown if current page is not the versioned doc
  if (!activeDoc) {
    return null;
  }

  // In the mobile menu: no entry, the version is in the navbar (below).
  if (props.mobile) {
    return null;
  }

  if (windowSize === 'mobile') {
    return <MobileVersionSelect docsPluginId={props.docsPluginId} />;
  }

  return <DocsVersionDropdownNavbarItem {...props} />;
}
