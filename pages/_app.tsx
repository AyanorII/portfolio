import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Particles from "react-tsparticles";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { loadFull } from "tsparticles";
import Navbar from "../components/Nav/Navbar";
import "../styles/globals.css";
import theme from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fps_limit: 60,
              fullScreen: {
                enable: true,
                zIndex: -1,
              },
              interactivity: {
                detectsOn: "window",
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "grab" },
                  resize: true,
                },
                modes: {
                  push: { particles_nb: 4 },
                  repulse: { distance: 200, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#ffffff88" },
                links: {
                  color: "#ffffff8f",
                  distance: 150,
                  enable: true,
                  opacity: 0.1,
                  width: 1,
                },
                move: {
                  bounce: true,
                  direction: "none",
                  enable: true,
                  outMode: "out",
                  random: false,
                  speed: 0.5,
                  straight: false,
                },
                number: { density: { enable: true, area: 800 }, value: 80 },
                opacity: { value: 0.1 },
                shape: { type: "circle" },
                size: { random: true, value: 5 },
              },
              detectRetina: true,
            }}
          />
          <Navbar />
          <Component {...pageProps} />
        </>
      </SCThemeProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
