export default class Brick {
    constructor(game, position) {
        this.game = game;
        this.image = document.getElementById("brick_img");
        this.height = 25;
        this.weight = 80;
        this.position = position;
    }

    update() {

    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x,
            this.position.y, this.weight, this.height);
    }
}