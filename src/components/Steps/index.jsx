import React from 'react';
import styles from './styles.module.css';

/**
 * Numbered procedure. Wrap a Markdown ordered list:
 *
 *   <Steps>
 *
 *   1. **Open the page** ...
 *   2. ...
 *
 *   </Steps>
 */
export default function Steps({ children }) {
  return <div className={styles.steps}>{children}</div>;
}
