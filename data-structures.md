# Data Structures

So there are all kinds of data structures in programming, but 80% of the time you will only need to be concerned with two types of complex data structures:

* Arrays - (Lists, Collections)
* Objects - (aka Maps, Dictionaries)

You can actually think of your program in three distinct parts:

* Your State or Data - usually in the above data structures
* Your Functionality or Rules - this is your business logic or machine logic
* Side Effects, the external devices and dependencies that you interact with, either the UX Presentation System or a Database System or other systems via some interface.

Thinking of your data flowing through a set of rules via some input side effect to resolve to some output side effect can really help you get a clearer idea of what your app is doing.

Separating these concerns can make your applications modular, flexible and scalable.

The Functional Programming mindset gets your mind thinking into solving problems in a clean and clear way. Learning a set of concepts quickly become solid principals and core modules.

## Array

The array is a simple list of values, the values do not have to be unique, they do not have to be in a particular order, they do not have to be of the same type, an array is a list of things.

``` js
let numbs = [1,2,3,4,5,6,7,8,9,10]
let strings = ['bass', 'banjo', 'violen', 'harp', 'Fiddle', 'Guitar']
let objects = [{name: 'Larry'}, {name: 'Curley'}, {name: 'Moe'}]
let arrays = [['a', 1], ['b', 2], ['c', 3]]
let mixed = [1, 'bass', {name: 'Larry'}]
let functions = [add, subtract, not, isNil]
```

I like to think of an array is a box of stuff, there is no defined order or enforced type of values, it is a box that you can put stuff in and pass around. Now it makes sense that these arrays hold similar things, having it be just a grab bag of different values can lead to all kinds of problems, but in some cases it does make sense.

The most import thing to think about with arrays is memory and storage is cheap now, so it is not a problem to create new arrays by transforming existing arrays instead of mutating arrays. We will learn some tools like `map`, `filter` and `reduce` that contain powerful patterns for managing arrays. You simply don't need to modify arrays, you can treat them as immutable.

With JavaScript, unless you freeze your arrays, you will always be able to mutate, but we are going to create some muscle memory to steer clear of those bugs and pitfalls.

Lets create an array

``` js
const ten = Array.of(1,2,3,4,5,6,7,8,9,10)
// or
const five = [1,2,3,4,5]
```

Lets double the numbers:

``` js
const results = ten.map(v => v * 2)
```

Using map, we can transform a list of values to a list of new values, these values will always return a new list.

We can also transform strings

``` js
const results = ten.map(v => converter.toWords(v))
```

## Objects

Objects are collections that have keys/labels and values, for each key there is a value, objects must have unique keys, an object can not have two different keys of the same name. The key type is of type string or symbol. and the value can be any value type, boolean, number, string, array, object or function.

Here is an example of an object:

``` js
const movie = {
  Title: 'Star Wars: Episode IV - A New Hope',
  Year: '1977',
  Rated: 'PG',
  Released: '25 May 1977',
  Runtime: '121 min',
  Genre: 'Action, Adventure, Fantasy',
  Director: 'George Lucas',
  Writer: 'George Lucas',
  Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
  Plot: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.',
  Language: 'English',
  Country: 'USA',
  Awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
  Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTUwNTdiMzMtNThmNS00ODUzLThlMDMtMTM5Y2JkNWJjOGQ2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
  Ratings:
   [ { Source: 'Internet Movie Database', Value: '8.7/10' },
     { Source: 'Rotten Tomatoes', Value: '93%' },
     { Source: 'Metacritic', Value: '92/100' } ],
  Metascore: '92',
  imdbRating: '8.7',
  imdbVotes: '993,937',
  imdbID: 'tt0076759',
  Type: 'movie',
  DVD: '21 Sep 2004',
  BoxOffice: 'N/A',
  Production: '20th Century Fox',
  Website: 'http://www.starwars.com/episode-iv/',
  Response: 'True' }

```

This is a large object that has all kinds of values. With objects you can reference a key using two kinds of notations, square bracket notation or dot notation.

``` js
const title = movie['Title']
// or
const dvd = movie.DVD
```

Each notation can be valuable at different times, or a more functional way to reference a value, is using the `prop` function.

``` js
const title = prop('Title', movie)
```

You will see both arrays and objects being used together as a mega data structure:

Here are 4 cards!

``` js
const cards = [ { value: '4',
    image: 'http://deckofcardsapi.com/static/img/4D.png',
    code: '4D',
    suit: 'DIAMONDS',
    images:
     { svg: 'http://deckofcardsapi.com/static/img/4D.svg',
       png: 'http://deckofcardsapi.com/static/img/4D.png' } },
  { value: '8',
    image: 'http://deckofcardsapi.com/static/img/8H.png',
    code: '8H',
    suit: 'HEARTS',
    images:
     { svg: 'http://deckofcardsapi.com/static/img/8H.svg',
       png: 'http://deckofcardsapi.com/static/img/8H.png' } },
  { value: 'KING',
    image: 'http://deckofcardsapi.com/static/img/KS.png',
    code: 'KS',
    suit: 'SPADES',
    images:
     { svg: 'http://deckofcardsapi.com/static/img/KS.svg',
       png: 'http://deckofcardsapi.com/static/img/KS.png' } },
  { value: '7',
    image: 'http://deckofcardsapi.com/static/img/7S.png',
    code: '7S',
    suit: 'SPADES',
    images:
     { svg: 'http://deckofcardsapi.com/static/img/7S.svg',
       png: 'http://deckofcardsapi.com/static/img/7S.png' } } ]
```

---

[index](/)
