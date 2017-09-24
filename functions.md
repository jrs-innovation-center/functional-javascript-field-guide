## Understanding Functions

<a target="\_slides" href="https://slide-img-cmpqnfsjep.now.sh?img=http://codesupport.info/wp-content/uploads/2013/03/javascript_function_05.png">Show Slide</a>

The function keyword in javascript is used to define really three types of executable routines.

1. procedure
2. method
3. function

A procedure is a collection of statements with a name, when called the statements run. A procedure can take inputs known as arguments but does not have to return a value.

``` js
function iAmAProcedure (x) {
  console.log(x)
}
```

A method is a collection of statements inside a class or object, and can take inputs but does not have to return any value.

``` js
class Foo () {
  iAmAMethod (x) {
    console.log(x)
  }
}
```

A function meets all attributes of a procedure, except it must return a result.

``` js
function iAmAFunction (x) {
  return x
}
```

A function can be defined several different ways:

``` js
function echo (x) {
  return x
}

const echo = function (x) {
  return x
}

const echo = (x) => x
```

Each of these function definitions do the same thing, the take a value and returns the value.

### Pure Functions

<a target="\_slides" href="https://slide-img-cmpqnfsjep.now.sh?img=http://1.bp.blogspot.com/-TEb7l6z6pMc/Ti4EB5HIFrI/AAAAAAAAFTQ/1PGph9H_WFA/s1600/zen+garden.jpg">Show Slide</a>

A `pure function` is a function with the same input, will always return the same output. Pure functions are very important in functional program, because they keep things provable and developers can trust the outcome of the function, which makes things very testable. Using pure functions as much as possible will make your applications more reliable. Every time we call echo with an input, we will always get the same result back.

``` js
let result = echo('BeepBoop')
console.log(result) // BeepBoop
```

No matter how many times we call this function with the same input, it will always return the same result.

This is a pure function. There is also another part of the definition of a pure function is that it contains no `side effects`.  This means, it does not change the outside environment and most often is not aware of the outside environment unless it is provided via its arguments or inputs.

> Pure functions enable functions to be used like lego blocks and dynamically assembled to create complex patterns and rules

### Utility Functions

Lets look at some pretty straight forward functions, these functions will be some functions we will start to use in our toolkit.

#### isNil

``` js
function isNil (value) {
  return value == null // or undefined
}
```

This simple function saves a lot of redundant checks of both `undefined` and `null`, without having to add coercion in every code base.

Lets test it out:

``` js
isNil(null) // true
isNil(undefined) // true
isNil(false) // false
isNil(true) // false
isNil('Beep') // false
isNil(21) // false
isNil([]) // false
isNil({}) // false
```

Now we have a great utility function that can save us from a potential oversight when checking if something exists.

> It is very easy to create bugs with conditionals and checking if a value exists in javascript, mainly because there are two values that can define or not define existence `undefined` and `null`

By adding this declarative abstraction in your tool bag, you can be confident you will not fall into this trap.

---

``` js
if (!foo) {
  // do Stuff
}
```

#### not

not is another very simple function that can simply make our code readable:

What reads better to you?

``` js
if (!foo) {
  // do stuff
}
```

or

``` js
if (not(isNil(foo))) {

}
```

We can create a very simple and useful utility function called not.

``` js
function not (v) {
  return !v
}  
```

> `not` can be used in several situations where you need to negate a value.

When we call a function inside another function we are composing functions, or connecting functions together to get a more complex function. The nice thing about this composition, the not function does not have to know anything about the isNil function and vice versa, they work just fine independently and also work great together. This is a good example of loose coupling. When functions or objects or modules can be composed together without having to know about each other.

---

[index](/)
