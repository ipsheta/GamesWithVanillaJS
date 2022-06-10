let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

//set snake moving direction based on input
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            //snake is not allowed to move up when it is already in up or down direction
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 }; //-1 is upward direction
            break;
        case 'ArrowDown':
            //snake is not allowed to move down when it is already in up or down direction
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 }; //1 is downward direction
            break;
        case 'ArrowLeft':
            //snake is not allowed to move left when it is already in left or right direction
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 }; //-1 is left direction
            break;
        case 'ArrowRight':
            //snake is not allowed to move right when it is already in left or right direction
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 }; //-1 is right direction
            break;

    }
});

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}