import React from 'react';
import clsx from 'clsx';
import styles from './hero.module.css';

const FeatureList = [
  {
    title: 'Ory Open Source Documentation',
    Svg: require('../../../static/img/logo-docs.svg').default,
    description: (
      <>
        Ory Open Source is the basis for thousands of systems in production. Get started in minutes and scale up reliably as you get more users.
      </>
    ),
  },
  {
    title: 'Ory Cloud Documentation',
    Svg: require('../../../static/img/logo-docs.svg').default,
    description: (
      <>
        Ory lets you focus on building your product, and we take care of your Auth needs. Go
        ahead and check out the power of Ory Cloud today.
      </>
    ),
  },
  {
    title: 'Ory Technical Concepts Docs',
    Svg: require('../../../static/img/logo-docs.svg').default,
    description: (
      <>
        Learn more about the underlying principles and flows of Ory. This documentation covers topics relevant for both the Ory Open Source as well as the Ory Cloud.
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
