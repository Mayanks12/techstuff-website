import * as React from 'react';
import { Business, Testimonials } from '../../components/index.js';
import styles from '../../style.js';

export const AboutPage = () => {
  return (
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Testimonials />
      </div>
    </div>
  );
};
