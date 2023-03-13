const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function min3() {
    readline.question("What is the first number: ", function (firstNumber){
        readline.question("What is the second number: ", function (secondNumber){
            readline.question("What is the third number: ", function (thirdNumber){
                console.log("The smallest number is " + Math.min(firstNumber, secondNumber, thirdNumber))
                readline.close()
            })
        })
    })
}
min3()