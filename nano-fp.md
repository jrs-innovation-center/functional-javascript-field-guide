# Lets create our own little fp utility library

First thing we want in our nano-fp utility library is a way to do curry, we will use the auto curry function, and we basically need a way to do concat, so we will create a concat2 function.

``` js
const _arity = function (n, fn) {
  switch (n) {
    case 0: return function () { return fn.apply(null, arguments) }
    case 1: return function (a0) { return fn.apply(null, arguments) }
    case 2: return function (a0, a1) { return fn.apply(null, arguments) }
    case 3: return function (a0, a1, a2) { return fn.apply(null, arguments) }

    default: throw new Error('First argument to _arity function must be a non-negative integer no greater than four')
  }
}
const _curry = function (length, received, fn) {
  if (length === received.length) { return fn.apply(null, received) }
  return function (...args) {
    const combined = received.concat(args)
    const left = length - combined.length
    return left <= 0 ? fn.apply(null, combined) : _arity(left, _curry(length, combined, fn))
  }
}

const curry = fn => (...args) => _curry(fn.length, args, fn)
```

Next lets add our primitive functions to the utility, remember isNil and not.

``` js
const isNil = (v) => v == null
const not = (v) => !v
const identity = (v) => v
const always = (v) => () => v
```

Create a couple of common utilities one to compare to values and the other to pull the property from and object

``` js
const equals = curry((a, b) => a === b)
const prop = curry((p, obj) => obj[p])
```

Map, Filter, and Reduce with some curry

``` js
const reduce = curry((fn, v, list) => list.reduce(fn, v))
const map = curry((fn, list) => list.map(fn, list))
const filter = curry((fn, list) => list.filter(fn, list))
```

Function Composition with some curry

``` js
const invoke = (v, fn) => fn(v)
const compose = (...fns) => v => reduce(invoke, v, fns.reverse())
```

Some additional utility functions that will be helpful

``` js
const concat = (...arrs) => reduce((a,b) => [...a, ...b], [], arrs)
const path = curry((keys, obj) => reduce((o, p) => o[p], obj, keys))
const pluck = curry((key, list) => map(prop(key), list))
const and = curry((a, b) => a && b)
const or = curry((a, b) => a || b)
const contains = curry((exp, source) => {
  const reg = new RegExp(`${exp}`, 'i')
  return reg.test(source)
})
const noop = () => null
```

Great, now that we have curried all of our functions, lets write some code:

> Challenge 1, build a machine that will filter a group of quotes that contain a particular word and then transform that list into a common html list.

[https://codepen.io/twilson63/pen/YrqbJE](https://codepen.io/twilson63/pen/YrqbJE)

---

[index](/)
