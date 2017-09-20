# Partial Application and Curry

Generalization to Specialization, or when you have a function that needs more than one input, instead of creating buckets to hold the information you need for each input until you have all the inputs, simply pass the inputs you know to the function and let it hold them for you until you have all the inputs needed for the function to perform. This process can create a much cleaner approach to programming. Often times, you know some of the inputs you need before you know all of the inputs.

## What is the difference between partial application and curry?

## Partial Application

Partial Application takes some of the inputs and returns a function that takes the rest of the inputs.

``` js
function partial (fn) {
  return function (...args) {
    return function (...rest) {
      return fn.apply(null, [...args, ...rest])
    }
  }
}
```

It may look a little cleaner using the arrow expressive syntax

``` js
function partial (fn, ...args) {
  return (...rest) => fn.apply(null, [...args, ...rest])
}
```

Here is a common example of creating a more specialized function using partial.

``` js
function add (a,b) {
  return a + b
}

const add10 = partial(add, 10)
console.log(add10(5)) // 15
console.log(add10(2)) // 12
```

## Curry

Curry takes a function and returns a function taking one input, then when that function is called it returns another function seeking one input and continues until all the inputs are provided, then it runs the function. It allows you to drip each input into the function over time until all inputs are provided.

For example, lets say you had a function that took three inputs.

``` js
function add (a,b,c) {
  return a + b + c
}
```

You would use curry like this:

``` js
const cadd = curry(3, function (a,b,c) {
  return a + b + c
})
console.log(cadd(1)(2)(3))
```

A simple curry function may look something like this.

``` js
function curry(n, fn) {
  return (...values) => {
    const test = v => {
      values.push(v)
      return (
        values.length === n
          ? fn.apply(null, values)
          : test
      )
    }
    return test
  }
}
```

In most functional programming utilities curry is included and in some all functions in the library are automatically curried.

But they are done so in a way called auto-curry. Auto-curry is simply a smarter curry, if you supply all the args it runs, if you supply 2 and then another one it runs, if you supply one at a time it waits then runs. So basically, it gives the user more flexibility on how they want to partially apply or curry there functions.

Lets look at an implementation of `auto-curry`

``` js
function concat2 (a,b) {
  return [...a, ...b]
}

const curryN = (n, fn) => (...inputs) => {
  if (n === inputs.length) { return fn.apply(null, inputs) }
  return function test (...args) {
    inputs = concat2(inputs, args)
    return (
      inputs.length === n
        ? fn.apply(null, inputs)
        : test
    )
  }
}

const add = curryN(3, function (a,b,c) {
  return a + b + c
})
console.log(add(1,2)(3))
```

This should work ok for most of our test, but it does have some flaws.

> In several functional programming utilities you don't have to specify the number of arguments, they will figure that out for you, but I have found it makes understanding the implementation a little more clear.

Once we have curry in our tool kit this really opens the door for some awesome functional composition.

Here is a better auto-curry:

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

We separate the concerns into three functions, \_arity which returns functions with the remaining amount of arguments, then a private curry function and finally the curry function.

---

[index](/)
