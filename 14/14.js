var aes256 = require('aes256');
var readline = require('readline-sync');

LENGTH_ENGLISH_ALPHABET = 26;

if (process.argv[2] === 'hack') {
    console.info(`We will use shift cipher for encryption, where key is equal 5`);
    var message = readline.question('Enter message:');
    var encrypted = shiftCipherEncode(message, 5);
    console.info('encrypted', encrypted);
} else {
    var password = 'myPa$$wd';
    var cipher = aes256.createCipher(password)
    console.info('We will use aes256 for encryption');
    var message = readline.question('Enter message:');
    console.info(message);
    var encrypted = aesEncode(message);
    console.info('encrypted', encrypted);

    var decrypted = cipher.decrypt(encrypted);
    console.info('decrypted', decrypted);
}

function aesEncode(message) {
    return cipher.encrypt(message);
}

function shiftCipherEncode(message, key) {
	if (key < 0) {
        return shiftCipherEncode(message, key + LENGTH_ENGLISH_ALPHABET);
    }

    var output = '';

	for (var i = 0; i < message.length; i += 1) {
        var symbol = message[i];
        var lowerSymbol = symbol.toLowerCase();

        if (lowerSymbol >= 'a' && lowerSymbol <= 'z') {
			var charCode = message.charCodeAt(i);

            if ((charCode >= 97) && (charCode <= 122)) {
                symbol = String.fromCharCode(((charCode - 97 + key) % LENGTH_ENGLISH_ALPHABET) + 97);
            }

			else if ((charCode >= 65) && (charCode <= 90)) {
                symbol = String.fromCharCode(((charCode - 65 + key) % LENGTH_ENGLISH_ALPHABET) + 65);
            }
        }

		output += symbol;
    }

	return output;
};
