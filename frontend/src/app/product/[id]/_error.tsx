// app/_error.tsx

import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import styles from '../styles/Error.module.css';

interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {statusCode ? `Error ${statusCode}` : 'An error occurred'}
      </h1>
      <p className={styles.description}>
        {statusCode === 500
          ? 'Internal Server Error. Please try again later.'
          : 'An unexpected error has occurred.'}
      </p>
      <Link href="/">
        <a className={styles.homeLink}>Go to Homepage</a>
      </Link>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
