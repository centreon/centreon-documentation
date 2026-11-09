import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const APIS = [
  {
    name: 'Centreon Web REST API',
    product: 'Infra Monitoring OnPrem',
    initials: 'CIM',
    color: '#0c00ff',
    description:
      'Configure hosts, services and templates, read real-time status, acknowledge alerts, schedule downtimes and administer the platform.',
    to: '/api/centreon-web/centreon-web-restapi/',
    versions: [
      { label: '26.10', to: '/api/centreon-web/centreon-web-restapi/' },
      { label: '25.10', to: '/api/centreon-web/25.10/centreon-web-restapi/' },
    ],
  },
  {
    name: 'Centreon Cloud REST API',
    product: 'Infra Monitoring Cloud',
    initials: 'CIM',
    color: '#3a7bff',
    description:
      'Configure your Centreon Cloud platform: hosts, services and their templates, host groups, notifications and resource access rules.',
    to: '/api/centreon-cloud/centreon-web-restapi-for-cloud/',
    versions: [{ label: 'Cloud', to: '/api/centreon-cloud/centreon-web-restapi-for-cloud/' }],
  },
  {
    name: 'Centreon MAP REST API',
    product: 'Centreon MAP',
    initials: 'MAP',
    color: '#259788',
    description:
      'Build and update maps: create maps and views, place resources on them, and manage geographic views and access rights.',
    to: '/api/centreon-map/centreon-map-api/',
    versions: [{ label: '26.10', to: '/api/centreon-map/centreon-map-api/' }],
  },
];

const STEPS = [
  { title: 'Get a token', text: 'Create an API token in Administration > Authentication tokens.' },
  { title: 'Send it', text: 'Add it to every request in the X-AUTH-TOKEN header.' },
  { title: 'Call an endpoint', text: 'Copy a ready-made request in curl, Python, Go or Node from any endpoint page.' },
];

export function ApiCards() {
  return (
    <div className={styles.grid}>
      {APIS.map((api) => (
        <div key={api.name} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.badge} style={{ backgroundColor: api.color }}>
              {api.initials}
            </span>
            <span className={styles.product}>{api.product}</span>
          </div>
          <Link to={api.to} className={styles.name}>
            {api.name}
          </Link>
          <p className={styles.description}>{api.description}</p>
          <div className={styles.footer}>
            <div className={styles.versions}>
              {api.versions.map((version) => (
                <Link key={version.label} to={version.to} className={styles.version}>
                  {version.label}
                </Link>
              ))}
            </div>
            <Link to={api.to} className={styles.cta}>
              Get started →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ApiSteps() {
  return (
    <ol className={styles.steps}>
      {STEPS.map((step, index) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.stepNumber}>{index + 1}</span>
          <div>
            <strong>{step.title}</strong>
            <p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
