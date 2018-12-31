var initSettings = initialize();
var q = initSettings[0];
var p = initSettings[0];

WSH.echo("Alice wants to prove that she has a secret");
var secret = WSH.StdIn.ReadLine();

var alicaHasSecret = roundsProcess(secret, p * q);

WSH.echo(alicaHasSecret ? "Alisa has a secret" : "Alisa hasn't a secret");

function roundsProcess(secret, n) {
    WSH.echo("Select how many rounds the Verification Center spends:");

    var k = WSH.StdIn.ReadLine();

    WSH.echo("The Verification center has started rounds process ...");

    var alicaHasSecret = true;

    for (var i = 1; i < k + 1; i++) {
        WSH.echo("Verification Center spends round number ", i, " ...");
    
        var r = Math.round(0.5 + Math.random() * n);

        WSH.echo("Alica chooses random r:", r);
        WSH.echo("Alica sends ", Math.pow(r, 2) % n);
    
        var e = Math.round(-0.5 + Math.random() * 1.5);

        WSH.echo("Bob sends to Alica random ", e);
        WSH.echo("Alica sends ", (r * Math.pow(secret, e)) % n);
        WSH.echo("The Verification process has started ...");
    
        if (Math.pow((r * Math.pow(secret, e)) % n, 2) % n ===
            (Math.pow(r, 2) % n * Math.pow(Math.pow(secret, 2) % n, e)) % n) {
            WSH.echo('Success');
        } else {
            WSH.echo('Fail');
            alicaHasSecret = false
            break;
        }
    }

    return alicaHasSecret;
}

function initialize() {
    WSH.echo("Verification Center chooses q and p:");
    WSH.echo("q value is:");

    var q = WSH.StdIn.ReadLine();

    WSH.echo("p value is:");

    var p = WSH.StdIn.ReadLine();

    return [q, p];
}
