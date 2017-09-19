# Filter

Talking about Data Structures is no fun if we are not doing operations on them.

Filter is a very common immutable data structure operator. If you have a list of values and you want to get a new list of more specific values, using a filter is your operator.

We can use the built in filter method of the array, but it can be hard to compose. It is a chainable api, but we would like teach a composable api. Both are valid, but a composable api can give you more flexibility.

Here is the array method version:

``` js
const nums = [1,2,3,4,5,6,7,8,9,10]

function isOdd (v) {
  return v % 2 === 1
}

const oddOnes = nums.filter(isOdd)
console.log(oddOnes)
```

What about even numbers?

``` js
const isEven = compose2(not, isOdd)
const evenSteven = nums.filter(isEven)
console.log(evenSteven)
```

Lets write our own filter function!

> Because, we need the practice writing functions, and it may help provide insight into what is happening!

``` js
function filter(fn, list) {
  let results = []
  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      results.push(list[i])
    }
  }
  return results
}
```

The filter function takes two inputs a predicate function and a list of items.

> A predicate function is a function that takes a single value and returns a true or false.

Lets replace our Array.filter methods with our new filter function.

``` js
console.log(filter(isOdd, nums))
console.log(filter(isEven, nums))
```

Now you may be thinking the chaining api is more intuitive, and I would agree with this example, but I hope to show some future examples where it will make more sense to use the more functional approach.

One thing to talk about is another idea called partial application, this is where we can partially apply some arguments and then apply the rest when we are ready.

``` js
function partial (fn) {
  return function (arg1) {
    return function (...rest) {
      return fn.apply(null, [arg1, ...rest])
    }
  }
}
const filterPartial = partial(filter)
const filterIsOdd = filterPartial(isOdd)
console.log(filterIsOdd(nums))
```

So that may look pretty confusing, but lets try it with the arrow syntax:

``` js
const partial2 = fn =>
  arg1 =>
    (...rest) =>
      fn.apply(null, [arg1, ...rest])

const filterPartial = partial(filter)
const filterIsEven = filterPartial(isEven)
console.log(filterIsEven(nums))
```

Lets filter some strings:

using the npm module 'buzzwords' lets filter all the buzzwords that contain this group of three letters.

Now lets create three separate filters for three separate groups of letters.

We could also try `adjectives`

https://github.com/rgbkrk/adjectives

lets filter some card objects.

* Find all of the cards of this suite ?
* Find all of the cards that have this value?

* Find all of the face cards for a given suite.

lets filter some movie objects
