var readline = require('readline-sync');

var alicePassword = readline.question("Enter Alice's password: ");
var message = readline.question('Input a message which will be send: ');
var initialMessage = message;

message = alicePassword ^ message;

console.info(`E(a, M): ${message}\n`);

var bobPassword = readline.question("Enter Bob's password: ");
message = bobPassword ^ message;

console.info(`E(b, E(a, M)): ${message}\n`)

message = alicePassword ^ message;

console.info(`D(a, E(b, E(a, M))): ${message}\n`)

decryptedMessage = bobPassword ^ message;

console.info(`D(b, D(a, E(b, E(a, M)))): ${decryptedMessage}\n`)

console.info(`So, now we can compare decryptedMessage = ${decryptedMessage} and initialMessage = ${initialMessage}`)
