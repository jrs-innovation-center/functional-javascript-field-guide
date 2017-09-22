# Map

Map is a way to take an array or list of values and transform it
into another list of values. This transformation process is very powerful,
you can transform a list of numbers by adding 10 to each number. You can convert
a list of strings to uppercase, or capitalize a every word, replace every adjective
with the word 'butt'. You can transform objects into HTML.

Map will always return the same amount of values through a unary function.

``` js
function double (n) {
  return n * 2
}

console.log(
  [1,2,3,4,5].map(double)
)
```

Map is your safe replacement for a loop, by using map, you get a lot of
headache's resolved for free.

For loops are cumbersome and hard to debug, using a map, will make your code
readable and testable.

The map code, takes a function called a `mapper` and a list.

``` js
function map (fn, list) {
  let results = []
  for (var i = 0; i < list.length; i++) {
    results.push(fn(list[i]))
  }
  return results
}
```

* Lets list all of the colors from the colors module.
* Lets map a list of colors to some html
* Lets map a deck of cards to html

Lets use Map and Filter together

What if we used the compose function to create a filter then map function, but
wait our compose2 function only accepts unary functions. Maybe we can use our partial
function to convert both the filter and map into unary functions, then we can compose
our data like a pipeline.

Lets Filter all the colors that contain 'r' and map them into a unorded list.

Lets filter all of the cards that have the value 3 and map them into a list of html
cards.


Lets use map to render a grid,
Then lets create a paintCell Function that will
modify the color of a grid cell and then re-render the grid.

Lets fill in the blanks to get this Game Of Life demo working.

---

[index](/)
