import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fps_limit: 30,
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
            speed: 0.3,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.1 },
          shape: { type: "circle" },
          size: { random: true, value: 5 },
        },
        detectRetina: true,
      }}
    />
  );
};
export default ParticlesBackground;
