import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../../styles/Home.module.css';

/**
 * @TODO
 *
 * (1) Three.js & webgl
 * (2) wonkydd TTS (NLP)
 * (3) WebAssembly
 */

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <meta name='description' content='homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          👋 Welcome to <a href='https://github.com/wonkyDD'>wonkyDD</a> 👋
        </h1>

        <div className={styles.grid}>
          <a href='https://portfolio-wonkydd.vercel.app/about' className={styles.card}>
            <h2>Resume &rarr;</h2>
            <p>
              Let&apos;s learn
              <a>
                <span>wonkyDD</span>
              </a>
              easily without any agony
            </p>
          </a>
          <a href='https://portfolio-wonkydd.vercel.app/blog' className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a href='https://portfolio-wonkydd.vercel.app/demo' className={styles.card}>
            <h2>Demo &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        written by wonkyDD on 2022
        {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
};

export default Home;
