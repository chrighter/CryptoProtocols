var readline = require('readline-sync');

var N = readline.question('Count of Alice-generated messages:' );
var messages = createMessages();
var message =  messages[Math.floor(Math.random() * messages.length)];
var bobTime = +new Date;
var hackedMessage = hack(message)

console.info('');
console.info('Time spent by Bob: ',  +new Date - bobTime);

var i = hackedMessage.split(',')[1];
var evaTime = +new Date;

console.info('');

find(messages, i, evaTime)

function createMessages() {
    var messages = [];

    for (var i = 1; i < N + 1; i++) {
        messages.push(encrypt(i, `secret${i},${i}`));
    }

    return messages;
}

function encrypt(key, m){
    var encrypted = '';

    for (var i = 0; i < m.length; i += 1) {
        var ord = m.charCodeAt(i);

        encrypted += String.fromCharCode(ord + key);
    }

    return encrypted;
}

function hack(c) {
    for (var i = 1; i < N + 1; i += 1) {
        var m = decrypt(i, c);
        
        if (m.indexOf('secret') !== -1) {
            return m;
        }
    }
}

function decrypt(key, c) {
    var decrypted = '';

    for (var i = 0; i < c.length; i += 1) {
        var ord = c.charCodeAt(i);

        decrypted += String.fromCharCode(ord - key);
    }

    return decrypted;
}

function find(messages, i, evaTime) {
    for (var j = 0; j < messages.length; j++) {
        var hackedMessage = hack(messages[j]);

        if (hackedMessage.split(',')[1] === i) {
            console.info('Time spent by Eva: ', +new Date - evaTime);

            break;
        };
    }
}
