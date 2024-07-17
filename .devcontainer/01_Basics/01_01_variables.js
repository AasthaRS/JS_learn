const accountId = 132842
let accountEmail = "aastha@gmail.com"
var accountPassword = "12345678"
accountCity = "Sambhal"
let accountState;

//accountId = 2;    // const cannot be changed
accountEmail = "aastha@email.com"
accountPassword = "11112222"
accountCity = "Noida"

console.log(accountId)

/*
Prefer not to use 'var'
as it creates issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])