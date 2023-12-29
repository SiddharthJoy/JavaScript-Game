import Paddle from '/src/paddle.js';
import inputHandler from '/src/input.js';
import Ball from '/src/ball.js';
import {buildLevel, level1} from '/src/levels.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
    }

    start() {
        this.paddle = new Paddle(this.gameWidth, this.gameHeight);
        this.ball = new Ball(this.gameWidth, this.gameHeight, this);
        // get the bricks array built in levels.js
        let bricks = buildLevel(this, level1);
        this.gameObjects = [this.paddle, this.ball, ...bricks];
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

        this.gameObjects = this.gameObjects.filter(object => !object.markForDeletion);
    }
}