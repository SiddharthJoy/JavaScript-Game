export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 20;
        this.direction = -1;
        
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    }

    moveLeft() {
        this.direction = -1;
    }

    moveRight() {
        this.direction = 1;
    }


    draw(ctx) {
        ctx.fillStyle = '#0f0'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height); 
    }

    update(deltaTime) {
        if(!deltaTime) return;
        this.position.x += 50 / deltaTime * this.direction;
        this.position.x = Math.max(0,this.position.x);
        this.position.x = Math.min(600,this.position.x);
        console.log(this.direction);
    }
}