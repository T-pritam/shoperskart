// pages/404.js

import Link from 'next/link';
import styles from './404.module.css'; // Optional: Create your own styles

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link className={styles.homeLink} href="/">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Custom404;
