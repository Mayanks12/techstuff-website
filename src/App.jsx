import styles from './style';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home/index.jsx';
import Layout from './layout.jsx';
import { Navbar } from './components/index.js';
import ServicesPage from './pages/services/index.jsx';
import { AboutPage } from './pages/about/index.jsx';
import { ContactPage } from './pages/contact/index.jsx';

const App = () => {
  return (
    <div className="bg-primary w-full ">
      <Router>
        <div
          className={`${styles.paddingX} ${styles.flexCenter} sticky inset-0 backdrop-blur-sm z-50`}
        >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
