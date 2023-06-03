import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Login() {
  return (
    <Layout>
      <Head>
        <title><a>{siteTitle} | Login</a></title>
      </Head>
      <h1>Désolé la page de connexion est en construction.</h1>
    </Layout>
  );
}