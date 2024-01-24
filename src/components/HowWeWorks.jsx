import React from 'react';
import styles from '../style';
import { howWeWorks } from '../assets';

const HowWeWorks = () => {
  return (
    <section
      id="howWeWorks"
      className={`${styles.paddingY} ${styles.flexce} flex-col relative`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>How We Works</h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`${styles.paragraph} text-left max-w-[450px]`}
          >
            Streamlined process: Concept to creation, seamlessly
            bringing ideas to life
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]">
        <img src={howWeWorks} alt="How we Works?" />
      </div>
    </section>
  );
};

export default HowWeWorks;
