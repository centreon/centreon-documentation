import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import { useLocation } from 'react-router-dom';

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        'row margin-bottom--sm',
      )}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  const location = useLocation();
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} /> }</div>
      <div className="col">

        <svg id="feedback" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24"  xmlSpace="preserve" fill="none" style={{ height: '24px', width: '24px', verticalAlign:"text-top", marginRight: '4px' }} >
          <rect y="0" className="st0" width="24" height="24"/>
          <rect x="2" y="2" className="st0" width="20" height="20"/>
          <path fill="none" stroke="currentColor" strokeMiterlimit="10" d="M16.14,9.08c0,3.09-2.76,5.6-6.16,5.6c-1.11,0-5.45,0-5.45,0s1.36-1.38,0.93-1.79c-1.02-1-1.64-2.34-1.64-3.81
            c0-3.09,2.76-5.6,6.16-5.6S16.14,5.99,16.14,9.08z"/>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" d="M8.61,16.28c0.76,2.31,3.12,4,5.91,4c1.11,0,5.45,0,5.45,0s-1.36-1.38-0.93-1.79c1.02-1,1.64-2.34,1.64-3.81
            c0-2-1.15-3.75-2.88-4.74"/>
          <line fill="none" stroke="currentColor" strokeLinecap="round" x1="6.78" y1="6.86" x2="13.55" y2="6.86"/>
          <line fill="none" stroke="currentColor" strokeLinecap="round" x1="6.78" y1="8.74" x2="13.55" y2="8.74"/>
          <line fill="none" stroke="currentColor" strokeLinecap="round" x1="6.78" y1="10.62" x2="13.55" y2="10.62"/>
        </svg>

        <a rel="noreferrer noopener" href={`https://docs.google.com/forms/d/e/1FAIpQLSdeKkEHWbxn4ZweR1M4OEMzP_QoqKmjl6t4iC_yKeX2CFjzAw/viewform?usp=pp_url&entry.371845164=docs.centreon.com${location.pathname}`} target="_blank">
        <Translate
          id="theme.common.feedback"
          description="The link label to give feedback on the page">
          Give feedback on this page
        </Translate>

        </a>
      </div>
      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
export default function DocItemFooter() {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags} =
    metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}
    </footer>
  );
}
