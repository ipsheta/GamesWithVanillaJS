import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition();//every value has to be within 1 to 21, as total grid 21
const EXPANSION_RATE = 3;

//Update logic for game
export function update() {
    //check if snake is on top of food(eats food)
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE); //expand snake
        food = getRandomFoodPosition();//new position of food
    }
}

// draw/render everything on screen based on update
export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

//executed this repeatedly and return a new food position which is not on snake body
function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
