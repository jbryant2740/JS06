const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function sumLimit() {
    readline.question("What is the first number: ", function (firstNumber){
        readline.question("What is the second number: ", function (secondNumber){

            if (firstNumber + secondNumber < 10) {
                console.log(firstNumber + secondNumber)
            } if (firstNumber || secondNumber < 0) {
                console.log("Error")
            } else {
                console.log(firstNumber)
            }
            readline.close()
        })
    })
}
sumLimit()