document.addEventListener("DOMContentLoaded", function () {
  console.log("script, ran", message);
  const canvas = document.getElementById("particleseffect");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Particle class
  class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      // Bounce off the walls
      if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
        this.velocity.x = -this.velocity.x;
      }

      if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
        this.velocity.y = -this.velocity.y;
      }
    }
  }

  // Create particles
  const particles = [];
  const numberOfParticles = 30;

  for (let i = 0; i < numberOfParticles; i++) {
    const radius = Math.random() * 2 + 1; // Random radius between 1 and 5
    const x = Math.random() * (canvas.width - 2 * radius) + radius; // Random x-coordinate
    const y = Math.random() * (canvas.height - 2 * radius) + radius; // Random y-coordinate
    const color = "rgb(120 230 30 / 37%)"; // Lime green color with some transparency

    const velocity = {
      x: (Math.random() - 0.5) * 1, // Random x velocity between -1 and 1
      y: (Math.random() - 0.5) * 1, // Random y velocity between -1 and 1
    };

    particles.push(new Particle(x, y, radius, color, velocity));
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const particle of particles) {
      particle.update();
    }
  }

  animate();

  // Resize canvas on window resize
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
