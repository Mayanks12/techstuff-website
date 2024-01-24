import styles from '../../style.js';
import {
  Business,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from '../../components/index.js';
import React from 'react';

const HomePage = () => {
  return (
    <>
      {/*<div className="bg-primary w-full overflow-hidden">*/}
      {/*<div*/}
      {/*  className={`${styles.paddingX} ${styles.flexCenter} sticky inset-0`}*/}
      {/*>*/}
      {/*  <div className={`${styles.boxWidth}`}>*/}
      {/*    <Navbar />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          {/*<Billing/>*/}
          {/*<CardDeal/>*/}
          <Testimonials />
          {/*<Clients/>*/}
          <CTA />
          {/*<Footer />*/}
        </div>
      </div>
      {/*</div>*/}
    </>
  );
};

export default HomePage;
