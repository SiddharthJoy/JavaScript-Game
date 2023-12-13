export default class inputHandler {
    constructor(paddle) {
        document.addEventListener("keydown", KeyboardEvent => {
            switch(KeyboardEvent.code) {
                case "ArrowLeft":
                    // alert("Left is pressed");
                    paddle.moveLeft();
                    break;
                case "ArrowRight":
                    // alert("Right is pressed");
                    paddle.moveRight();
                    break;
            }
        })
    }
}