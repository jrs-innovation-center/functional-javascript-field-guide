## What is declarative programming?

It is the practice of telling the computer what you want the program to do versus how you want the program to do something.

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

---
[index](/)
