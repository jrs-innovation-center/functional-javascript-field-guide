# Composition

<a target="\_slides" href="https://slide-img-cmpqnfsjep.now.sh?img=http://restaurantnewsrelease.com/wp-content/uploads/2016/04/SUBWAY-Sandwich-Shops-to-Include-Calories-on-all-US-Menu-Boards-This-Month.jpg">show slide</a>

Having small little functions that do one thing really well and have well defined inputs and output, should sound familiar especially if you think of legos. It is very easy to take all different kinds of legos that all have the exact same locking mechanisms to create all kinds of things. That is a similar comparison to functional programming, have little functions that you may look at and say where on earth would I use this function? But they all have well defined inputs and output. So the can be joined together to create complex groupings of logic.

Lets look at a simple compose2 function.

``` js
let compose2 = function (a, b) {
  return function (v) {
    return a(b(v))
  }
}
```

This function takes two functions and returns a function that takes a single value, it will apply the value to the last function `b` then apply the result of the `b(v)` to the function `a` then return the result.

You may remember the two functions we talked about earlier. `isNil` and `not` these functions seem to be straight forward, what if we want to create a more declarative way to say `not(isNil(2))` like maybe `exists(2)`, this is where we can use compose to combine the `not and isNil` functions to create a whole new function.

``` js
const exists = compose2(not, isNil)
if (exists(2)) {
  console.log('It exists')
}

if (exists(null)) {
  console.log('It exists')
} else {
  console.log('It does not exist')
}
```

> By taking two functions that are unary we can combine them together to create one declarative function.

> What is a unary function? - It is a function that has one argument

``` js
// unary
function not (arg) {
  return !arg
}
```

Lets look at manual composition:

``` js
function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

console.log(
  add(1,
    subtract(7,
      add(1,2)
    )
  )
) // 5
```

That is a lot of code just to do

// 1 + (7 - (1 + 2))

This kind of compose is manual, we are inserting the functions into the function call directly so that the resulting value can be applied to the next function. It is important to note like with mathematical functions the parenthesis and inside out preference approach matters.

So when the code above is run, the add(1,2) gets executed first, then the subtract(7, 3) and then finally the add(1, 4).

We will talk more about composition in the future, but it is important to introduce the concept of composition because it is so valuable.

---

[index](/)
