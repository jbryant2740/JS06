const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function middle3() {
    readline.question("What is the first number: ", function (firstNumber){
        readline.question("What is the second number: ", function (secondNumber){
            readline.question("What is the third number: ", function (thirdNumber){
                total = (firstNumber + secondNumber + thirdNumber)
                max3 = Math.max(firstNumber, secondNumber, thirdNumber)
                min3 = Math.min(firstNumber, secondNumber, thirdNumber)
                console.log("The middle number is ", (total - max3 - min3))
                readline.close()
            })
        })
    })
}
middle3()
// No idea where 119 comes from