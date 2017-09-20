# Composition Take 2

Earlier we when through a little about composition using the manual approach.

``` js
add(
  4,
  subtract(4, 2)
)
```

But with a new compose function, and our new curry, we can write this in a cleaner
or point free way.

``` js
const add = curry((a,b) => a + b)
const substract = curry((a,b) => a - b)

compose(
  add(4),
  subtract(4)
)(2)
```

By using curry to make the inputs drip into the add and subtract, we are able to reduce
the points or inputs to unary functions and create a pipeline to perform in a right to left
manner.  Using `reduce` it is very easy to create this compose method.

``` js
const invoke = (v, fn) => fn(v)
const compose = (...fns) => v => reduce(invoke, v, fns.reverse())
```

In some cases, it may make more sense to invoke functions from left to right.

``` js
const pipe = (...fns) => v => reduce(invoke, v, fns)

pipe(
  subtract(4),
  add(5)
)(2)
```

Either way, the nice thing about compose is that you can take any unary function
and combine with other unary functions to create complex machines or operations nicely
bundled and separated in a declarative nature.

For example, lets say we need to display a list of buzzwords on the screen, but we want
to exclude any buzzword that contains `cloud` because that is old school. When we write
them to screen, we want to display them as a simple html list.

Hopefully, you are thinking, take a list or array of strings and filter that down into
strings that do not contain the word cloud. What if we could create a function that
check each string and see if it contained the word cloud.

``` js
const doesNotContainCloud = s => s.indexOf('cloud') === -1
```

Now we can use the filter method to take a list of strings and remove all words with cloud.

``` js
const bw = filter(doesNotContainCloud, buzzwords)
```

And we need to turn the strings into html line items.

``` js
const li = s => `<li>${s}</li>`
```

Finally we can map over the filtered list using the map function and transform them
into a list of line items

``` js
const lineItems = map(li, bw)
```

Now that we have broken all of this into small little pieces, we can use compose
tighten it up.

``` js
// pure functions
const doesNotContainCloud = s => s.indexOf('cloud') === -1
const lineItems = map(li, bw)

const lineItems = compose(
  map(li),
  filter(doesNotContainCloud)
)(buzzwords)

```

Using compose, we are able to reduce a couple of assignment statements, assignment
statements are evil, and lead to bugs, the less you have the easier it will be to manage
your code.


---

[index](/)
