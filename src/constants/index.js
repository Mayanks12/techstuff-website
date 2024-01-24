import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  facebook,
  instagram,
  linkedin,
  mobileApplication,
  people01,
  people02,
  people03,
  send,
  twitter,
  webApplication,
  erp,
  logoDesign,
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
    category: 'Backend',
    description:
      'Combat development challenges by reinforcing the backend functioning of the application with easy synchronization of different features and seamless communication with relational or NoSQL databases.',
    items: ['.net', 'Java', 'PHP', 'Python', 'Node.JS', 'Rails'],
  },
  {
    category: 'Backend as service',
    description:
      'Experience the future of streamlined development with our serverless computing solutions. We empower your applications to scale effortlessly, reduce infrastructure management complexities, and enhance overall efficiency. Embrace a serverless approach for seamless, cost-effective, and scalable solutions tailored to elevate your digital presence',
    items: [
      'Firebase Functions',
      'Google Cloud Functions',
      'AWS Lambda',
    ],
  },
  {
    category: 'Frontend',
    description:
      'Reinvent the look and feel of web applications using JavaScript technologies along with HTML and CSS to improve aesthetics and enhance the digital experience of your customers.',
    items: ['Angular JS/ Angular', 'React JS', 'Vue.JS'],
  },
  {
    category: 'Database',
    description:
      'Consolidate data from multiple complex data sources and manage end-to-end data integration to predict significant and actionable insights.',
    items: [
      'MySQL',
      'PostGre',
      'SQL',
      'Cassandra',
      'ElasticSearch',
      'MongoDB',
      'Oracle',
      'DynamoDB',
      'Microsoft SQL server',
    ],
  },
  {
    category: 'Mobile',
    description:
      'Transform web applications into leading-edge mobile applications by enabling mobility across multiple platforms such as iOS, Android, and windows.',
    items: ['Ios', 'Android', 'Flutter', 'React-Native', 'Xamarin'],
  },
  {
    category: 'Cloud & DevOps',
    description:
      'Fast Track your deliveries using agile and cloud-based technology approach for anytime and anywhere accessibility and transparency.',
    items: ['AWS', 'Google', 'Cloud', 'Cloud & Devops'],
  },
  {
    category: 'Testing',
    description:
      'Ensure high performing and bug-free applications by implementing our structured Testing methodologies for your tangled and complex applications.',
    items: [
      'Selenium',
      'Katalon',
      'Studio',
      'Apache',
      'JMeter',
      'TestRail',
    ],
  },
  {
    category: 'Others',
    description:
      'Leverage our capabilities to better upgrade and reinforce your business models using leading modern technology offerings.',
    items: ['Share Point', 'PowerBI', 'Kafka'],
  },
];
