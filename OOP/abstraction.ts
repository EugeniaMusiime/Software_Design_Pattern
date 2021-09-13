/*
    abstraction
    1. Data Abstraction
    2. Abstract class
    3. Abstract method
        - It must be declared within an abstract class
        - It must not have it;s definition in the abstract class
        - Each of the sub classes (Concrete class) must have a definition for an abstract method

    4. Interface
*/

//We can ot instantiate this class because it is abstract
abstract class Car {
    name: string;
    color: string;

    //Abstract class
    abstract start();

    move() {
        console.log("Generic")
    }
}

//We can instantiate this class because it is a concrete class
class ManualCar extends Car {
    start() {
        console.log("Manual")
    }
}

//We can instantiate this class because it is a concrete class(It extends the abstract class)
class AutomaticCar extends Car {
    start() {
        console.log("Automatic")
    }
}

let car:Car = new AutomaticCar()
car.start();
car = new ManualCar()
car.start();

interface SleepingOrganism{
    sleep(),
}

interface LivingThing{
    locomote():void,
    live(),
    feed(food:object),
    sleep(),
    die(),
    talk(),
    produce()

}

class Person implements LivingThing{
    locomote(){
        //return void;
    }
    live(){
        //rrr
    }
    feed(food:object){
        //jjjj
    }
    sleep(){
        //jjjjj
    }
    die(){
        //kkkkkkk
    }
    talk(){
        //jjjj
    }
    produce(){
        //jjjjjj
    }
}