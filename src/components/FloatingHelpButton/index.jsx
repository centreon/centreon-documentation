import React, { useState } from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Translate from '@docusaurus/Translate';
import { EditIcon, FeedbackIcon, TheWatchIcon } from '../FeedbackButtons/icons';
import { getFeedbackFormUrl, THE_WATCH_NEW_TOPIC_URL } from '../FeedbackButtons/links';
import styles from './styles.module.css';
import 'typeface-roboto';

/**
 * Floating "?" button, displayed at the bottom right of every documentation
 * page. It must be rendered from DocItem/Layout and not from the TOC: pages
 * without any level 2 title have no TOC at all, and the button used to be
 * missing on those pages (MON-201729).
 */
export default function FloatingHelpButton() {
  const [showFooterButtons, setShowFooterButtons] = useState(false);
  const location = useLocation();
  const { metadata } = useDoc();

  const editUrl = metadata?.editUrl || '';

  const handleToggleButtons = () => {
    setShowFooterButtons((prev) => !prev);
  };

  return (
    <div className={styles.pngContainer}>
      {showFooterButtons && (
        <div className={styles.footerButtons}>
          {editUrl && (
            <a href={editUrl} className={styles.buttonFilled}>
              <EditIcon />
              <span className={styles.buttonText}>
                <Translate
                  id="theme.common.editThisPage"
                  description="The link label to edit the page"
                >
                  Éditer cette page
                </Translate>
              </span>
            </a>
          )}
          <a
            rel="noreferrer noopener"
            href={getFeedbackFormUrl(location.pathname)}
            target="_blank"
            className={styles.buttonFilled}
          >
            <FeedbackIcon className={styles.svgIconFeedback} />
            <span className={styles.buttonText}>
              <Translate
                id="theme.common.feedback"
                description="The link label to give feedback on the page"
              >
                Give feedback on this page
              </Translate>
            </span>
          </a>
          <a
            rel="noreferrer noopener"
            href={THE_WATCH_NEW_TOPIC_URL}
            target="_blank"
            className={clsx(styles.buttonFilled, styles.theWatchButton)}
          >
            <TheWatchIcon />
            <span className={styles.buttonText}>
              <Translate
                id="theme.common.theWatchButton"
                description="The link label for the -the watch- button"
              >
                Ask on The Watch
              </Translate>
            </span>
          </a>
        </div>
      )}
      <button
        type="button"
        className={styles.pngImage}
        onClick={handleToggleButtons}
        aria-expanded={showFooterButtons}
        aria-label="Toggle buttons"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="40" fill="#00bfa6" />
          <text
            transform="translate(26 60)"
            fill="#fff"
            fontSize="57"
            fontFamily="Roboto-Medium, Roboto"
            fontWeight="500"
          >
            <tspan x="0" y="0">?</tspan>
          </text>
        </svg>
      </button>
    </div>
  );
}
