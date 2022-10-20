const name = "Susan";
const height = 28;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
console.log(message);

// Follow along with the examples here
function doNothing() {}

function sayHello() {
  console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloToLiz() {
  console.log("Hello, Liz!");
}
sayHelloToLiz();

  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToSamip();

 sayHelloToGuadalupe();
  sayHelloToLiz();
  sayHelloToSamip();

  function doSomething(thing) {
    console.log(thing);
  }

doSomething("thing"); // passing the argument 'anything' into our function

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}
  
sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
say("Julio", "Hello");
console.log(say("Hello", "Liz"));

function add(x, y) {
  x + y;
}
console.log(add(1, 2));

function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}

console.log(say("Howdy", "partner"));

function akeemify(name){
  console.log();
  return `${name}Keem`;
}

console.log(akeemify("kyle"));

