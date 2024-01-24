import { services } from '../../constants/index.js';
import styles from '../../style.js';

const ServicesPage = () => {
  return (
    <section
      id="home"
      className={`flex flex-col gap-20 relative ${styles.paddingY} ${styles.paddingX}`}
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-black-gradient-2 rounded-[20px] box-shadow p-10 "
        >
          <p className={`${styles.heading2}`}>{service.category}</p>
          <p className={`${styles.paragraph}`}>
            {service.description}
          </p>
          <ul className="grid grid-cols-3">
            {service.items.map((item, i) => (
              <li key={i} className="text-white mt-10">
                <hr className="mb-10" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ServicesPage;
