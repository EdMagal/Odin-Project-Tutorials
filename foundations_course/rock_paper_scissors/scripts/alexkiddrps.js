window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class AlexKidd {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.image = document.getElementById("alexkidd");
      this.spriteWidth = 32;
      this.spriteHeight = 32;
      this.width = this.spriteWidth;
      this.height = this.spriteHeight;
      this.scale = 1;
      this.x = this.canvasWidth / 2 - (this.width * this.scale) / 2;
      this.y = this.canvasHeight / 2 - (this.height * this.scale) / 2;
      this.minFrame = 1;
      this.maxFrame = 1;
    }

    draw(context) {
      context.drawImage(
        this.image,
        this.minFrame * this.spriteWidth,
        this.minFrame * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }

    update() {}
  }

  const alexKidd = new AlexKidd(canvas.width, canvas.height);

  function animate() {
    alexKidd.draw(ctx);
  }

  animate();
});
