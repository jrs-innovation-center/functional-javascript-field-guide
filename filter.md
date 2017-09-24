# Filter

<a target="\_slides" href="https://slide-img-cmpqnfsjep.now.sh?img=https://www.questionpro.com/blog/wp-content/uploads/2016/03/bigstock-data-filter-103963118.jpg">show slide</a>

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

[Visual Walkthrough](https://goo.gl/kDCTGe)

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
const partial2 = fn => arg1 => (...rest) =>
  fn.apply(null, [arg1, ...rest])

const filterPartial = partial(filter)
const filterIsEven = filterPartial(isEven)
console.log(filterIsEven(nums))
```

Lets filter some strings:

using the npm module 'buzzwords' lets filter all the buzzwords that contain cloud.

``` js
const buzzwords = await System.import('buzzwords/index.json')
results = buzzwords.filter(
  v => v.indexOf('cloud') !== -1
)
```

We can fork this code pen and use it as a sandbox.

[https://codepen.io/twilson63/pen/jGMmmx?editors=0010](https://codepen.io/twilson63/pen/jGMmmx?editors=0010)

Now lets create three separate filters for three separate groups of letters.

Lets filter for the words 'cloud', 'html', 'data' of the buzzwords data set.

<details>
 <summary>Answer</summary>

```js
const buzzwords = await System.import('buzzwords/index.json')
const contains = (w, v) => v.indexOf(w) !== -1
results = buzzwords.filter(
  v => contains('cloud', v) || contains('html', v) || contains('data', v)
)
```
</details>

We could also try an `adjectives` module

Lets filter all the adjectives that have a `-` this time, try using the partial function to partially apply the predicate.

<details>
  <summary>Answer</summary>

  ``` js
  const adjectives = await System.import('adjectives')
  const partial2 = fn => arg1 => (...rest) => fn.apply(null, [arg1, ...rest])
  const contains = partial2((w, v) => v.indexOf(w) !== -1)

  hasDash = contains('-')
  results = adjectives.filter(hasDash)
  ```
</details>

Try to filter all of the adjectives that contain 'ly'

<details>
  <summary>Answer</summary>

  ``` js
  const adjectives = await System.import('adjectives')
  const partial2 = fn => arg1 => (...rest) => fn.apply(null, [arg1, ...rest])
  const contains = partial2((w, v) => v.indexOf(w) !== -1)

  hasDash = contains('ly')
  results = adjectives.filter(hasDash)
  ```
</details>


lets filter some card objects.

You may remember objects contain a set of keys and values, when we get the
list of cards, like we check if a string contains some characters, we can
check if a card object has an attribute or key of a kind of value.

Like our contains we can create two simple methods that we want to combine.

``` js
const equals = (a,b) => a === b
const prop = (key, obj) => obj[key]
```

``` js
const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
const cards = await fetch(url).then(res => res.json()).then(res => res.cards)

results = cards.filter(card => equals('HEARTS', prop('suit', card)))

results = `
<pre>
  ${JSON.stringify(results, null, 2)}
</pre>
`
```

[https://codepen.io/twilson63/pen/eGdRWp?editors=0011](https://codepen.io/twilson63/pen/eGdRWp?editors=0011)

### Exercises

* Find all of the cards of this suit `CLUBS`

<details>
  <summary>Answer</summary>

  ``` js
  const equals = (a,b) => a === b
  const prop = (key, obj) => obj[key]

  const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
  const cards = await fetch(url).then(res => res.json()).then(res => res.cards)

  results = cards.filter(card => equals('CLUBS', prop('suit', card)))

  results = `
  <pre>
    ${JSON.stringify(results, null, 2)}
  </pre>
  `
  ```
</details>

* Find all of the cards that have this value?

* Find all of the face cards for a given suite.

lets filter some movie objects

---

[index](/)
