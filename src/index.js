import Paddle from '/src/paddle.js';
import inputHandler from '/src/input.js';
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');


const GAME_WEIGHT = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WEIGHT, GAME_HEIGHT); 

paddle.draw(ctx);

let lastTime = 0;

new inputHandler(paddle);

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, GAME_WEIGHT, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(ctx);
    requestAnimationFrame(gameLoop);
}

gameLoop();