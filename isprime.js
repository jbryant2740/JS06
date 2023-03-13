const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function isPrime() {
    function isFactor() {
        readline.question("What is the number: ", function (number) {
            // Formula
            if (x) {
                console.log(x + " is a prime number")
            } else {
                console.log(x + " is not a prime number")
            }
        })
    }
}
isPrime()