const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function roundNumber() {
    readline.question("What is the number: ", function (number){
        console.log(Math.round(number))

        readline.close
    })
}
roundNumber()