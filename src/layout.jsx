import { Footer, Navbar } from './components/index.js';
import styles from './style.js';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
