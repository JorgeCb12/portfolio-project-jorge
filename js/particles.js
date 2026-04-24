tsParticles.load("tsparticles", {
  background: {
    color: "0c1020",
  },
  particles: {
    number: {
      value: 50,
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
