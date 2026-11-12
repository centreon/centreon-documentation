import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import webVersions from '@site/tools/api-reference/web-versions.json';

const webPath = (version) =>
  version === webVersions[0]
    ? '/api/centreon-web/centreon-web-restapi/'
    : `/api/centreon-web/${version}/centreon-web-restapi/`;

// APIs by product. MAP is an extension of Infra Monitoring OnPrem, with its
// own server and API.
const PRODUCTS = [
  {
    name: 'Infra Monitoring OnPrem',
    apis: [
      {
        name: 'Centreon Web REST API',
        initials: 'WEB',
        color: '#0c00ff',
        description:
          'Configure hosts, services and templates, read real-time status, acknowledge alerts, schedule downtimes and administer the platform.',
        to: webPath(webVersions[0]),
        spec: `centreon-web-${webVersions[0]}.json`,
        versions: webVersions.map((version) => ({ label: version, to: webPath(version) })),
      },
      {
        name: 'Centreon MAP REST API',
        initials: 'MAP',
        color: '#259788',
        description:
          'Build and update maps: create maps and views, place resources on them, and manage geographic views and access rights.',
        to: '/api/centreon-map/centreon-map-api/',
        spec: 'centreon-map-26.10.json',
        versions: [{ label: '26.10', to: '/api/centreon-map/centreon-map-api/' }],
      },
    ],
  },
  {
    name: 'Infra Monitoring Cloud',
    apis: [
      {
        name: 'Centreon Cloud REST API',
        initials: 'CLOUD',
        color: '#3a7bff',
        description:
          'Configure your Centreon Cloud platform: hosts, services and their templates, host groups, notifications and resource access rules.',
        to: '/api/centreon-cloud/centreon-web-restapi-for-cloud/',
        spec: 'centreon-web-cloud.json',
        versions: [{ label: 'Cloud', to: '/api/centreon-cloud/centreon-web-restapi-for-cloud/' }],
      },
    ],
  },
];

const STEPS = [
  { title: 'Get a token', text: 'Create an API token in Administration > Authentication tokens.' },
  { title: 'Send it', text: 'Add it to every request in the X-AUTH-TOKEN header.' },
  { title: 'Call an endpoint', text: 'Copy a ready-made request in curl, Python, Go or Node from any endpoint page.' },
];

function ApiCard({ api }) {
  const specUrl = useBaseUrl(`/api/specs/${api.spec}`);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.badge} style={{ backgroundColor: api.color }}>
          {api.initials}
        </span>
        <Link to={api.to} className={styles.name}>
          {api.name}
        </Link>
      </div>
      <p className={styles.description}>{api.description}</p>
      <div className={styles.versions}>
        {api.versions.map((version) => (
          <Link key={version.label} to={version.to} className={styles.version}>
            {version.label}
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <a href={specUrl} download={api.spec} className={styles.download}>
          OpenAPI file
        </a>
        <Link to={api.to} className={styles.cta}>
          Get started →
        </Link>
      </div>
    </div>
  );
}

export function ApiCards() {
  return PRODUCTS.map((product) => (
    <section key={product.name} className={styles.product}>
      <h2 className={styles.productName}>{product.name}</h2>
      <div className={styles.grid}>
        {product.apis.map((api) => (
          <ApiCard key={api.name} api={api} />
        ))}
      </div>
    </section>
  ));
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
