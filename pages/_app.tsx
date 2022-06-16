import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Nav/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import theme from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <MuiThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <>
            <ParticlesBackground />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </>
        </SCThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default MyApp;
