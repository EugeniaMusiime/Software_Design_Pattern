/* A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
The object constructor function acts like the blueprint for creating many objects of the same type*/

class Person {
    constructor(first, last, eyecolor){
        this.firstName  = first,
        this.lastName  = last,
        this.eyeColor = eyecolor,
        this.nationality = "Runyoro"
    }
}
const eugenia = new Person ( 'Eugenia', 'Musiimemaria', 'dark choclate')
const winnie = new Person ( 'Winnie', 'Nassozi', 'caramel')

console.log(eugenia);
console.log(winnie);