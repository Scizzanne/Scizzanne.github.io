/** 
 * TODO: FILLED SCREEN ANIMATION (100% winner ending) 
 * Compose all game over songs (Famitracker)
 * Make the snake prettier? Give user options?
 * Make menu before starting?
 * 
*/

// Sound Effect Variables
var point = document.getElementById("Point"); 
var up = document.getElementById("snakeUp"); 
var down = document.getElementById("snakeDown"); 
var left = document.getElementById("snakeLeft"); 
var right = document.getElementById("snakeRight"); 
var over = document.getElementById("GameOver"); 
var overFun1 = document.getElementById("GameOverFun1");
var overFun2 = document.getElementById("GameOverFun2");
var overFun3 = document.getElementById("GameOverFun3");
var overBad = document.getElementById("GameOverBad"); 
var overGood = document.getElementById("GameOverGood"); 

// Game Variabels
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("scoreDisplay");

// canvas size
canvas.width = 400;
canvas.height = 400;

// game settings
const boxSize = 20; // constant size for each box
let snake = [{x:200, y:200}] // at the center
let food = { // initial food position
    x: randomPosition(canvas.width),
    y: randomPosition(canvas.height),
}

// local variables
let direction = {x:0, y:0}
let score = 0;
let gameOver = false;

function randomPosition(max) {
    return Math.floor(Math.random() * (max / boxSize)) * boxSize;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

funValue = getRandomInt(100);

// head
function createHead(head) {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.fillRect(head.x, head.y, boxSize, boxSize)
    ctx.strokeStyle = "black";
}

// set game
function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // create food
    ctx.fillStyle = "green";
    ctx.arc (
        food.x + boxSize / 2,
        food.y + boxSize / 2,
        boxSize / 2,
        0, 
        Math.PI * 2
    )
    ctx.fill() 

    // create snake
    snake.forEach((segment, index) => {
        if (index === 0) {
            createHead(segment);
        } else {
            ctx.fillStyle = "yellow";
            ctx.fillRect(segment.x, segment.y, boxSize, boxSize)
            ctx.strokeStyle = "black";
            ctx.strokeRect(segment.x, segment.y, boxSize, boxSize)
        }
    })

    // Game over
    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = '30px Comic Sans MS';
        ctx.textAlign = "center";
        if (score < 5) { // if you die immediately
            ctx.fillText ("Damn bro, you suck.", canvas.width / 2, canvas.height / 2);
        } else if (score > 100) { // if you score over 100 points.
            ctx.fillText ("Bro. Why the fuck", canvas.width / 2, canvas.height / 2 - 30);
            ctx.fillText ("are you still here??", canvas.width / 2, canvas.height / 2);
        } else if (score >= 50) {
            ctx.fillText ("okay okay... not bad!", canvas.width / 2, canvas.height / 2);
        } else { // normal.
            // Random game over message secret hehe
            if (funValue > 10 && funValue < 35) {
                ctx.fillText ("Erm, what da sigma?", canvas.width / 2, canvas.height / 2);
            } else if (funValue > 35 && funValue < 40) {
                ctx.fillText ("I just shit myself.", canvas.width / 2, canvas.height / 2);
            } else if (funValue >= 40 && funValue < 55) {
                ctx.fillText ("IT'S LEAKING OUT!!!", canvas.width / 2, canvas.height / 2);
            } else {
                ctx.fillText ("Game Over.", canvas.width / 2, canvas.height / 2);
            }
        }
        ctx.font = '20px Comic Sans MS';
        ctx.fillText (
            "Press \"r\" to Restart.",
            canvas.width / 2,
            canvas.height / 2 + 30
        )
    }
}

// Update position
function update() {
    if (gameOver) return;

    const head = {
        x: snake[0].x + direction.x * boxSize,
        y: snake[0].y + direction.y * boxSize,
    };

    // Check if snake eat
    if (head.x === food.x && head.y === food.y) {
        point.play(); 
        score++;
        scoreDisplay.textContent = `Score: ${score}`;

        food = { // create new food
            x: randomPosition(canvas.width),
            y: randomPosition(canvas.height),
        };

        if ( // checks for food and segment overlap
            snake.some((segment) => segment.x === food.x 
            && segment.y === food.y)
        ) {
            food = { // retry create new food
                x: randomPosition(canvas.width),
                y: randomPosition(canvas.height),
            };
        }
    } else {
        snake.pop();
    }

    // Check collision (death)
    if (
        head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || 
        snake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
        gameOver = true;
        if (score < 5) { // bad death
            overBad.play();
        } else if (score > 100) { // good death
            overGood.play();
        } else {
            if (funValue > 10 && funValue < 35) { // erm what da sigma death
                overFun1.play();
            } else if (funValue > 35 && funValue < 40) { // I just shit myself death
                overFun2.play();
            } else if (funValue >= 40 && funValue < 55) { // IT'S LEAKING OUT death
                overFun3.play();
            } else { // default death
                over.play();
            }
        }
        draw();

        return;
    }
    snake.unshift(head)
}

// Reset Game
function resetGame() {
    snake = [{x:200, y:200}];
    direction = {x:0, y:0};
    score = 0;
    gameOver = false;
    food = { // set new food position
        x: randomPosition(canvas.width), 
        y: randomPosition(canvas.height)
    };
    scoreDisplay.textContent = `Score: ${score}`;
    funValue = getRandomInt(100);

    // open menu function
}

// controls
window.addEventListener("keydown", (e) => {
    if (gameOver && e.key === "r") { // r reset
        resetGame();
        return;
    } else if (gameOver && e.key === " ") { // spacebar reset
        resetGame();
        return;
    }

    switch (e.key) {
        case "ArrowUp":
            if (direction.y === 0) { // go up
                up.play();
                direction = {x:0, y:-1}
            }
            break;
        case "w":
            if (direction.y === 0) { // go up
                up.play();
                direction = {x:0, y:-1}
            }
            break;
        case "ArrowDown":
            if (direction.y === 0) { // go down
                down.play();
                direction = {x:0, y:1}
            }
            break;
        case "s":
            if (direction.y === 0) { // go down
                down.play();
                direction = {x:0, y:1}
            }
            break;
        case "ArrowLeft":
            if (direction.x === 0) { // go left
                left.play();
                direction = {x:-1, y:0}
            }
            break;
        case "a":
            if (direction.x === 0) { // go left
                left.play();
                direction = {x:-1, y:0}
            }
            break;
        case "ArrowRight":
            if (direction.x === 0) { // right
                right.play();
                direction = {x:1, y:0}
            }
            break;
        case "d":
            if (direction.x === 0) { // go right
                right.play();
                direction = {x:1, y:0}
            }
            break;
    }
})

window.onkeydown = function(event) { 
    if (event.keyCode === 17 && event.keyCode === 82) { // ctrl + r
        event.preventDefault();
        this.location.reload();
    }
}

// Main game loop
function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 100);
}

gameLoop();