particlesJS('particles-js', {
    particles: {
      number: {
        value: 80, // Nombre de particules
        density: {
          enable: true,
          value_area: 800, // Densité des particules
        },
      },
      color: {
        value: "#212932", // Couleur des particules
      },
      shape: {
        type: "circle", // Forme des particules (circle, edge, triangle, etc.)
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true, 
        distance: 150, 
        color: "#212932", 
        opacity: 0.5, 
        width: 1, 
      },
      move: {
        enable: true,
        speed: 1, // Vitesse de déplacement
        direction: "none", // Direction du mouvement
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Effet lors du survol (grab, repulse, bubble, etc.)
        },
        onclick: {
          enable: true,
          mode: "push", // Effet lors du clic
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // Distance d'interaction
        },
        push: {
          particles_nb: 4, // Particules ajoutées au clic
        },
      },
    },
    retina_detect: true,
  });
  