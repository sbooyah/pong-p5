class Paddle {
    constructor(x, y, width, height) {
        this.x = x,
        this.y = y,
        this.width = width,
        this.height = height,
        this.dy = 0.5
    }
    update() {
        this.y = this.y + this.dy * deltaTime;
    }
    draw() {
        rect(this.x, this.y, this.width, this.height);
    }

}