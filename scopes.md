# Scopes

There are two types of scopes in JavaScript:

* Lexical
* Block

## Lexical

Lexical Scope is managed by functions, so a new layer of scope is created every time there is a new function.

``` js
var foo = 'beep'

function bar () {
  var baz = 'boop'
  // baz is only available inside bar
  // foo is also available inside bar
  // beep is available in bar
  if (true) {
    var beep = 'foo'
  }
  // lexical scope does not respect block scope
  // an if statement is a block
  for (var i = 0; i < 10; i++) {
    var boop = 'baz'
    // in lexical scope the for block does not
    // create a new lexical scope.
  }
}

// baz is not available outside
```


In lexical scope, each bucket of variables are passed down to any
function referenced inside the file.

## Block Scope

Is pretty simple, by using the let variable declaration, you can create private scope in any block.

``` js
let foo = 'bar'

if (true) {
  let bar = 'foo'
}
// cant access bar out here...
```
---

[index](/)
