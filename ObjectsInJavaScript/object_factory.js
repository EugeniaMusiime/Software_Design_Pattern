/*The Factory Function is similar to constructor functions/class functions, but instead of using new to create an object, factory functions simply creates an object and returns it.
A factory function is any function which is not a class or constructor that returns a (presumably new) object. 
*/

// Function creating new objects 
    // without use of 'new' keyword
    function createRobot(name) {
        return {
            name: name,
            talk: function () {
                console.log('My name is ' 
                + name + ', the robot.');
            }
        };
    }
  
    //Create a robot with name Chitti
    const robo1 = createRobot('Chitti');
  
    robo1.talk();
  
  
    // Create a robot with name Chitti 2.O Upgraded
    const robo2 = createRobot('Chitti 2.O Upgraded');
  
    robo2.talk();

    // Factory Function creating person
    var Person = function (name, age) {
  
        // creating person object
        var person = {};
  
        // parameters as keys to this object  
        person.name = name;
        person.age = age;
  
        // function to greet
        person.greeting = function () {
            return (
                'Hello I am ' + person.name 
                    + '. I am ' + person.age 
                    + ' years old. '
            );
        };
        return person;
    };
  
    var person1 = Person('Abhishek', 20);
    console.log(person1.greeting());
  
    var person2 = Person('Raj', 25);
    console.log(person2.greeting());