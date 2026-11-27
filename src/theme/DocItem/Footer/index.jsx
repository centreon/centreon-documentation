import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
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

/**
 * Opens the feedback form, prefilled with the current page. Each answer
 * becomes a ticket for the documentation team, which is why it is the main
 * action of the footer.
 */
function FeedbackButton() {
  const location = useLocation();
  return (
    <a
      rel="noreferrer noopener"
      href={getFeedbackFormUrl(location.pathname)}
      target="_blank"
      className={styles.feedback}
    >
      <FeedbackIcon className={styles.icon} />
      <Translate id="theme.common.feedback" description="The link label to give feedback on the page">
        Give feedback on this page
      </Translate>
    </a>
  );
}

export default function DocItemFooter() {
  const { metadata, frontMatter } = useDoc();
  const { editUrl, tags } = metadata;

  // Product landing pages have no page footer.
  if (frontMatter.landing) {
    return null;
  }

  return (
    <footer className={clsx(ThemeClassNames.docs.docFooter, styles.footer)}>
      {tags.length > 0 && <TagsRow tags={tags} />}
      <div className={styles.row}>
        <FeedbackButton />
        <div className={styles.links}>
          {editUrl && (
            <a href={editUrl} className={styles.link}>
              <EditIcon className={styles.icon} />
              <Translate id="theme.common.editThisPage" description="The link label to edit the page">
                Edit this page
              </Translate>
            </a>
          )}
          <a rel="noreferrer noopener" href={THE_WATCH_NEW_TOPIC_URL} target="_blank" className={styles.link}>
            <TheWatchIcon className={styles.icon} />
            <Translate id="theme.common.theWatchButton" description="The link label for the -the watch- button">
              Ask on The Watch
            </Translate>
          </a>
        </div>
      </div>
    </footer>
  );
}
