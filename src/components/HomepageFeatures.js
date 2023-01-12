import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Teamwork',
    Svg: require('../../static/img/pair_programming.svg').default,
    description: (
      <>
        Pair programming and collaboration.
      </>
    ),
  },
  {
    title: 'Code Quality',
    Svg: require('../../static/img/test-code.svg').default,
    description: (
      <>
        Writing tested and well-documented code
      </>
    ),
  },
  {
    title: 'Modularity',
    Svg: require('../../static/img/modularity.svg').default,
    description: (
      <>
        Modular and Object-Oriented Design
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
