# JavaScript is an Async language

JavaScript is built up front as an asynchronous language, it is single threaded
but leverages an event loop to continue to process instructions while waiting for
responses back from servers or other long running processes

In this section, we will spend a little of time talking about the async patterns
in JavaScript.

## The Callback

The callback is one of the most robust and basic pattern to understand for JavaScript,
it requires discipline, but it will deliver a consistent and true experience.

> You can think of a callback to be very similar to that of an answering machine,
in the old days, you would make a call to a friend, if they were not available, you
could leave a message and they would use the number on the message to return your
call, this was often called a callback number. With JavaScript, we do not have a number
but we do have a function, so we leave the server a function that it may use to
call us back. This function has a special signature to keep things consistent. If the
server had an error, it would pass the error as the first argument to the callback,
and if the server did not have an error, it would pass null as the first argument
in the callback. The rest of the inputs would be the result if no error occured.

``` js
xhr('http://numbersapi.com/63', (err, response) => {
  console.log(err)
  console.log(response)
})
```

In this example, we are making a request to an api server, and we are giving the
function xhr a callback, so when the server responds, we get the information we are
asking for, or an error.

The callback pattern works really well, but it does get kind of cumbersome when
you have several callbacks that all depend on each other. In this case, you may want
to use some control flow helper libraries like `async`

## Promises

Promises are now part of the language and have a little bit more moving parts than
callbacks, and basically comes with a lot of control flow patterns built in.

The way a promise works, is that when you call the function that is doing the
async request, you will get back a promise object, this promise object exposes
a `then` function and a `catch` function. With these functions you can handle
the incoming call back in a success path or an error path. The nice thing about
promises, is that they are chainable, so you can chain them together to handle
a pipeline of formatting or to make multiple async calls back to back.

Promises also has a Promise.all feature that takes an array of promises and runs
them in parallel and returns the composite result when complete.

``` js

fetch('http://numbersapi.com/63')
  .then(res => res.text())
  .then(text => console.log(text))
  .catch(err => console.error(err))
```

Since it is a chainable api the result from the first `.then` is passed as the argument
on the next `.then`.

Since promises are in the language, they are much nicer to work with, especially if
libraries you work with use them, you do have to be very careful about error handling
with promises, they have been known to swallow errors, so you want to make sure you
are catching errors and handling appropriately.

In Node, there is a new `util` function called `promisify` that enables you to convert
callback api's to promise api's.

``` js
const promisify = require('util').promisify

const fs = require('fs')
const readFileP = promisify(fs.readFile)
readFileP('foo.txt').then(txt => console.log(txt))
```

## Async/Await

Async/Await is a new way of handling async processing, it builds off of the promise
and actually gives you a very synchronous style api, so you can do more top down
programming for your async code, than having to handle callback hell or promise then
chains.

``` js

async function x() {
  try {
    const quote = await fetch('http://numbersapi.com/63')
      .then(res => res.text())
    console.log(quote)
  } catch (err) {
    console.log(err)
  }
}

x()

```

Once the asynchronous process is done it returns the value to the quote variable, this makes it
much easier to read code and see what the flow of the function is.

## More

There are more async patterns, like generators and observables, but I would encourage
you to focus on these three patterns first, as you are most likely to see these patterns
in the field and the others are specific for a particular problem or not used in the
main stream yet.

---

[index](/)
