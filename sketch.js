let gameState = "play";
let basa = {}
let player1 = {}
let player2 = {}
let player1Score = 0;
let player2Score = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 359, 100, 100, 100);
  basa = new Ball(windowWidth / 2, windowHeight / 2, 25, 25);
  player1 = new Paddle(10, windowHeight / 2, 15, 150);
  player2 = new Paddle(windowWidth - 25, windowHeight / 2, 15, 150);
}

function draw() {
  background(40);
  if (gameState == "play") {
    textFont('Arial');
    textSize(80)
    fill('white');
    text(player1Score, windowWidth / 2 - 50, windowHeight / 5)
    text(player2Score, windowWidth / 2 + 30, windowHeight / 5)
    

    // CHECK BALL PADDLE COLLISION
    if (basa.collides(player1)) {
      basa.dx = -basa.dx * 1.03;
      basa.x = player1.x + player1.width + basa.width / 2 + 1;

      if (basa.dy < 0) {
        basa.dy = -Math.random();
      } else {
        basa.dy = Math.random();
      }
    }

    if (basa.collides(player2)) {
      basa.dx = -basa.dx * 1.03;
      basa.x = player2.x - basa.width / 2;

      if (basa.dy < 0) {
        basa.dy = -Math.random();
      } else {
        basa.dy = Math.random();
      }
    }

    // CHECK IF BALL IS PAST PADDLES
    if (basa.x - basa.width > windowWidth ||
        basa.x + basa.width < 0) {
      basa.reset();
    }

    // CHECK IF BALL HITS TOP OR BOTTOM WALL
    if (basa.y + basa.height / 2 > windowHeight) {
      basa.y = windowHeight - basa.height / 2;
      basa.dy = -basa.dy
    }
    if (basa.y - basa.height / 2 < 0) {
      basa.y = 0 + basa.height / 2;
      basa.dy = -basa.dy
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

    basa.update();
    basa.draw();
    player1.draw();
    player2.draw();
    // text to show FPS
    textSize(40)
    text(`FPS: ${Math.round(frameRate())}`, 30, 50);
    text(`Ball.dx = ${basa.dx}`, 30, 90);
    text(`Ball.dy = ${basa.dy}`, 30, 130);
  }
}