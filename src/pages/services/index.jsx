import { services } from '../../constants/index.js';

import React from 'react';
import { bill } from '../../assets/index.js';
import styles, { layout } from '../../style';

const ServicesPage = () => {
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} ${styles.paddingY} ${styles.paddingX}`}
    >
      <div className="flex flex-col gap-20">
        {services.map((service, index) => (
          <div key={index} className="flex">
            <div className={layout.sectionImgReverse}>
              <img
                src={bill}
                alt="billing"
                className="w-[100%] h-[100%] relative z-[5]"
              />
              <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
              <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
            </div>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>{service.category}</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                {service.description}
              </p>

              <ul className="flex flex-wrap gap-10 mt-10 max-w-[80%]">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-white text-base font-poppins text-[18px] leading-[30.8px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
