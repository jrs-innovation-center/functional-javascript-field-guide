# Factory Functions

With JavaScript and Functional Programming often times when you may think you need
classes you can get a lot more mileage from factory functions.

Lets go back to our reduce example:


``` js
function createStore (reducer) {
  let subscriptions = []
  let state = null

  function notify (state, prevState) {
    return fn => fn(state, prevState)
  }

  return {
    dispatch(action) {
      const prevState = state
      state = reduce(reducer, state, [action])
      map(notify(state, prevState), subscriptions)
    },
    subscribe(fn) {
      subscriptions.push(fn)
    }
  }
}
```

This is a factory function, it starts with a function and returns an object, using
closures the object is able to retain private state.

``` js
const store = createStore(
  (state=0, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
})

store.subscribe((state) => {
  console.log(state)
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
```

With this example we are creating a state management system using reducers, this
reducer is a counter, every time we dispatch 'INCREMENT', the state increments by
one. every time we dispatch 'DECREMENT', the state decreases by one.

You can check the demo out here:

[https://codepen.io/twilson63/pen/pWbjGR?editors=0011](https://codepen.io/twilson63/pen/pWbjGR?editors=0011)

---

[index](/)
