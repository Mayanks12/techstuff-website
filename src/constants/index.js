import {
  airbnb,
  backend,
  binance,
  coinbase,
  database,
  devops,
  dropbox,
  erp,
  facebook,
  instagram,
  linkedin,
  logoDesign,
  mobileApplication,
  mobileDevelopment,
  people01,
  people02,
  people03,
  softwareDevelopment,
  twitter,
  webApplication,
  webDevelopment,
} from '../assets';

export const navLinks = [
  {
    id: '',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About Us',
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'contact',
    title: 'Contact Us',
  },
];

export const features = [
  {
    id: 'feature-1',
    icon: webApplication,
    title: 'Web Application',
    content:
      'We are a web application development company concentrating on building astounding user experiences.',
  },
  {
    id: 'feature-2',
    icon: mobileApplication,
    title: 'Mobile Application',
    content:
      'Techstuff is one of the most prestigious Mobile app development company.',
  },
  {
    id: 'feature-3',
    icon: erp,
    title: 'CMS/ERP Development',
    content:
      'We specialize in CMS/ERP development, crafting web applications tailored to unique functional requirements.',
  },
  {
    id: 'feature-4',
    icon: logoDesign,
    title: 'CMS/ERP Development',
    content:
      'Our whole mission is to make your business look extraordinary.',
  },
];

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'User Active',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Trusted by Company',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transaction',
    value: '$230M+',
  },
];

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
];

export const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
];

export const services = [
  {
    category: 'Web Development',
    image: webDevelopment,
    description:
      "Elevate your digital presence with our cutting-edge Web Development services. Our expert team crafts dynamic and responsive websites tailored to your unique business needs. From sleek design to seamless functionality, we specialize in creating user-centric experiences that drive engagement and deliver results. Whether you're launching a new site or revamping an existing one, trust us to bring your vision to life. Explore the power of innovative web solutions that not only meet but exceed expectations. Transform your online presence with our Web Development expertise and stay ahead in the ever-evolving digital landscape",
    items: ['.net', 'Java', 'PHP', 'Python', 'Node.JS', 'Rails'],
  },
  {
    category: 'Mobile Development',
    image: mobileDevelopment,
    description:
      "Elevate your digital presence with our cutting-edge mobile development services. Our expert team crafts seamless and innovative mobile applications tailored to your unique business needs. From concept to deployment, we specialize in creating user-friendly iOS and Android apps that captivate audiences and drive engagement. Whether you're a startup or an established enterprise, our mobile development solutions ensure a sleek, responsive, and feature-rich experience for your users. Trust us to transform your ideas into reality, delivering mobile solutions that stand out in today's dynamic digital landscape. Experience the future of mobile technology with our dedicated development team",
    items: ['Ios', 'Android', 'Flutter', 'React-Native', 'Xamarin'],
  },
  {
    category: 'Software Development',
    image: softwareDevelopment,
    description:
      'Elevate your digital vision with our cutting-edge software development services. Our team of seasoned developers crafts bespoke solutions tailored to your unique needs. From scalable web applications to robust mobile apps, we leverage the latest technologies to bring your ideas to life. Embrace innovation, streamline processes, and stay ahead of the competition with our expertise in agile development. Let us transform your concepts into powerful, user-centric software that drives success. Join us on the journey of creating exceptional digital experiences that redefine possibilities',
    items: ['Chat', 'Authentication', 'Healthcare', 'HRMS'],
  },
  {
    category: 'Graphic Design',
    image: webDevelopment,
    description:
      'Elevate your brand with our Graphic Design expertise. Our talented team of designers brings creativity to life, crafting visually stunning and impactful designs that resonate with your audience. From eye-catching logos to compelling marketing collateral, we specialize in transforming ideas into captivating visual experiences. With a keen focus on aesthetics and brand identity, our Graphic Design section ensures that every element reflects the essence of your business. Let us amplify your visual presence and leave a lasting impression on your customers. Explore the power of design excellence with us',
    items: [],
  },
];
