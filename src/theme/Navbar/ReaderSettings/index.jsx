import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

// Reader preferences, stored in the browser. They are applied before the page
// renders by an inline script (see `headTags` in docusaurus.config.js).
const STORAGE_KEY = 'reader-preferences';
const DEFAULTS = { font: 'm', width: 'standard' };

function readPreferences() {
  try {
    return { ...DEFAULTS, ...JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}') };
  } catch {
    return DEFAULTS;
  }
}

function applyPreferences(preferences) {
  const root = document.documentElement;
  root.setAttribute('data-reader-font', preferences.font);
  root.setAttribute('data-reader-width', preferences.width);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Storage may be unavailable (private browsing): the choice is kept for
    // the current page only.
  }
}

function Choice({ legend, options, value, onChange }) {
  return (
    <fieldset className={styles.group}>
      <legend>{legend}</legend>
      <div className={styles.options}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            className={clsx(styles.option, value === option.value && styles.selected)}
            onClick={() => onChange(option.value)}>
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/** "Aa" button in the navbar: text size and content width for doc pages. */
export default function ReaderSettings() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULTS);
  const ref = useRef(null);

  useEffect(() => {
    setPreferences(readPreferences());
  }, []);

  // Close on a click outside the panel or on Escape.
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const update = (key, value) => {
    const next = { ...preferences, [key]: value };
    setPreferences(next);
    applyPreferences(next);
  };

  const label = translate({ id: 'reader.settings', message: 'Reading settings' });

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-label={label}
        title={label}
        onClick={() => setOpen(!open)}>
        <span aria-hidden="true">Aa</span>
      </button>
      {open && (
        <div className={styles.panel} role="dialog" aria-label={label}>
          <Choice
            legend={translate({ id: 'reader.font', message: 'Text size' })}
            value={preferences.font}
            onChange={(value) => update('font', value)}
            options={[
              { value: 's', label: translate({ id: 'reader.font.small', message: 'Small' }) },
              { value: 'm', label: translate({ id: 'reader.font.normal', message: 'Normal' }) },
              { value: 'l', label: translate({ id: 'reader.font.large', message: 'Large' }) },
            ]}
          />
          <Choice
            legend={translate({ id: 'reader.width', message: 'Content width' })}
            value={preferences.width}
            onChange={(value) => update('width', value)}
            options={[
              { value: 'standard', label: translate({ id: 'reader.width.standard', message: 'Standard' }) },
              { value: 'wide', label: translate({ id: 'reader.width.wide', message: 'Wide' }) },
              { value: 'full', label: translate({ id: 'reader.width.full', message: 'Full' }) },
            ]}
          />
        </div>
      )}
    </div>
  );
}
