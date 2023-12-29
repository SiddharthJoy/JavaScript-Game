import { collisionDetected } from '/src/collisionDetection.js';

export default class Brick {
    constructor(game, position) {
        this.game = game;
        this.image = document.getElementById("brick_img");
        this.height = 25;
        this.weight = 80;
        this.position = position;
        this.markForDeletion = false;
    }

    update() {
        if(collisionDetected(this.game.ball, this)) {
            this.markForDeletion = true;
            if(this.game.ball.direction.y == 1) this.game.ball.direction.y = -1;
            else this.game.ball.direction.y = 1;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x,
            this.position.y, this.weight, this.height);
    }
}