const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
const firstNumber = 2
const secondNumber = 2
const thirdNumber = 2

function lotteryTicket() {
    if (firstNumber == secondNumber == thirdNumber == firstNumber) {
        console.log("The result is 20")
    } if (firstNumber == secondNumber || firstNumber == thirdNumber || secondNumber == thirdNumber) {
        console.log("The result is 10")
    } if (firstNumber !== secondNumber !== thirdNumber !== firstNumber) {
        console.log("The result is 0")
    }
    readline.close()
}
lotteryTicket()
// Don't know where to go from here