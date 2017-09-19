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
