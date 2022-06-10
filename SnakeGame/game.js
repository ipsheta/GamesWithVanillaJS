import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'; //importing snake values
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

//request new frame, game execution starts here
function main(currentTime) {
    //show slert and return
    if (gameOver) {
        if (confirm('You Lost !! Press OK to restart..')) {
            window.location = '/Projects/VanillaJavascriptProjects/SnakeGame/index.html'
        }
        return; //dont restart if cancel is pressed
    }

    //request new frame always but dont render new snake positon without following 'if' check
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    //Dont render new frame(new position of snake) if last frame is render less than 0.5s before
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);


//Update logic for game
function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

// draw/render everything on screen based on update
function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

//checks whether snake is outside grid or it intersect itself
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();

}