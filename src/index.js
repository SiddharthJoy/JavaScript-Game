import Game from '/src/game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WEIGHT = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WEIGHT, GAME_HEIGHT);
game.start();

let lastTime = 0;
function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, GAME_WEIGHT, GAME_HEIGHT);
    ctx.drawImage(document.getElementById("bg_img"), 0, 0, GAME_WEIGHT, GAME_HEIGHT);
    game.draw(ctx);
    game.update();
    requestAnimationFrame(gameLoop);
}

gameLoop();