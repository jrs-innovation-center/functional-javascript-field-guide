const { createStore, combineReducers } = await System.import('nanodux')
const randomInt = await System.import('random-int')
const { ifElse, head, pick, always, times, always, cond, dec, inc, T } = await System.import('ramda')
// data Storage

// engine
const store = createStore(
  combineReducers({
    food,
    snake,
    score,
    direction,
    app() {
      return {h: 400, w: 400}
    }
    size() {
      return 10
    },
    ctx
  })
)

function direction(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return action.payload
    default:
      return state
  }
}

function ctx(state, action) {
  switch (action.type) {
    case 'SETUP':
      return action.payload
    default:
      return state
  }
}

function score(state, action) {
  switch (action.type) {
    case 'CLEAR':
      return 0
    case 'EAT':
      return state + 1
    default:
      return state
  }
}

function snake(state, action) {
  // setup default
  state = ifElse(isNil, always(times((i) => {x: i, y: 0, color: 'blue'}, 5)))

  switch (action.type) {
    case 'POP':
      return dropLast(1, state)
    case 'MOVE':
      let h = clone(head(state))
      h = cond([
        [equals('LEFT'), always(assoc('x', dec(h.x), h))],
        [equals('RIGHT'), always(assoc('x'), inc(h.x), h)],
        [equals('UP'), always(assoc('y', dec(h.y), h))],
        [equals('DOWN'), always(assoc('y', inc(h.y), h))]
      ])(action.payload.direction)
      return prepend(h, state)
    case 'SET_SNAKE':
      return action.payload
    default:
      return state
  }
}

function food(state, action) {
  switch (action.type) {
    case 'SET_FOOD':
      return action.payload
    default:
      return state
  }
}

// presentation

// - render function
const render = compose(
  paintFood,
  paintSnake,
  paintScore,
  paintBoard
)

function paintBoard(state) {
  const { ctx } = state
  // paint board
  paintCell(ctx, 400, {x: 0, y: 0, color: 'white'})
  return state
}

function paintScore (state) {
  const { ctx, score, app } = state
  ctx.fillText('Score: ' + score, 5, app.h - 5)

  return state
}

function paintSnake(state) {
  const { ctx, size, snake } = state
  map(paintCell(ctx, size), snake)
  return state
}

function paintFood(state) {
  const { ctx, food, size } = state
  paintCell(ctx, size, food)
  return state
}

function paintCell (ctx, size, cell) {
  ctx.fillStyle = cell.color;
  ctx.fillRect(cell.x * size, cell.y * size, size, size);
  ctx.strokeStyle = 'white';
  ctx.strokeRect(cell.x * size, cell.y * size, size, size);
}

// - init function (side effects)
function init(store) {

  var container = document.body
  var canvas = document.createElement('canvas')
  const {w,h} = store.getState().app

  // set height and width
  canvas.setAttribute('height', h)
  canvas.setAttribute('width', w)

  // add to the container
  container.appendChild(canvas)

  // set canvas to 2d
  var ctx = canvas.getContext('2d')

  store.dispatch({type: 'SETUP', payload: ctx })
}

// - event handler
document.addEventListener('keydown', function (e) {
  const direction = cond([
    [equals(37), always('LEFT')],
    [equals(38), always('UP')],
    [equals(39), always('RIGHT')],
    [equals(40), always('DOWN')],
    [T, always(null)]
  ])(e.keyCode)

  if (not(isNil(direction))) {
    store.dispatch({ type: 'CHANGE', payload: direction })
  }
})

const tick = (dispatch, getState) => {
  const {snake, food, direction, size, app} = getState()

  store.dispatch({
    type:'MOVE',
    payload: direction
  })

}

function eatFood (food, h) {
  return deepEquals(pick(['x', 'y'],food), pick(['x','y'],h))
}

function createFood (app, size) {
  return { x: randomInt(0, app.w / size), y: randomInt(0, app.h / size )}
}

store.subscribe(function (state) {
  const { snake, food, size, app } = state
  // game over
  if (head(snake).x === -1 ||
    head(snake).y === -1 ||
    head(snake).x === (app.w / size) ||
    head(snake).y === (app.h / size)
  ) { return }

  if (eatFood(food, head(snake))) {
    store.dispatch({ type: 'EAT', payload: createFood(app, size) })
    return
  } else {
    store.dispatch({ type: 'POP' })
    return
  }

  render(state)
  setTimeout(tick, 60)
})
