export function collisionDetected(ball, gameObject) {
    let topOfObject = gameObject.position.y;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.weight;
    let ball_top = ball.position.y;
    let ball_bottom = ball.position.y + ball.size;
    let ball_left = ball.position.x;
    let ball_right = ball.position.x + ball.size;
    let markForDeletion = false;

    if(ball_bottom >= topOfObject &&
        ball_top <= bottomOfObject &&
        ball_right >= leftSideOfObject &&
        ball_left <= rightSideOfObject) {
                markForDeletion = true;
                console.log("Collision Detected!");
                return true;
    }

    return false;
}
