const GRID_SIZE = 21;

//Math.floor(Math.random() * GRID_SIZE) -> generates value between 0 to 20, Hence need to add 1
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

//detects if snake is outside grid
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE || 
        position.y < 1 || position.Y > GRID_SIZE

    )
}