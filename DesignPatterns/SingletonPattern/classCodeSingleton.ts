class Logger{
    private static loggedingUser = null;
    private static username:string;
    private static password:string;

    private constructor(usernameArg:string, passwordArg:string){
        Logger.username = usernameArg;
        Logger.password = passwordArg;
    }


    static login(usernameArg:string, passwordArg:string){
        if(Logger.loggedingUser != null){
            return null
        }
        Logger.loggedingUser = new Logger(usernameArg, passwordArg)
    }

    static logout(){
        Logger.loggedingUser = null
    }


    static getLoggedinUser(){
        return Logger.username;
    }
}


let mozillaInstance = Logger

let user3 = mozillaInstance.login("djcollins", "spinmaster");
console.log(mozillaInstance.getLoggedinUser());

mozillaInstance.logout()
let user4 = mozillaInstance.login("Dorothy", "dorothy");
console.log(mozillaInstance.getLoggedinUser());

mozillaInstance.logout()
let user1 = mozillaInstance.login("djmark", "spindoctor");
console.log(mozillaInstance.getLoggedinUser());

mozillaInstance.logout()
let user2 = mozillaInstance.login("pricilla", "pricilla");
console.log(mozillaInstance.getLoggedinUser());

