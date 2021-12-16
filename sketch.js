let gameState = "play";
let basa = {}
let player1 = {}
let player2 = {}
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 359, 100, 100, 100);
  basa = new Ball(windowWidth / 2, windowHeight / 2, 50, 50);
  player1 = new Paddle(10, windowHeight / 2, 15, 80);
  player2 = new Paddle(windowWidth - 25, windowHeight / 2, 15, 80);
}

function draw() {
  background(40);
  if (gameState == "play") {
    basa.update();

    // CHECK IF BALL IS PAST PADDLES
    if (basa.x - basa.width > windowWidth ||
        basa.x + basa.width < 0) {
      basa.reset();
    }

    // CHECK IF BALL HITS TOP OR BOTTOM WALL
    if (basa.y + basa.height / 2 > windowHeight ||
        basa.y - basa.height / 2 < 0) {
      basa.dy = basa.dy * -1;
    }

    // UPDATE PADDLES WITH KEY INPUT
    if (keyIsDown(87)) {
      player1.dy = -player1.paddleSpeed;
      player1.update();
    } else if (keyIsDown(83)) {
      player1.dy = player1.paddleSpeed;
      player1.update();
    } else {
      player1.dy = 0;
    }
    if (keyIsDown(UP_ARROW)) {
      player2.dy = -player2.paddleSpeed;
      player2.update();
    } else if (keyIsDown(DOWN_ARROW)) {
      player2.dy = player2.paddleSpeed;
      player2.update();
    } else {
      player2.dy = 0;
    }

    basa.draw();
    player1.draw();
    player2.draw();
    // text to show FPS
    text(`FPS: ${Math.round(frameRate())}`, 10, 10);
  }
}