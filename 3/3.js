WSH.echo("Who want to pay? (0 - ANB; 1 - the first cryptanalyst; 2 - the second cryptanalyst; 3 - the third cryptanalyst: ")
var whoPay = WSH.StdIn.ReadLine()
var first = tossСoin()[0];
var second = tossСoin()[1];
var third = tossСoin()[2];

getTossCoinReslut(first, second, third);

var answers = getCryptanalystAnswer(whoPay, first, second, third);
var firstResult = answers[0];
var secondResult = answers[1];
var thirdResult = answers[2];

getTaskAnswer(firstResult, secondResult, thirdResult)

function tossСoin() {
    var analytics = ["the first", "the second", "the third"];
    var values = [];

    for (var i = 0; i < analytics.length; i++) {
        print("Toss " + analytics[i] + " cryptanalyst")
        
        var value = Math.floor(Math.random() * 2);

        print("Result is: ", value)

        values.push(value);
    }

    return values;
};

function getCryptanalystAnswer(whoPay, first, second, third) {
    var firstAnswer = third != first;
    var secondAnswer = first != second;
    var thirdAnswer = second != third;

    if (whoPay != 1) {
        firstAnswer = Boolean(third == first);
    }

    if (whoPay != 2) {
        secondAnswer = Boolean(first == second);
    }

    if (whoPay != 3) {
        thirdAnswer = Boolean(second == third);
    }

    return [firstAnswer, secondAnswer, thirdAnswer];
}

function getTossCoinReslut(first, second, third) {
    if (first) {
        print("The first cryptanalyst: values of coins are equal");
    } else {
        print("The first cryptanalyst: values of coins aren't equal");
    }
    
    if (second) {
        print("The second cryptanalyst: values of coins are equal");
    } else {
        print("The second cryptanalyst: values of coins aren't equal");
    }
    
    if (third) {
        print("The third cryptanalyst: values of coins are equal");
    } else {
        print("The third cryptanalyst: values of coins aren't equal");
    }
}

function print(message, value) {
    WSH.echo(message, value)
    WSH.echo("")
}

function getTaskAnswer(first, second, third) {
    if (!((first + second + third) % 2)) {
        WSH.echo("Pays cryptanalyst")
    } else {
        WSH.echo("Pays ANB")
    }
}
