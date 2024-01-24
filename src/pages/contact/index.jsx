import * as React from 'react';
import styles from '../../style.js';
import ContactForm from '../../components/ContactUsForm.jsx';

export const ContactPage = () => {
  return (
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <ContactForm />
      </div>
    </div>
  );
};
