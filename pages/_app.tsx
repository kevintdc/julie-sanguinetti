import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE!}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </GoogleReCaptchaProvider>
  );
}
