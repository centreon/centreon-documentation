import React, { useId } from 'react';

/**
 * Icons shared by the feedback buttons, whether they are displayed in the page
 * footer (DocItem/Footer) or in the floating button (FloatingHelpButton).
 */

export function EditIcon({ className }) {
  return (
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
      className={className}
    >
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path>
    </svg>
  );
}

export function FeedbackIcon({ className }) {
  // The clip path needs an id that is unique across the page, as the icon can
  // be rendered several times (footer and floating button).
  // useId() returns punctuation that is not safe inside url(#...), so keep
  // only the characters that are valid in a fragment identifier.
  const clipPathId = `feedback-icon-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M8.414,15.364H-.3l1.4-1.421a5.989,5.989,0,0,0,.952-1.234A7.34,7.34,0,0,1-.011,7.632C-.011,3.369,3.768-.1,8.414-.1s8.425,3.469,8.425,7.732S13.059,15.364,8.414,15.364Zm-5-1.67h5c3.725,0,6.756-2.719,6.756-6.062S12.139,1.57,8.414,1.57,1.658,4.289,1.658,7.632a5.711,5.711,0,0,0,1.771,4.09,1.2,1.2,0,0,1,.353.854A2.314,2.314,0,0,1,3.417,13.694Z"
          transform="translate(0.813 0.92)"
          fill="#fff"
        />
        <path
          d="M22.47,21.96H13.763a8.861,8.861,0,0,1-5.051-1.542,7.826,7.826,0,0,1-3.019-3.96.835.835,0,1,1,1.586-.52,6.148,6.148,0,0,0,2.378,3.1,7.2,7.2,0,0,0,4.105,1.248h5a2.314,2.314,0,0,1-.365-1.118,1.2,1.2,0,0,1,.352-.853,5.712,5.712,0,0,0,1.772-4.091,5.923,5.923,0,0,0-3.13-5.115.835.835,0,0,1,.829-1.449,7.573,7.573,0,0,1,3.97,6.565,7.341,7.341,0,0,1-2.07,5.077,6.034,6.034,0,0,0,.951,1.234Z"
          transform="translate(1.062 1.22)"
          fill="#fff"
        />
        <path
          d="M8.428.92H.085a.835.835,0,0,1,0-1.67H8.428a.835.835,0,0,1,0,1.67Z"
          transform="translate(5.211 5.722)"
          fill="#fff"
        />
        <path
          d="M8.428.92H.085a.835.835,0,0,1,0-1.67H8.428a.835.835,0,0,1,0,1.67Z"
          transform="translate(5.211 8.039)"
          fill="#fff"
        />
        <path
          d="M8.428.92H.085a.835.835,0,0,1,0-1.67H8.428a.835.835,0,0,1,0,1.67Z"
          transform="translate(5.211 10.358)"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

export function TheWatchIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 388.43 400"
      fill="currentColor"
      width="24"
      height="24"
      className={className}
    >
      <path d="M188.43,400c-43.49,0-84.84-13.72-119.59-39.67-6.67-4.99-9.86-13.46-8.14-21.6,1.54-7.26,6.53-12.99,13.31-15.52,26.72-15.15,42.43-51.2,42.59-51.56,35.21-81.5,90.49-86.19,98.22-86.44,30.64-1.84,51.85,5.66,65.43,13.61,3.19-10.32,4.24-21.02-.18-29.39-6.95-13.14-26.21-18.11-33.05-18.92l-8.1-.96-4.08-7.12c-10.8-19.2-25.72-30.96-45.6-35.98-59.18-14.92-142.46,35.07-158.55,45.25-5.9,3.73-13.41,4.08-19.63.92S.69,143.16.23,136.2l-.23-3.47,1.23-3.26C31.04,50.38,108.01-1.64,192.48.04c51.49,1.02,100.11,21.78,136.92,58.45,36.82,36.67,57.76,85.22,58.97,136.7,1.28,54.37-18.91,105.7-56.86,144.55-37.96,38.86-88.77,60.26-143.08,60.26h0ZM101.23,343.53c26.2,15.99,56.04,24.37,87.19,24.37,45.6,0,88.26-17.97,120.12-50.59,31.86-32.61,48.81-75.72,47.73-121.37-1.02-43.17-18.61-83.91-49.53-114.71-30.92-30.8-71.73-48.24-114.91-49.1-56.63-1.1-109.3,26.5-140.92,71.49,10.5-5.23,22.43-10.63,35.14-15.44,42.97-16.27,80.33-20.59,111.04-12.85,26.08,6.58,46.82,21.63,61.75,44.78,12.89,3,37.39,11.5,49.47,34.07,11.17,20.86,8.7,47.05-7.34,77.83l-12.62,24.21-14.56-22.12c-1.59-1.91-17.16-19.34-57.3-16.83l-.82.05h-.2c-3.37.14-41.91,3.37-69.4,67-.68,1.62-15.93,36.93-44.86,59.22h.02ZM80.4,338.01h.02-.02Z" />
      <path d="M199.54,147.07c-11.43,5.31-21.01,6.91-32.2,4.64-2.75-.62-6.15-1.21-12.24.44-1.21-2.81-1.21-5.98-.27-8.88,8.16-19.6,38.55-15.35,44.71,3.8h0Z" />
    </svg>
  );
}
