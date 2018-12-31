var readline = require('readline-sync');

var firstPlayerKey = readline.question('Enter encrypt key of first player: ');
var secondPlayerKey = readline.question('Enter encrypt key of second player: ');
var throwValue = 0;

throwValue = Math.floor(Math.random() * 5) + 1;
var firstPlayerThrow = throwValue ^ firstPlayerKey;

throwValue = Math.floor(Math.random() * 5) + 1;
var secondPlayerThrow = throwValue ^ secondPlayerKey;

console.info('First player want throw: ', firstPlayerThrow);
console.info('Second player want throw: ', secondPlayerThrow);

console.info('\nPlayers exchanged keys...\n');

console.info(`firstPlayer ${firstPlayerThrow ^ firstPlayerKey}, firstPlayer ${secondPlayerThrow ^ secondPlayerKey}`);
