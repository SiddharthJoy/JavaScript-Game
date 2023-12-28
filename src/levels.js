import Brick from "./brick.js"

// This method is called in game.js
// This makes a array of bricks for the given level
// and in game.js we add the brick array to the game objects

export function buildLevel(game, level) {
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick == 1) {
                let position = {
                x: 80 * brickIndex,     // horizontal position
                y: 20 + 25 * rowIndex   // vertical position
                }
                bricks.push(new Brick(game, position));
            }
        })
    });

    return bricks;
}

export const level1 = [
    [0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1]
]