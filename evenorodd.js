const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function evenOrOdd() {
    readline.question("What is the number: ", function (number){
        if (number%2 == 0){
            console.log("The number is even")
        } else {
            console.log("The number is odd")
        }
        readline.close()
    })
}
evenOrOdd()