import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Button from '../components/button';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
            Pour accéder à vos informations, cliquez sur le bouton ci-dessous
        </p>
        <div className={styles.grid}>
          <a href="/login" className={styles.card}>
            <p>Login</p>
          </a>
        </div>
      </section>
    </Layout>
  );
}