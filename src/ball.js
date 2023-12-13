export default class Ball {
    constructor() {
        this.image = document.getElementById("ball_img");
    }

    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, 16, 16);
    }

    update() {
        //todo
    }
}