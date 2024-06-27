// pages/404.js
"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './404.module.css'; // Optional: Create your own styles

const Custom404 = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        Oops! The page you are looking for does not exist.
      </p>
      <button className={styles.homeLink} onClick={() => {
        router.back()
      }}>
        Go Back
      </button>
    </div>
  );
};

export default Custom404;
