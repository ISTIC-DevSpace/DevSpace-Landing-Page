window.onload = function() {
  Particles.init({
    /* SELECTI EL CANVAS */
    selector: '.header__background',
    /* PICK UP COLORS */
    color: ['#333333','#306fa4','#3b7daf','#262223'],
    /* Max particles */
    maxParticles: 100,
    /* Link the particles */
    connectParticles: true,
    sizeVariations: 20,
    /* Responsive for editing the particle for each resolution */
    responsive: [
      {
        /* From 768 width -- Particles will get those settings */
        breakpoint: 768,
        options: {
          maxParticles: 100,
          sizeVariations: 20,
          color: ['#333333','#306fa4','#3b7daf','#262223'],
          connectParticles: false
        }
      }, 
      {
        /* From 425 width -- Particles will get those settings */
        breakpoint: 425,
        options: {
          color: ['#333333','#306fa4','#3b7daf','#262223'],
          maxParticles: 100,
          connectParticles: true
        }
      }, 
      {
        /* From 320 width -- Particles will get those settings */
        breakpoint: 320,
        options: {
          color: ['#333333','#306fa4','#3b7daf','#262223'],
          maxParticles: 60,
          connectParticles: true
        }
      }
    ]
  });
};