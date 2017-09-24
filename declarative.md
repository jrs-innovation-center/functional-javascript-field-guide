## What is declarative programming?

<a target="\_slides" href="https://slide-img-cmpqnfsjep.now.sh?img=http://image.slidesharecdn.com/mattersofstate-151205082114-lva1-app6892/95/matters-of-state-23-638.jpg?cb=1449303953">Show Slide</a>

Declarative programming is the practice of telling the computer what you want the program to do versus how you want the program to do something.

HTML is a good example of declarative programming, instead of instructing the browser how to draw every aspect of the user interface we tell the browser what we want and it knows how to render from the html text to a presentation.

``` html
<img src="https//www.fillmurray.com/300/300" />
```

![image](https://www.fillmurray.com/300/300)

In functional programming, we can use a declarative instruction like `map` instead of writing a for loop.

``` js
let data = [1,2,3,4,5]
let results = []
for (let i = 0; i < data.length; i++) {
  results.push(data[i] + 10)
}
console.log(results)
```

``` js
let data = [1,2,3,4,5]    
const results = map(add10, data)
console.log(results)
```

Declarative programming is the process of explaining what we want to happen versus how it should happen, the more we are explaining what, the less likely we are to make small little mistakes for very routine processes.

For example, what if you were a great chef, but in order to communicate your recipes to cooks, you had to explain some common things, like how to boil water. Not only would it add a ton of overhead to all of your wonderful recipes, but there is more likely risk of errors in the instruction process.

It is important to make routine steps abstracted to a common word that can be shared knowledge amongst the team, this reduces the surface area of what each developer needs to process in order to read the code. Imagine if there was a vocabulary that was universal to programming languages that communicated these patterns and ideas. By separating the terminology from the implementation details, you are able to improve/optimize the internals while collaboratively communicating at a higher level.

These are the ideas behind Function Programming, React, Redux, RESTful APIs, JSON, HTML, CSS, and other abstractions, they reduce the surface area and allow for behind the curtain modifications while each developer understands the intent of the application.

Going back to the `map` example, once you get the definition of what it is doing, then using that terminology is something all developers on the team can converse in sync about.

`map` - A map takes any type with a map function and invokes it with the input of a pure unary mapper function (a function that takes one input as the value and returns an output). It is like a transformer! It is often characterized as transform operation.

We use map to transform a list or collection of values from one type or value to another. The map will always return a new instance of the collection or functor.

By taking the time to learn all of these core concepts or lego pieces you will be given a tool kit that empowers you to solve problems at a higher level, therefore write less code and it will be easier to read and collaborate with other developers.



---
[index](/)
