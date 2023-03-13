const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function max3() {
    readline.question("What is the first number: ", function (firstNumber){
        readline.question("What is the second number: ", function (secondNumber){
            readline.question("What is the third number: ", function (thirdNumber){
                console.log("The largest number is " + Math.max(firstNumber, secondNumber, thirdNumber))
                readline.close()
            })
        })
    })
}
max3()