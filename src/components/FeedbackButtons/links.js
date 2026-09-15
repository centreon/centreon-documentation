const FEEDBACK_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdeKkEHWbxn4ZweR1M4OEMzP_QoqKmjl6t4iC_yKeX2CFjzAw/viewform';

export const THE_WATCH_NEW_TOPIC_URL = 'https://thewatch.centreon.com/topic/new';

/** Feedback form, prefilled with the page the reader is currently on. */
export function getFeedbackFormUrl(pathname) {
  return `${FEEDBACK_FORM_URL}?usp=pp_url&entry.371845164=docs.centreon.com${pathname}`;
}
