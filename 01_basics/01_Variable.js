const accountId = 134567
let accountEmail = "vivek@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

// accountId = 2 // not allowed: can't assign any value to const variable

accountEmail = "biswal@gmial.com"
accountPassword = "23456"
accountCity = "Bangalore"

/*
Perfer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId ,accountEmail, accountPassword, accountCity])

