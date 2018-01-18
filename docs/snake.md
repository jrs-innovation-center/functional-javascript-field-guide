## Snake Game

## Imperative Example

https://codepen.io/twilson63/pen/jGVWNE

Type out this code and try to get it running:

``` html
<header>
  <h1>Snake Game</h1>
</header>    
```

``` js
var container = document.body;
var canvas = document.createElement('canvas');
var w = 400;
var h = 400;

// set height and width
canvas.setAttribute('height', h);
canvas.setAttribute('width', w);

// add to the container
container.appendChild(canvas);

// set canvas to 2d
var ctx = canvas.getContext("2d");

// Size of a section of the snake
var size = 10;

// This array holds the sections of the snake
var snake = Array();
// This variable holds the location of the snake's food
var food = {};

// What direction are we moving
var direction = 'right';

// Our score for the game
var score = 0

// Initialize the page
init();

// This function initializes the page calling the paint function for the first time
function init () {
  snake = createSnake()
  food = createFood();
  paint();
}

// This function is where the work really occurs
function paint () {

  // Get a variable with the location of the snake's head
  var head = { x : snake[0].x,
               y : snake[0].y }

  // End of the game?
  if ( head.x === -1 ||
       head.y === -1 ||
       head.x === w/size ||
       head.y === h/size) {
    return
  }

  // Move the head of the snake whichever direction is selected
  if (direction === 'right') {
    head.x = head.x + 1
  }
  else if (direction === 'left') {
    head.x = head.x - 1
  }
  else if (direction === 'up') {
    head.y = head.y - 1
  }
  else if (direction === 'down') {
    head.y = head.y + 1
  }

  // Put the new head of the snake on the front of the list of segments
  snake.unshift(head)

  // If we're on the food, update the score and create a new food
  if (head.x === food.x && head.y === food.y) {
    score = score + 1
    food = createFood()
  }
  // If we're not on the food, just move the snake
  else {
    snake.pop()
  }

  // paint board
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, w, h);

  // Draw the segments of the snake
  snake.forEach(paintCell);  
  // Draw the food
  paintFood(food)

  // Display the score
  ctx.fillText('Score: ' + score, 5, h - 5)

  // Call me again in 60 milliseconds
  setTimeout(paint, 60);  

}

// This function returns a list of the snake segments
function times(n, fn) {
  var results = [];
  for (var i = 0; i < n; i++) {
    results.push(fn(i));
  }
  return results;
}

// This function creates the array that is the snake
function createSnake () {
  return times(5, function (i) {
    return { x: i, y: 0 };
  });
}

// This will draw one segment of the snake
function paintCell (c) {
  ctx.fillStyle = 'blue';
  ctx.fillRect(c.x * size, c.y * size, size, size);
  ctx.strokeStyle = 'white';
  ctx.strokeRect(c.x * size, c.y * size, size, size);
}


// Generate a random position
function random(min, max) {
  return Math.round(Math.random() * (max - min)/min );
}

// Create and return the food
function createFood () {
  return {
    x: random(size, w),
    y: random(size, h)
  };
}

// This function will draw the food on the canvas
function paintFood (f) {
  ctx.fillStyle = 'red';
  ctx.fillRect(f.x * size, f.y * size, size, size);
  ctx.strokeStyle = 'white';
  ctx.strokeRect(f.x * size, f.y * size, size, size);
}

// Call the keyEvent function passing a function that will set the direction
keyEvent(function (code) {
  if (code === 37) {
    direction = 'left'
  }
  else if (code === 38) {
    direction = 'up'
  }
  else if (code === 39) {
    direction = 'right'
  }
  else if (code === 40) {
    direction = 'down'
  }
})

// This function sets up an evet to detect the arrow keys
function keyEvent(fn) {
    document.addEventListener('keydown', function (e) { fn(e.keyCode) })
}
```

## Functional Example

https://github.com/twilson63/snake-redux
