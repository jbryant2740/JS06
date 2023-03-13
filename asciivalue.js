const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function findAsciiValue() {
    readline.question("What is the letter :", function (letter){
        
        readline.close
    })
}
findAsciiValue()