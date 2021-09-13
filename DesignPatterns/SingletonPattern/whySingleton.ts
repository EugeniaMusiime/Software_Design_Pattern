// /*
//     Logged in user
// */

// class Logger{
//     private static loggedinUser = null;
//     private static username: string;
//     private static password: string;

//     private constructor(usernameArg:string, passwordArg:string){
//         Logger.username = usernameArg;
//         Logger.password = passwordArg;
//     }

//     static login(usernameArg:string, passwordArg:string){
//         if(Logger.loggedinUser != null){
//             return null
//         }
//         Logger.loggedinUser = new Logger(usernameArg, passwordArg)
//     }

//     static logout(){
//         Logger.loggedinUser = null
//     }
    
//     static getLoggedinUser(){
//         return Logger.username;
//     }
// }

// let mozillaInstance = Logger
// let user1 = mozillaInstance.login('Eugenia', 'eugenia')
// console.log(mozillaInstance.getLoggedinUser());

// mozillaInstance.logout()
// let user2 = mozillaInstance.login('Timothy', 'timothy')
// console.log(mozillaInstance.getLoggedinUser());

// mozillaInstance.logout()
// let user3 = mozillaInstance.login('Collines', 'collo')
// console.log(mozillaInstance.getLoggedinUser());

// mozillaInstance.logout()
// let user4 = mozillaInstance.login('Winnie', 'kyabubu')
// console.log(mozillaInstance.getLoggedinUser());