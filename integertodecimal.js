const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function integerToDecimal() {
    readline.question("What is the number: ", function (number){
        console.log(number + ".0")
        readline.close()
    })
}
integerToDecimal()