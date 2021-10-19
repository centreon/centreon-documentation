import React from 'react';
import clsx from 'clsx';
import styles from '/src/components/HomepageFeatures.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('../../static/img/homepage/icon-tutorial.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Plugins Packs',
    Svg: require('../../static/img/homepage/icon-install.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'API Reference',
    Svg: require('../../static/img/homepage/icon-api.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
