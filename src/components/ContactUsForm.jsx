import React, { useState } from 'react';
import styles from '../style';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <section
      id="contactUs"
      className={`${styles.paddingY} ${styles.flexce} flex-col relative text-white`}
    >
      <div className="absolute z-[0] w-[20%] h-[60%] left-[70%] top-[20%] rounded-full pink__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Contact Us</h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`${styles.paragraph} text-left max-w-[450px]`}
          >
            Connect with us. Your questions, our priority
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]">
        <form
          className="w-full max-w-lg md:pl-10"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
