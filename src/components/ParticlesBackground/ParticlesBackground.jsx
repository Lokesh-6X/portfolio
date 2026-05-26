import { useCallback } from "react";

import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

import "./ParticlesBackground.css";

const ParticlesBackground = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: ["#00F5FF", "#7B2FF7", "#FF2E88"],
          },

          links: {
            enable: true,
            color: "#00F5FF",
            distance: 120,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 140,

              links: {
                opacity: 0.4,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;