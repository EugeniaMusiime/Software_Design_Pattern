/*  Syntactic sugar is a term to describe a feature in a language that lets you do something more easily/with less typing involved, but doesn’t really add any new functionality to the language that it didn’t already have.
 in JavaScript, because we could actually declare the same without class keyword at all:*/


//code without using the class keyword
function Boy(name) {
    this.name = name;
}
  
Boy.prototype.sayHi = function() {
    console.log("I am " + this.name + ", Hi!");
};
  
let boy = new Boy("John");
boy.sayHi();

//using the class keyword
class Girl {
    constructor(name){
    this.name = name
    }
}
const girl = new Girl ( 'Alicia')

console.log(girl);


//code without using the class keyword
function Animal(type) {
    this.type = type;
}

Animal.prototype.identify = function() {
    console.log(this.type);
}

var cat = new Animal('Cat');
cat.identify();

//using the class keyword
class Animal1 {
    constructor(type){
    this.type = type
    }
}
const dog = new Animal ('Dog')

console.log(dog);