import React, { useState } from 'react';
import DefaultTOC from '@theme-original/TOC';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';
import 'typeface-roboto';
import Translate from '@docusaurus/Translate';


export default function TOC(props) {
  const [showFooterButtons, setShowFooterButtons] = useState(false);
  const location = useLocation();
  const { metadata } = useDoc();

  const editUrl = metadata?.editUrl || '';

  const handleToggleButtons = () => {
    setShowFooterButtons(prev => !prev);
  };

  return (
    <div>
      <DefaultTOC {...props} />

      <div className={styles.pngContainer}>
        {showFooterButtons && (
          <div className={clsx(styles.footerButtons, { [styles.showButtons]: showFooterButtons })}>
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
                  width="24"
                  height="24"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                </svg>
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
              href={`https://docs.google.com/forms/d/e/1FAIpQLSdeKkEHWbxn4ZweR1M4OEMzP_QoqKmjl6t4iC_yKeX2CFjzAw/viewform?usp=pp_url&entry.371845164=docs.centreon.com${location.pathname}`}
              target="_blank"
              className={clsx(styles.buttonFilled)}
            >
              <svg
                id="Commentaire_doc"
                data-name="Commentaire doc"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={styles.svgIconFeedback}
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_2308"
                      data-name="Rectangle 2308"
                      width="24"
                      height="24"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Groupe_4176"
                  data-name="Groupe 4176"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Tracé_4198"
                    data-name="Tracé 4198"
                    d="M8.414,15.364H-.3l1.4-1.421a5.989,5.989,0,0,0,.952-1.234A7.34,7.34,0,0,1-.011,7.632C-.011,3.369,3.768-.1,8.414-.1s8.425,3.469,8.425,7.732S13.059,15.364,8.414,15.364Zm-5-1.67h5c3.725,0,6.756-2.719,6.756-6.062S12.139,1.57,8.414,1.57,1.658,4.289,1.658,7.632a5.711,5.711,0,0,0,1.771,4.09,1.2,1.2,0,0,1,.353.854A2.314,2.314,0,0,1,3.417,13.694Z"
                    transform="translate(0.813 0.92)"
                    fill="#fff"
                  />
                  <path
                    id="Tracé_4199"
                    data-name="Tracé 4199"
                    d="M22.47,21.96H13.763a8.861,8.861,0,0,1-5.051-1.542,7.826,7.826,0,0,1-3.019-3.96.835.835,0,1,1,1.586-.52,6.148,6.148,0,0,0,2.378,3.1,7.2,7.2,0,0,0,4.105,1.248h5a2.314,2.314,0,0,1-.365-1.118,1.2,1.2,0,0,1,.352-.853,5.712,5.712,0,0,0,1.772-4.091,5.923,5.923,0,0,0-3.13-5.115.835.835,0,0,1,.829-1.449,7.573,7.573,0,0,1,3.97,6.565,7.341,7.341,0,0,1-2.07,5.077,6.034,6.034,0,0,0,.951,1.234Z"
                    transform="translate(1.062 1.22)"
                    fill="#fff"
                  />
                  <path
                    id="Ligne_476"
                    data-name="Ligne 476"
                    d="M8.428.92H.085a.835.835,0,0,1,0-1.67H8.428a.835.835,0,0,1,0,1.67Z"
                    transform="translate(5.211 5.722)"
                    fill="#fff"
                  />
                  <path
                    id="Ligne_477"
                    data-name="Ligne 477"
                    d="M8.428.92H.085a.835.835,0,0,1,0-1.67H8.428a.835.835,0,0,1,0,1.67Z"
                    transform="translate(5.211 8.039)"
                    fill="#fff"
                  />
                  <path
                    id="Ligne_478"
                    data-name="Ligne 478"
                    d="M8.428.92H.085a.835.835,0,0,1,0-1.67H8.428a.835.835,0,0,1,0,1.67Z"
                    transform="translate(5.211 10.358)"
                    fill="#fff"
                  />
                </g>
              </svg>
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
              href="https://thewatch.centreon.com/topic/new"
              target="_blank"
              className={clsx(styles.buttonFilled, styles.theWatchButton)}
            >
              <svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388.43 400" fill="currentColor" width="24" height="24">
                <path className="cls-1" d="M188.43,400c-43.49,0-84.84-13.72-119.59-39.67-6.67-4.99-9.86-13.46-8.14-21.6,1.54-7.26,6.53-12.99,13.31-15.52,26.72-15.15,42.43-51.2,42.59-51.56,35.21-81.5,90.49-86.19,98.22-86.44,30.64-1.84,51.85,5.66,65.43,13.61,3.19-10.32,4.24-21.02-.18-29.39-6.95-13.14-26.21-18.11-33.05-18.92l-8.1-.96-4.08-7.12c-10.8-19.2-25.72-30.96-45.6-35.98-59.18-14.92-142.46,35.07-158.55,45.25-5.9,3.73-13.41,4.08-19.63.92S.69,143.16.23,136.2l-.23-3.47,1.23-3.26C31.04,50.38,108.01-1.64,192.48.04c51.49,1.02,100.11,21.78,136.92,58.45,36.82,36.67,57.76,85.22,58.97,136.7,1.28,54.37-18.91,105.7-56.86,144.55-37.96,38.86-88.77,60.26-143.08,60.26h0ZM101.23,343.53c26.2,15.99,56.04,24.37,87.19,24.37,45.6,0,88.26-17.97,120.12-50.59,31.86-32.61,48.81-75.72,47.73-121.37-1.02-43.17-18.61-83.91-49.53-114.71-30.92-30.8-71.73-48.24-114.91-49.1-56.63-1.1-109.3,26.5-140.92,71.49,10.5-5.23,22.43-10.63,35.14-15.44,42.97-16.27,80.33-20.59,111.04-12.85,26.08,6.58,46.82,21.63,61.75,44.78,12.89,3,37.39,11.5,49.47,34.07,11.17,20.86,8.7,47.05-7.34,77.83l-12.62,24.21-14.56-22.12c-1.59-1.91-17.16-19.34-57.3-16.83l-.82.05h-.2c-3.37.14-41.91,3.37-69.4,67-.68,1.62-15.93,36.93-44.86,59.22h.02ZM80.4,338.01h.02-.02Z"/>
                <path className="cls-1" d="M199.54,147.07c-11.43,5.31-21.01,6.91-32.2,4.64-2.75-.62-6.15-1.21-12.24.44-1.21-2.81-1.21-5.98-.27-8.88,8.16-19.6,38.55-15.35,44.71,3.8h0Z"/>
              </svg>
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
        <div
          className={styles.pngImage}
          onClick={handleToggleButtons}
          aria-label="Toggle buttons"
        >
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 80 80">
            <defs>
              <filter id="a" x="13" y="14" width="54" height="54" filterUnits="userSpaceOnUse">
                <feOffset dy="2" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="1" result="b"/>
                <feFlood flood-opacity="0.2"/>
                <feComposite operator="in" in2="b"/>
                <feComposite in="SourceGraphic"/>
              </filter>
              <clipPath id="c">
                <rect width="32" height="34" fill="#fff"/>
              </clipPath>
              <filter id="d" x="13" y="14" width="54" height="54" filterUnits="userSpaceOnUse">
                <feOffset dy="2" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="1" result="e"/>
                <feFlood flood-opacity="0.2"/>
                <feComposite operator="in" in2="e"/>
                <feComposite in="SourceGraphic"/>
              </filter>
              <clipPath id="f">
                <rect width="36" height="36" fill="#fff"/>
              </clipPath>
              <filter id="g" x="13" y="14" width="54" height="54" filterUnits="userSpaceOnUse">
                <feOffset dy="2" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="1" result="h"/>
                <feFlood flood-opacity="0.2"/>
                <feComposite operator="in" in2="h"/>
                <feComposite in="SourceGraphic"/>
              </filter>
              <clipPath id="i">
                <rect width="30.758" height="31.674" transform="translate(0 0)" fill="#fff"/>
              </clipPath>
            </defs>
            <g transform="translate(-1678 -980)">
              <g transform="translate(1694 995)">
                <g transform="matrix(1, 0, 0, 1, -16, -15)" filter="url(#a)">
                  <rect width="48" height="48" rx="24" transform="translate(16 15)" fill="#00bfa6"/>
                </g>
                <g transform="translate(6 6)">
                  <rect width="36" height="36" fill="none"/>
                  <g transform="translate(2 1)">
                    <g clipPath="url(#c)">
                      <path d="M0,27.818H32V34H0Zm6.4-6.182H8.64L21.12,9.62,19.96,8.5,18.84,7.418,6.4,19.473ZM3.2,24.727V18.159L21.12.889A3.129,3.129,0,0,1,22.139.232,3.261,3.261,0,0,1,23.36,0,3.41,3.41,0,0,1,24.6.232a3.207,3.207,0,0,1,1.08.7l2.2,2.164a2.526,2.526,0,0,1,.7,1,3.368,3.368,0,0,1,.219,1.2,3.107,3.107,0,0,1-.219,1.139,2.9,2.9,0,0,1-.7,1.025L10,24.727ZM25.6,5.255,23.36,3.091ZM21.12,9.62,19.96,8.5,18.84,7.418Z" fill="#fff"/>
                    </g>
                  </g>
                </g>
              </g>
              <g transform="translate(1694 995)">
                <g transform="matrix(1, 0, 0, 1, -16, -15)" filter="url(#d)">
                  <rect width="48" height="48" rx="24" transform="translate(16 15)" fill="#00bfa6"/>
                </g>
                <g transform="translate(6 6)">
                  <g clipPath="url(#f)">
                    <path d="M13.382,23.127H1.362L3,21.466a7.817,7.817,0,0,0,1.484-1.989A10.391,10.391,0,0,1,1.447,12.2C1.447,6.171,6.8,1.269,13.382,1.269S25.314,6.171,25.314,12.2,19.959,23.127,13.382,23.127M5.757,21.175h7.625c5.5,0,9.981-4.028,9.981-8.979s-4.479-8.979-9.981-8.979S3.4,7.245,3.4,12.2a8.482,8.482,0,0,0,2.626,6.069,1.471,1.471,0,0,1,.441,1.068,3.569,3.569,0,0,1-.708,1.842" transform="translate(0.681 0.635)" fill="#fff"/>
                    <path d="M30.614,29.255H18.59c-5.229,0-9.93-3.2-11.43-7.784a.975.975,0,1,1,1.852-.608A9.96,9.96,0,0,0,18.59,27.3h7.625a3.583,3.583,0,0,1-.708-1.84,1.478,1.478,0,0,1,.441-1.069,8.475,8.475,0,0,0,2.625-6.068,8.774,8.774,0,0,0-4.634-7.582.975.975,0,0,1,.969-1.692,10.7,10.7,0,0,1,5.614,9.274,10.38,10.38,0,0,1-3.03,7.278,7.838,7.838,0,0,0,1.483,1.991Z" transform="translate(3.556 4.461)" fill="#fff"/>
                    <path d="M17.961,7.214H5.916a.975.975,0,0,1,0-1.95H17.961a.975.975,0,1,1,0,1.95" transform="translate(2.47 2.632)" fill="#fff"/>
                    <path d="M17.961,9.444H5.916a.975.975,0,1,1,0-1.95H17.961a.975.975,0,1,1,0,1.95" transform="translate(2.47 3.747)" fill="#fff"/>
                    <path d="M17.961,11.675H5.916a.975.975,0,1,1,0-1.95H17.961a.975.975,0,1,1,0,1.95" transform="translate(2.47 4.863)" fill="#fff"/>
                  </g>
                </g>
              </g>
              <g transform="translate(1694 995)">
                <g transform="matrix(1, 0, 0, 1, -16, -15)" filter="url(#g)">
                  <rect width="48" height="48" rx="24" transform="translate(16 15)" fill="#00bfa6"/>
                </g>
                <g transform="translate(6 6)">
                  <rect width="36" height="36" fill="none"/>
                  <g transform="translate(2.436 2.163)">
                    <g transform="translate(0 0)" clipPath="url(#i)">
                      <path d="M14.921,31.674a15.71,15.71,0,0,1-9.47-3.141,1.7,1.7,0,0,1-.645-1.71,1.668,1.668,0,0,1,1.054-1.229A9.8,9.8,0,0,0,9.233,21.51c2.788-6.454,7.166-6.825,7.778-6.845a8.986,8.986,0,0,1,5.181,1.078,3.1,3.1,0,0,0-.014-2.327,3.7,3.7,0,0,0-2.617-1.5l-.641-.076-.323-.564a5.561,5.561,0,0,0-3.611-2.849C10.3,7.247,3.7,11.206,2.43,12.012A1.574,1.574,0,0,1,.018,10.785L0,10.51l.1-.258a15.845,15.845,0,0,1,30.656,5.2A15.837,15.837,0,0,1,14.921,31.674ZM8.016,27.2A13.284,13.284,0,0,0,24.29,6.432,13.266,13.266,0,0,0,4.031,8.2c.831-.414,1.776-.842,2.783-1.223,3.4-1.288,6.361-1.63,8.793-1.018A7.99,7.99,0,0,1,20.5,9.51a5.9,5.9,0,0,1,3.917,2.7c.885,1.652.689,3.726-.581,6.163l-1,1.917L21.68,18.537c-.126-.151-1.359-1.531-4.537-1.333l-.065,0h-.016c-.267.011-3.319.267-5.5,5.305A13.038,13.038,0,0,1,8.014,27.2Zm-1.649-.437h0Z" transform="translate(0 0.001)" fill="#fff"/>
                      <path d="M157.749,131.8a3.848,3.848,0,0,1-2.55.367,1.8,1.8,0,0,0-.969.035,1,1,0,0,1-.021-.7c.646-1.552,3.053-1.216,3.54.3" transform="translate(-141.949 -120.15)" fill="#fff"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <circle cx="40" cy="40" r="40" fill="#00bfa6"/>
            <text transform="translate(26 60)" fill="#fff" fontSize="57" fontFamily="Roboto-Medium, Roboto" fontWeight="500">
              <tspan x="0" y="0">?</tspan>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
