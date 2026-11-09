import React, { useEffect, useState } from 'react';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

// Page types (front matter `doc_type`), following the Diátaxis split.
function getDocTypeLabel(docType) {
  switch (docType) {
    case 'tutorial':
      return translate({ id: 'doc.meta.type.tutorial', message: 'Tutorial' });
    case 'how-to':
      return translate({ id: 'doc.meta.type.howTo', message: 'How-to guide' });
    case 'concept':
      return translate({ id: 'doc.meta.type.concept', message: 'Concept' });
    case 'reference':
      return translate({ id: 'doc.meta.type.reference', message: 'Reference' });
    default:
      return null;
  }
}

// Reading time, estimated from the rendered text (about 200 words a minute).
function useReadingTime() {
  const [minutes, setMinutes] = useState(null);
  useEffect(() => {
    const content = document.querySelector('.theme-doc-markdown');
    if (content) {
      const words = content.innerText.trim().split(/\s+/).length;
      setMinutes(Math.max(1, Math.round(words / 200)));
    }
  }, []);
  return minutes;
}

// The breadcrumbs (and this line) are also rendered on generated category
// index pages, which have no doc context.
function useOptionalDoc() {
  try {
    return useDoc();
  } catch {
    return null;
  }
}

/**
 * Line shown above the page title: page type, reading time, last update.
 * Hidden on product landing pages (front matter `landing: true`).
 */
export default function DocMeta() {
  const doc = useOptionalDoc();
  const { i18n } = useDocusaurusContext();
  const minutes = useReadingTime();

  if (!doc || doc.frontMatter.landing) {
    return null;
  }
  const { metadata, frontMatter } = doc;

  const typeLabel = getDocTypeLabel(frontMatter.doc_type);
  const updated = metadata.lastUpdatedAt
    ? new Date(metadata.lastUpdatedAt).toLocaleDateString(i18n.currentLocale, {
        month: 'long',
        year: 'numeric',
      })
    : null;

  const parts = [
    minutes && translate({ id: 'doc.meta.readingTime', message: '{minutes} min read' }, { minutes }),
    updated && translate({ id: 'doc.meta.updated', message: 'Updated {date}' }, { date: updated }),
  ].filter(Boolean);

  if (!typeLabel && parts.length === 0) {
    return null;
  }

  return (
    <div className={styles.meta}>
      {typeLabel && <span className={styles.badge}>{typeLabel}</span>}
      {parts.map((part) => (
        <span key={part} className={styles.part}>
          {part}
        </span>
      ))}
    </div>
  );
}
