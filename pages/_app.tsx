import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout";
import "swiper/css";
import "aos/dist/aos.css"
import Aos from "aos"
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
