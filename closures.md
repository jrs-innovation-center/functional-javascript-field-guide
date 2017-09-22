# Closures and Higher Order Functions

## Common Interview Question

> What is a closure?

[https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)

> Be prepared for a quick follow-up: “Can you name two common uses for closures?”

A closure is all about lexical scope, when you create a new function all of the values created in that function only has scope inside that function, if you return a function that was defined within that function then it carries with it access to all of the values of that parents scope from creation time.

Some common uses is `factory functions` and object or function privacy. Another use case is partial application or currying. By returning a function to the caller if the caller did not send all of the inputs on the first call, you can store the inputs the caller did send and then await the remaining inputs before running the function. 

## Lets try to understand

Before we can jump into closures and HOF, we need to understand how functions can also be values. Just like we have been returning values that are integer, string, boolean, we can also return values as a function.

``` js
function identity() {
  return function (value) {
    return value
  }
}
```

The above example does not make a lot of sense at first, why would you want a silly function like this? If I call it passing the value 2, it returns a function, then when I call that function, it returns me the value 2.

The `identity` function actually proves itself very valuable when doing functional branching logic or iterations.

Here is another function that is helpful, it is called `always`, this function takes a value and returns a function, when that function is called, it always returns the initial value.

``` js
function always (value) {
  return function () {
    return value
  }
}
```

These are all examples of `Higher Order Functions`, that return functions as values.

A Higher Order Function can also take functions as arguments. This means you can pass a function into a function, or a machine into a machine, in which that function can be executed inside the function.

We do this with data structure functions:

``` js
const stooges = [{
  name: 'larry'
}, {
  name: 'curley'
}, {
  name: 'moe'
}]

console.log(
  map(
    prop('name'),
    stooges
  )
)

```

Ok, what we are doing here is passing a function that is created when we call prop to our map function, and we are mapping over the object data structure called stooges, we are grabbing the name property and transforming an array of objects to an array of strings.

Let's look at the implementation of `prop` and `map`.

``` js
function prop (key) {
  return function (obj) {
    return obj[key]
  }
}

function map (fn, list) {
  let results = []
  for (let i = 0; i < list.length; i++) {
    results.push(fn(list[i]))
  }
  return results
}
```

The `prop` function takes a key and returns a function that takes an object. The `map` function takes two arguments, a mapper function, and list or `array`.

This is an example of passing a function in as a value to a function, we are passing the returned function of the prop into the map to get the list of stooges name.

Lets look at the imperative approach:

``` js
let results = []
for (let i = 0; i < stooges.length; i++) {
  results.push(fn(list[i].name))
}
console.log(results)
```

vs

``` js
console.log(
  map(
    prop('name'),
    stooges
  )
)
```

> you might be thinking, that is much easier to read, what is this prop and map thing?

That would be a fair statement, but I think it may be very similar to kids being exposed to lincoln logs for a long period then being first introduced to legos. Lincoln logs are pretty cool, you can do a lot of things with lincoln logs and they are simple and straight forward, there are pretty much only two or three different shapes and sizes. This lego thing is a bit more confusing there are all kinds of shapes and sizes, but the amount flexibility to get with legos compared to lincoln logs is exponential, it does take more effort, but it is worth it!


### Closures

So now that we have talked about Higher Order Functions, lets talk about Closures.

Closures are one of the most powerful concepts in computer programming, basically when you are passing functions as values you are enabling developers to execute or invoke your functions in different environments or scopes. By passing functions to other places in the program  to run, the passed function, still has access to the scope it was created in when executed.

For Example:

``` js
function add (a, b) {
  return function () {
    return a + b
  }
}
```

This is a higher order function that returns a function to the caller, when that returned function is invoked it still has access to the variables a and b so that it can calculate the sum and return the correct result.

That is a closure, any varibles or values reference at the point when the function was created, is still accessible even when passed to a different location of the program. In JavaScript, we do this all the time. One common web example is the onclick handler.

``` js
const btn  = document.querySelector('button')

btn.on('click', function (event) {
  console.log('I can still see ', btn)
})

```

When the function passed into the on method is invoked, the state and context it is invoked could be completely different, but since it is created within the lexical scope of the `btn` variable then it will always have a reference to that variable.

> Closure is when a function "remembers" the variables around it event when that function is executed elsewhere
*** Kyle Simpson

* Remember this definition, you will be asked this on interviews!

By understanding the ability to pass functions as values and higher order functions, you basically understand closures, the give you the power to reference variables that are in scope at the time the function is defined and those variables are accessible when the function is invoked.

A common pattern has emerged taking advantage of this feature, which is called factory functions. You can create a function that returns and object and create a private scope that only that object has access to.

``` js
function foo () {
  let name = 'John Doe'

  return {
    setName(value) {
      name = value
    },
    hello() {
      console.log('Hello ' + name)
    }
  }
}

const o = foo()
o.hello()
o.setName('Trip')
o.hello()
console.log(name)

```

By creating a factory function, we are able to return an object that has methods, but those methods have access to basically some private variables that they can share, but nobody else can.

---

[index](/)
