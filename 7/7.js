var readline = require('readline-sync');
var sha256 = require('js-sha256');

var productName = readline.question("Enter a product's name: ");
var salt = readline.question("Enter a salt: ");
var hashDB = [];

createProductHash(salt, productName);

console.info(`Encrypted with md5 algorithm: ${hashDB.join('; ')}`)

function createProductHash(salt, name) {
    var hash = sha256.hmac(salt || '', name);
   
    saveHash(hash)
}

function saveHash(hash) {
    hashDB.push(hash);

    return hashDB;
}
