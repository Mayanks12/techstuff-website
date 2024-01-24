import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="icon"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          5 Years of Industry Experience.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Techstuff is a comprehensive software development company,
          offering a diverse range of IT services such as Responsive
          Web Design, Web Development, CMS Development, Mobile
          Application Development, Server Maintenance, Hosting,
          Graphics and Logo Design, Payment Gateway, SMS Gateway, and
          Product Design. With a robust portfolio, Arbutus Infotech
          possesses deep domain knowledge, technical expertise,
          cost-effective solutions, and a global business model
          tailored to meet client requirements. Their proficiency in
          Web Design and Development, spanning from Custom Logo Design
          to Responsive Web Designing and Custom Web Development,
          ensures the delivery of top-quality standards to facilitate
          business growth. Let them elevate your brand, product, or
          service for sustained success.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
