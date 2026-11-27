/**
 * Introduction page of the API section (api/introduction.md, OnPrem): a
 * hero with a first request, the REST APIs as cards (each one opens its
 * "Get started" page in the API reference), the first request in three
 * steps, and the other ways to automate (Postman, API v1, CLAPI…).
 *
 * The texts come from the page (props), so that each language has its own.
 * Links starting with "~/" are resolved against the version being viewed, as
 * in ProductLanding.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import { useActivePlugin, useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import Icon from '@site/src/components/Icon';
import styles from './styles.module.css';

function useHref() {
  const plugin = useActivePlugin();
  const version = useActiveVersion(plugin?.pluginId);
  return (href) => (href.startsWith('~/') ? `${version?.path ?? ''}/${href.slice(2)}` : href);
}

// The spaces between the parts of a title do not show (flex boxes), but keep
// the words apart in the page text: search snippets, copy and paste.
function SectionTitle({ title, subtitle }) {
  return (
    <h2 className={styles.sectionTitle}>
      {title}
      {subtitle && <> <span>{subtitle}</span></>}
    </h2>
  );
}

export default function ApiLanding({
  eyebrow,
  title,
  tagline,
  actions = [],
  facts = [],
  sample,
  apisTitle,
  apisSubtitle,
  apis = [],
  stepsTitle,
  stepsSubtitle,
  steps = [],
  moreTitle,
  moreSubtitle,
  more = [],
}) {
  const href = useHref();
  return (
    // data-product-landing: the full width of the product landing pages
    // (src/css/custom.css), with landing: true in the front matter of the page
    <div className={styles.landing} data-product-landing>
      <section className={styles.hero}>
        <div className={styles.heroMain}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.title}>{title}</h1>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
          {actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((action, index) => (
                <React.Fragment key={action.href}>
                  {' '}
                  <Link to={href(action.href)} className={index === 0 ? styles.primary : styles.secondary}>
                    {action.label}
                    {index === 0 && <Icon name="arrow" size={16} />}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          )}
          {facts.length > 0 && (
            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.value}</dt> <dd>{fact.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {sample && (
          <figure className={styles.sample}>
            <figcaption className={styles.sampleTitle}>{sample.title}</figcaption>
            <pre className={styles.sampleCode}>
              <code>{sample.code}</code>
            </pre>
            {sample.caption && <p className={styles.sampleCaption}>{sample.caption}</p>}
          </figure>
        )}
      </section>

      {apis.length > 0 && (
        <section>
          <SectionTitle title={apisTitle} subtitle={apisSubtitle} />
          <ul className={styles.apis}>
            {apis.map((api) => (
              <li key={api.href}>
                <Link to={href(api.href)} className={styles.api}>
                  <span className={styles.apiHead}>
                    <span className={styles.icon}>
                      <Icon name={api.icon} size={20} />
                    </span>
                    <span className={styles.apiName}>{api.name}</span>
                    {api.badge && <span className={styles.badge}>{api.badge}</span>}
                  </span>{' '}
                  <span className={styles.apiText}>{api.text}</span>
                  {api.uses?.length > 0 && (
                    <span className={styles.uses}>
                      {api.uses.map((use) => (
                        <React.Fragment key={use}>
                          {' '}
                          <span className={styles.use}>{use}</span>
                        </React.Fragment>
                      ))}
                    </span>
                  )}{' '}
                  <span className={styles.apiCta}>
                    {api.cta}
                    <Icon name="arrow" size={16} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {steps.length > 0 && (
        <section className={styles.band}>
          <SectionTitle title={stepsTitle} subtitle={stepsSubtitle} />
          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber}>{index + 1}</span>{' '}
                <span className={styles.stepTitle}>{step.title}</span>{' '}
                <span className={styles.stepText}>
                  {step.text}
                  {step.link && (
                    <>
                      {' '}
                      <Link to={href(step.link.href)}>{step.link.label}</Link>
                    </>
                  )}
                </span>
                {step.code && (
                  <pre className={styles.stepCode}>
                    <code>{step.code}</code>
                  </pre>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {more.length > 0 && (
        <section>
          <SectionTitle title={moreTitle} subtitle={moreSubtitle} />
          <ul className={styles.more}>
            {more.map((item) => (
              <li key={item.href}>
                <Link to={href(item.href)} className={styles.moreItem}>
                  <span className={styles.icon}>
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span>
                    <span className={styles.moreTitle}>
                      {item.title}
                      {item.badge && (
                        <>
                          {' '}
                          <span className={styles.badgeMuted}>{item.badge}</span>
                        </>
                      )}
                    </span>{' '}
                    <span className={styles.moreText}>{item.text}</span>
                  </span>
                  <Icon name="arrow" size={16} className={styles.pushRight} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
