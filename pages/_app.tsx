// pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Head>
        <link rel="icon" href="/favicon1.ico" />
      </Head>
    </>
  );
}
