export default class Ball {
    constructor(gameWeight, gameHeight, game) {
        this.position = {
            x: game.paddle.position.x,
            y: game.paddle.position.y - game.paddle.height
        }
        this.size = 20
        this.image = document.getElementById("ball_img");
        this.direction = {
            x: 1,
            y: 1
        }
        this.speed = {
            x: 5,
            y: 5
        }
        this.gameHeight = gameHeight;
        this.gameWeight = gameWeight;
        this.game = game;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update() {
        // logic to detect gameScreen-ball collision
        console.log(this.game.paddle.width);
        this.position.x += this.direction.x * this.speed.x;
        this.position.y += this.direction.y * this.speed.y;
        if(this.position.x < 0 || this.position.x + this.size > this.gameWeight){
            if(this.direction.x == 1) this.direction.x = -1;
            else this.direction.x = 1;
        }
        if(this.position.y < 0 || this.position.y + this.size > this.gameHeight){
            if(this.direction.y == 1) this.direction.y = -1;
            else this.direction.y = 1;
        }

        // logic to detect paddle-ball collision
        let paddleTopY = this.gameHeight - this.game.paddle.height - 10;
        let paddleTopX_left = this.game.paddle.position.x;
        let paddleTopX_right = paddleTopX_left + this.game.paddle.width;
        let bottomofBall = this.position.y + this.size;

        if(this.position.x >= paddleTopX_left && this.position.x <= paddleTopX_right
                && bottomofBall >= paddleTopY) {
            this.direction.y = -1;
        }

    }
}