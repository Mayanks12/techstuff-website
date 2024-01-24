import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          Let's try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We have faith in pertinence and in solutions tailored to
          individual needs, which is the reason we offer custom
          software development services to our customers. We are a
          group of experienced and talented software developers,
          designers, and project managers who are focused on conveying
          the best software development services.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
