import React from 'react';

import { translate } from '@docusaurus/Translate';

function ExpandCollapseAll() {
  const [expanded, setExpanded] = React.useState(false);

  const expand = (obj) => {
    obj.setAttribute('open', "true");
    obj.setAttribute('data-collapsed', "false");
  
    const detailsDivChild = obj.children[1];
  
    detailsDivChild.style.display = 'block';
    detailsDivChild.style.overflow = 'visible';
    detailsDivChild.style.height = 'auto';
  }
  
  const collapse = (obj) => {
    obj.removeAttribute('open');
    obj.setAttribute('data-collapsed', "true");
    
    const detailsDivChild = obj.children[1];
  
    detailsDivChild.style.display = 'none';
    detailsDivChild.style.overflow = 'hidden';
    detailsDivChild.style.height = '0px';
  }

  const toggle = () => {
    const details = document.getElementsByTagName('details');

    Array.from(details).forEach(expanded ? collapse : expand);

    setExpanded((currentExpanded) => !currentExpanded);
  }

  const text = expanded ? 'Collapse all' : 'Expand all';

  return (
    <button onClick={toggle} type="button" className="button button--primary shadow--lw">{translate({ message: text })}</button>
  )
}

export default ExpandCollapseAll;