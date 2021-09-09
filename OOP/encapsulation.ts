class Person {
    //Data
    public username: string;
    protected firstname: string;
    protected lastname: string;
    private password: string;

    //Methods
    constructor(username:string, firstname:string, lastname:string) {
        this.username = username
        this.firstname = firstname
        this.lastname = lastname
    }

    talk() {
        console.log('Hello world, my name is ${this.firstname} ${this.lastname}');
        
    }

    setPassword(oldPassword, newPassword){
        if(oldPassword===this.password){
            this.password = newPassword
        }
        throw "Old passwrod doesn't match the current password"
    }
    
}

let eugenia = new Person('@eugenia', 'Eugenia', 'Musiimemaria')
// eugenia.setData('@eugenia', 'Eugenia', 'Musiimemaria')
eugenia.talk()