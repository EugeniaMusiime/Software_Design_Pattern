/*The Object literal notation is basically an array of key:value pairs, with a colon separating the keys and values,
 and a comma after every key:value pair, except for the last, just like a regular array.*/

 var phone1 = {
    name: 'apple inc',
    nationality:'America',
    release: function() {
        console.log("Release type: " + this.name);
    }
}

var phone2 = {
    name: 'samsung',
    nationality:'China hehehe!',
    release: function() {
        console.log("Release type: " + this.name);
    }

}

console.log(phone1);
phone1.release()
console.log(phone2);
phone2.release()
