import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const { activeDoc } = useActiveDocContext(props.docsPluginId);

  // do not display version dropdown if current page is not the versioned doc
  if (!activeDoc) {
    return null;
  }

  return (
    <>
      <DocsVersionDropdownNavbarItem {...props} />
    </>
  );
}
