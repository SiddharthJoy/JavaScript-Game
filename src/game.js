import Paddle from '/src/paddle.js';
import inputHandler from '/src/input.js';
import Ball from '/src/ball.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
    }

    start() {
        this.paddle = new Paddle(this.gameWidth, this.gameHeight);
        this.ball = new Ball(this.gameWidth, this.gameHeight, this);
        this.gameObjects = [this.paddle, this.ball];
        new inputHandler(this.paddle);
    }

    draw(ctx) {
        this.gameObjects.forEach(element => {
            element.draw(ctx);
        });
    }

    update(){
        this.gameObjects.forEach(element => {
            element.update();
        });
    }
}