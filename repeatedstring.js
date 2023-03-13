const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function repeatString() {
    readline.question("What would you like repeated: ", function (string){
        readline.question("How many times: ", function (repeat){
            console.log(string.repeat(repeat))

            readline.close()
        })
    })
}
repeatString()