var readline = require('readline-sync');

class Polynomial {
    constructor(prime, recoveredCount, sharedCount) {
        this.sharedCount = sharedCount;
        this.recoveredCount = recoveredCount;
        this.prime = parseInt(prime) || 101;
        this.polynomial = [];
        this.shares = [];
    }

    makeSecret() {
        for (var i = 0; i < this.recoveredCount; i += 1) {
            this.polynomial.push(Math.floor(Math.random() * this.prime));
        }

        for (var i = 1; i < this.sharedCount + 1; i += 1) {
            var result = 0;
            var j = i;

            for (var j = this.polynomial.length - 1; j >= 0; j -= 1) {
                var sym = this.polynomial[j];

                result = (result * i + sym) % this.prime;
            }

            this.shares.push([i, result]);
        }

        this.secret = this.polynomial[0];

        console.info('Secret: ', this.secret)
    }

    calculateSecret(k) {
        if (this.sharedCount < 2) {
            throw new Error('Too few points to calculate the curve');
        }

        function subtract(x, values) {
            return values.reduce((acc, value) => {
                acc.push(x - value);

                return acc;
            }, [])
        }

        var x = 0;
        var x_s = [];
        var y_s = [];
        var numbers = [];
        var dividers = [];
        var number = 0;

        for (var i = 0; i < k; i += 1) {
            x_s.push(this.shares[i][0]);
        }

        for (var i = 0; i < k; i += 1) {
            var others = x_s.slice();
            var current = others.splice(i, 1)[0];

            dividers.push(this.interpolatePi(subtract(current, others)));
            numbers.push(this.interpolatePi(subtract(x, others)));
        }

        var divider = this.interpolatePi(dividers);

        for (var i = 0; i < k; i += 1) {
            y_s.push(this.shares[i][1]);
        }

        for (var i = 0; i < k; i += 1) {
            number += this.divideModule(numbers[i] * divider * y_s[i] % this.prime, dividers[i], this.prime);
        }

        return ((this.divideModule(number, divider, this.prime) % this.prime) + this.prime) % this.prime;
    }

    interpolatePi(numbers) {
        return numbers.reduce(function(acc, number) {
            return acc * number
        }, 1);
    }

    divideModule(number, divider, module) {
        var value = 0;
        var [ old_x, value ] = [0, 1];
        var [ old_y, y ] = [1, 0];

        while (module !== 0) {
            var q = Math.floor(divider / module);
            [divider, module] = [module, ((divider % module) + module) % module];
            [ old_x, value ] = [value - q * old_x, old_x];
            [ old_y, y ] = [y - q * old_y, old_y];
        }

        return number * value;
    }
}

function initialize() {
    var sharedCount = parseInt(readline.question('We want to share the secret between: '));
    var recoveredCount = parseInt(readline.question('How many people do you need to recover: '));
    var prime = parseInt(readline.question('Prime is equal to: '));

    return {
        prime: prime,
        recoveredCount: recoveredCount,
        sharedCount: sharedCount
    }
}

function printSharedSecrets(secrets) {
    var shared = [];

    console.info('Shared secrets:');

    for (var i = 0; i < secrets.length; i += 1) {
        shared.push(`K${i} = ${secrets[i]}`);
    }

    console.info(shared.join('; '));
}

function printRecoveredSecrets(polynomial) {
    var recovered = [];

    console.info('Recovered secrets:');

    for (var i = 2; i < parseInt(polynomial.sharedCount) + 1; i += 1) {
        var calculatedSecret = polynomial.calculateSecret(i);

        recovered.push(`M${i}: ${calculatedSecret}`);
    }

    console.info(recovered.join('; '))
}

var initializeData = initialize();
var polynomial = new Polynomial(initializeData.prime, initializeData.recoveredCount, initializeData.sharedCount);
polynomial.makeSecret();

printSharedSecrets(polynomial.shares);
printRecoveredSecrets(polynomial);
