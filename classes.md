# Classes and this

JavaScript is an Object Oriented Language, it is just a little different than other object oriented languages. Instead of using classical object inheritance like other languages, it uses prototypical inheritance. If you plan to use JavaScript as a Object Oriented Language, it is important to know the differences here. Basically, each object keeps a property on it called the prototype this object contains properties that are passed down from the parent object. There is no such thing as private vs public properties and methods with javascript prototypes.

Here is an example of creating a JavaScript class:

``` js

class Foo {
  constructor () {
    super() // calls the inherited constructor
    // constructor gets called when the object is created
    this.bar = 'baz'
  },
  method1() {
    // I am a method on this object
    // when I use the this key word in this method
    // it references the current instance
    console.log(this.bar)
  }
}

// create an instance of Foo

const foo = new Foo()
// using the new keyword to create an instance of the Foo Class
foo.method1()

```

You can also inherit from another defined class, only follow this pattern if you know what you are doing.

``` js
class App extends React.Component {
  render () {
    // I can access this.state and this.props
    // which are prototype properties inherited from React.Component
    return <h1>Hello World</h1>
  }
}
```

---

[index](/)
