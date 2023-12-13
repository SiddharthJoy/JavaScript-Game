import Paddle from '/src/paddle.js';
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');


const GAME_WEIGHT = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WEIGHT, GAME_HEIGHT); 

paddle.draw(ctx);