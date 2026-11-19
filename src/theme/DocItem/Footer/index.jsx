import React, { useState } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import Translate, { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import { EditIcon, TheWatchIcon } from '@site/src/components/FeedbackButtons/icons';
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
 * "Was this page helpful?" Both answers are sent to Google Analytics; "No"
 * also opens the feedback form, prefilled with the current page.
 */
function Helpful() {
  const location = useLocation();
  const [answer, setAnswer] = useState(null);

  const send = (value) => {
    setAnswer(value);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'doc_feedback', { helpful: value, page_path: location.pathname });
    }
    if (value === 'no') {
      window.open(getFeedbackFormUrl(location.pathname), '_blank', 'noopener');
    }
  };

  if (answer) {
    return (
      <p className={styles.thanks} role="status">
        {answer === 'yes'
          ? translate({ id: 'doc.feedback.thanks', message: 'Thanks for your feedback!' })
          : translate({ id: 'doc.feedback.thanksNo', message: 'Thanks! Tell us what was missing in the form that just opened.' })}
      </p>
    );
  }

  return (
    <div className={styles.helpful}>
      <span>{translate({ id: 'doc.feedback.question', message: 'Was this page helpful?' })}</span>
      <button type="button" className={styles.answer} onClick={() => send('yes')}>
        {translate({ id: 'doc.feedback.yes', message: 'Yes' })}
      </button>
      <button type="button" className={styles.answer} onClick={() => send('no')}>
        {translate({ id: 'doc.feedback.no', message: 'No' })}
      </button>
    </div>
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
        <Helpful />
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
