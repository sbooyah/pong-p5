class Ball {
  constructor(x, y, width, height) {
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height,
    this.dx = Math.random() - 0.5,
    this.dy = Math.random() > 0.5 ? -0.5 : 0.5
  }
  update() {
    this.x = this.x + this.dx * deltaTime;
    this.y = this.y + this.dy * deltaTime;
  }
  draw() {
    ellipse(this.x, this.y, this.width, this.height);
  }
  reset() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() > 0.5 ? -0.5 : 0.5;
  }
}