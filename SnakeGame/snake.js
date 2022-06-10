import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 2; //snake moves 2times per second
const snakeBody = [{ x: 11, y: 11 }];
let newSements = 0;

//Update logic for game
export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    //console.log('update snake');
    //update body first: when snake moves, start from the 2nd last element as last element will be invisible and move towards head
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        //shift entire body to new position
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    //update head of snake
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

// draw/render everything on screen based on update
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

//expand length of snake
export function expandSnake(amount) {
    newSements += amount;
}

//checks whether snake body is on food
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        //checks ignoreHead and food is on the head
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}

//first element of array is the snake head
export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

//return true if pos is same
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    console.log('snake old length: '+snakeBody.length)
    for (let i = 0; i < newSements; i++) {
        //append new part to the end of current grid position, duplicates last position to highest length
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSements = 0;//otherwise snake will keep expanding
}