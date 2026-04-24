// Function to determine the number of particles according to the screen size
function getParticlesNumber() {
  const width = window.innerWidth;

  if (width < 768) {
    return 20; // móvil
  } else if (width < 1024) {
    return 30; // tablet
  } else {
    return 50; // desktop
  }
}

tsParticles.load("tsparticles", {
  background: {
    color: "#0c1020",
  },
  particles: {
    number: {
      value: getParticlesNumber(),
    },
    color: {
      value: "#c1ff72",
    },
    links: {
      enable: true,
      color: "#c1ff72",
      distance: 200,
      opacity: 0.3,
    },
    move: {
      enable: true,
      speed: 1,
    },
    size: {
      value: 3,
    },
    opacity: {
      value: 0.4,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
});
