import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import TagsListInline from '@theme/TagsListInline';
import Translate from '@docusaurus/Translate';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

function TagsRow({ tags }) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterTagsRow, 'row margin-bottom--sm')}>
      <div className="col">
        <TagsListInline tags={tags} />
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
      <div className="col">
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
            className={styles.lastUpdatedText}
          />
        )}
      </div>
      <div className="col col--12">
        <div className={styles.buttonsContainer}>
          {editUrl && (
            <a href={editUrl} className={clsx(styles.buttonFilled)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.buttonIcon}
                width="24"
                height="24"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path>
              </svg>
              <Translate
                id="theme.common.editThisPage"
                description="The link label to edit the page"
              >
                Éditer cette page
              </Translate>
            </a>
          )}
          <a
            rel="noreferrer noopener"
            href={`https://docs.google.com/forms/d/e/1FAIpQLSdeKkEHWbxn4ZweR1M4OEMzP_QoqKmjl6t4iC_yKeX2CFjzAw/viewform?usp=pp_url&entry.371845164=docs.centreon.com${location.pathname}`}
            target="_blank"
            className={clsx(styles.buttonFilled)}
          >
            <svg
              className={styles.svgIcon}
              id="feedback"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              fill="none"
              style={{ height: '24px', width: '24px', verticalAlign: "text-top", marginRight: '4px' }}
            >
              <rect y="0" className="st0" width="24" height="24" />
              <rect x="2" y="2" className="st0" width="20" height="20" />
              <path
                fill="none"
                stroke="white"
                strokeMiterlimit="10"
                d="M16.14,9.08c0,3.09-2.76,5.6-6.16,5.6c-1.11,0-5.45,0-5.45,0s1.36-1.38,0.93-1.79c-1.02-1-1.64-2.34-1.64-3.81c0-3.09,2.76-5.6,6.16-5.6S16.14,5.99,16.14,9.08z"
              />
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M8.61,16.28c0.76,2.31,3.12,4,5.91,4c1.11,0,5.45,0,5.45,0s-1.36-1.38-0.93-1.79c1.02-1,1.64-2.34,1.64-3.81c0-2-1.15-3.75-2.88-4.74"
              />
              <line
                fill="none"
                stroke="white"
                strokeLinecap="round"
                x1="6.78"
                y1="6.86"
                x2="13.55"
                y2="6.86"
              />
              <line
                fill="none"
                stroke="white"
                strokeLinecap="round"
                x1="6.78"
                y1="8.74"
                x2="13.55"
                y2="8.74"
              />
              <line
                fill="none"
                stroke="white"
                strokeLinecap="round"
                x1="6.78"
                y1="10.62"
                x2="13.55"
                y2="10.62"
              />
            </svg>
            <Translate
              id="theme.common.feedback"
              description="The link label to give feedback on the page"
            >
              Give feedback on this page
            </Translate>
          </a>
          <a
            href="https://thewatch.centreon.com/topic/new"
            className={clsx(styles.buttonFilled, styles.theWatchButton)}
          >
            <svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388.43 400" fill="currentColor"><defs></defs><path class="cls-1" d="M188.43,400c-43.49,0-84.84-13.72-119.59-39.67-6.67-4.99-9.86-13.46-8.14-21.6,1.54-7.26,6.53-12.99,13.31-15.52,26.72-15.15,42.43-51.2,42.59-51.56,35.21-81.5,90.49-86.19,98.22-86.44,30.64-1.84,51.85,5.66,65.43,13.61,3.19-10.32,4.24-21.02-.18-29.39-6.95-13.14-26.21-18.11-33.05-18.92l-8.1-.96-4.08-7.12c-10.8-19.2-25.72-30.96-45.6-35.98-59.18-14.92-142.46,35.07-158.55,45.25-5.9,3.73-13.41,4.08-19.63.92S.69,143.16.23,136.2l-.23-3.47,1.23-3.26C31.04,50.38,108.01-1.64,192.48.04c51.49,1.02,100.11,21.78,136.92,58.45,36.82,36.67,57.76,85.22,58.97,136.7,1.28,54.37-18.91,105.7-56.86,144.55-37.96,38.86-88.77,60.26-143.08,60.26h0ZM101.23,343.53c26.2,15.99,56.04,24.37,87.19,24.37,45.6,0,88.26-17.97,120.12-50.59,31.86-32.61,48.81-75.72,47.73-121.37-1.02-43.17-18.61-83.91-49.53-114.71-30.92-30.8-71.73-48.24-114.91-49.1-56.63-1.1-109.3,26.5-140.92,71.49,10.5-5.23,22.43-10.63,35.14-15.44,42.97-16.27,80.33-20.59,111.04-12.85,26.08,6.58,46.82,21.63,61.75,44.78,12.89,3,37.39,11.5,49.47,34.07,11.17,20.86,8.7,47.05-7.34,77.83l-12.62,24.21-14.56-22.12c-1.59-1.91-17.16-19.34-57.3-16.83l-.82.05h-.2c-3.37.14-41.91,3.37-69.4,67-.68,1.62-15.93,36.93-44.86,59.22h.02ZM80.4,338.01h.02-.02Z"/><path class="cls-1" d="M199.54,147.07c-11.43,5.31-21.01,6.91-32.2,4.64-2.75-.62-6.15-1.21-12.24.44-1.21-2.81-1.21-5.98-.27-8.88,8.16-19.6,38.55-15.35,44.71,3.8h0Z"/></svg>
            <Translate
              id="theme.common.theWatchButton"
              description="The link label for the -the watch- button"
            >
              Ask on The Watch
            </Translate>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
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
