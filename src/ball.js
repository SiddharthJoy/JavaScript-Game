export default class Ball {
    constructor(gameWeight, gameHeight) {
        this.position = {
            x: 10,
            y: 10
        }
        this.size = {
            x: 20,
            y: 20
        }
        this.image = document.getElementById("ball_img");
        this.direction = {
            x: 1,
            y: 1
        }
        this.speed = {
            x: 10,
            y: 10
        }
        this.gameHeight = gameHeight;
        this.gameWeight = gameWeight;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
    }

    update() {
        this.position.x += this.direction.x * this.speed.x;
        this.position.y += this.direction.y * this.speed.y;
        if(this.position.x < 0 || this.position.x + this.size.x > this.gameWeight){
            if(this.direction.x == 1) this.direction.x = -1;
            else this.direction.x = 1;
        }
        if(this.position.y < 0 || this.position.y + this.size.y > this.gameHeight){
            if(this.direction.y == 1) this.direction.y = -1;
            else this.direction.y = 1;
        }        
    }
}