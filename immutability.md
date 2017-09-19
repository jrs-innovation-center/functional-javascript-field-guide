## Immutability

In order to understand immutability, we must first understand mutation.  Basically, in the early days, computers were constrained by memory and storage so it was very expensive and valuable, so languages came up with a way to mutate variables to share the same memory space. For example, both arrays and objects are mutable, which means the state of the structures can change, while at first this seems to be a feature, it is the second most cause for creating bugs.

> (No Scientific study was done to come up with that conclusion and it could be totally false.)

> What is the first? (Assignment)

While, that ranking may not be accurate, have mutable state has been proven to result in very hard to find bugs in large programs. State is a term used to talk about the data of an application at a current point in time.

Numbers, Boolean, Strings, are all immutable, they can not change, you can point from one number to another or point from one string to another, but the values themselves can not change.

With arrays and objects, we must have discipline to treat them as immutable structures or use user land defined libraries that give us immutable structures. Either way programming with immutability as a practice makes your applications very easy to follow and complete.

There is a method on the object called `freeze` which will freeze the shallow scope of values and methods of an object. Which works great for simple structures, but it is no substitute immutable data structure.

Using functional libraries will help you treat objects and arrays as immutable values as well.

Lastly, a state management library provides great support for protecting your data from mutation, it is called `Redux`, we will learn how to leverage Redux and Ramda to take advantage of immutable data.

Here is an example of using freeze:

``` js
let stooges = ['larry', 'curley', 'moe']
stooges = Object.freeze(stooges)
stooges.push('shemp')
```

---

[index](/)
