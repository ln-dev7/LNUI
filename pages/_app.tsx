import { useEffect } from "react";
import "../styles/website/index.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { NextSeo } from "next-seo";
import "./../styles/website/utils/nprogress.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.location.replace("https://ui.lndev.me");
  }, []);

  return (
    <>
      <NextSeo
        title="LNUI"
        description="Create beautiful websites with multiple components"
        canonical="https://lnui.lndev.me/"
        openGraph={{
          url: "https://lnui.lndev.me/",
          title: "LNUI",
          description: "Create beautiful websites with multiple components",
          images: [
            {
              url: "https://lnui.lndev.me/logos/10.png",
              alt: "LNUI",
              type: "image/jpeg",
              secureUrl: "https://lnui.lndev.me/logos/10.png",
            },
          ],
          siteName: "LNUI Component Library",
        }}
        twitter={{
          handle: "@lnuicomponent",
          site: "@lnuicomponent",
          cardType: "summary_large_image",
        }}
      />
      <GoogleAnalytics measurementId="G-FYG221393X" />
      <Component {...pageProps} />
    </>
  );
}
