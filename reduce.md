# Reduce

So Filter allows us create a subset list of items and map allows us to transform a list of items. Reduce allows us to take a list of times and return a single value.

The most common and clear usage for reduce is a sum function.

``` js
function add (a, b) {
  return a + b
}

const total = [1,2,3,4,5].reduce(add, 0)
console.log(total)
```

Reduce is really about combining things, each reduce takes a reducer function and an initial value, then iterates through each value invoking the reducer by passing the accumulator and the current value of the data structure. The returned result of the function becomes the next accumulator value.

If I was to write a reduce function, it would look something like this:

``` js

function reduce (reducer, initialValue, list) {
  let acc = initialValue
  for (let i = 0; i < list.length; i++) {
    acc = reducer(acc, list[i])
  }
  return acc
}
```

Reducer functions are binary which means they take two inputs. A Reduce function can return all kinds of final outputs, it is know as the swiss army knife of functional programming.

Using reduce, you can create your own map function.

``` js
function map (mapper, list) {
  return reduce((a, v) => a.concat(mapper(v)), [], list)
}
```

Using reduce, you can create your own filter function.

``` js
function filter (predicate, list) {
  return reduce(
    (a,v) => predicate(v) ? : a.concat(v) : a,
    [], list)
}
```

Remember the compose2 function? what if we wanted to compose more than 2 functions? We can create an invoke function, then we can use a reduce to create a compose.

``` js
function invoke (v, fn) {
  return fn(v)
}

function compose (...fns) {
  return v =>
    reduce(invoke, v, fns.reverse())
}
```

We could also create a pipe function that does the same as compose but from left to right.

``` js
function pipe (...fns) {
  return v =>
    reduce(invoke, v, fns)
}
```

## Using the reduce function we can create a state management system that notifies us when something changes.

``` js
function createStore (reducer) {
  let subscriptions = []
  let state = null

  function notify (v) {
    return fn => fn(v)
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

Lets look at this pattern in some applications

* Todo CLI
* Game of Life
* Tic Tac Toe
