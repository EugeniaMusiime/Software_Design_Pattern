var Logger = /** @class */ (function () {
    function Logger(usernameArg, passwordArg) {
        Logger.username = usernameArg;
        Logger.password = passwordArg;
    }
    Logger.login = function (usernameArg, passwordArg) {
        if (Logger.loggedingUser != null) {
            return null;
        }
        Logger.loggedingUser = new Logger(usernameArg, passwordArg);
    };
    Logger.logout = function () {
        Logger.loggedingUser = null;
    };
    Logger.getLoggedinUser = function () {
        return Logger.username;
    };
    Logger.loggedingUser = null;
    return Logger;
}());
var mozillaInstance = Logger;
var user3 = mozillaInstance.login("djcollins", "spinmaster");
console.log(mozillaInstance.getLoggedinUser());
mozillaInstance.logout();
var user4 = mozillaInstance.login("Dorothy", "dorothy");
console.log(mozillaInstance.getLoggedinUser());
mozillaInstance.logout();
var user1 = mozillaInstance.login("djmark", "spindoctor");
console.log(mozillaInstance.getLoggedinUser());
mozillaInstance.logout();
var user2 = mozillaInstance.login("pricilla", "pricilla");
console.log(mozillaInstance.getLoggedinUser());
