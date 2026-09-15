import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import LastUpdated from '@theme/LastUpdated';
import TagsListInline from '@theme/TagsListInline';
import Translate from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import { EditIcon, FeedbackIcon, TheWatchIcon } from '@site/src/components/FeedbackButtons/icons';
import { getFeedbackFormUrl, THE_WATCH_NEW_TOPIC_URL } from '@site/src/components/FeedbackButtons/links';
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
              <EditIcon className={styles.buttonIcon} />
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
            href={getFeedbackFormUrl(location.pathname)}
            target="_blank"
            className={clsx(styles.buttonFilled)}
          >
            <FeedbackIcon className={styles.svgIconFeedback} />
            <Translate
              id="theme.common.feedback"
              description="The link label to give feedback on the page"
            >
              Give feedback on this page
            </Translate>
          </a>
          <a
            rel="noreferrer noopener"
            href={THE_WATCH_NEW_TOPIC_URL}
            target="_blank"
            className={clsx(styles.buttonFilled, styles.theWatchButton)}
          >
            <TheWatchIcon />
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
