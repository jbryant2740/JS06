const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function isFactor() {
    readline.question("What is the first number: ", function (firstNumber) {
        readline.question("What is the second number: ", function (secondNumber) {
            // Formula
            if (x) {
                console.log(secondNumber + " is a factor of " + firstNumber)
            } else {
                console.log(secondNumber + " is not a factor of " + firstNumber)
            }
        })
    })
}
isFactor()