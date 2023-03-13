const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function xor(){
    readline.question("Does plant have water: ", function (water){
        readline.question("Does plant have sunlight: ", function (sunlight){
            if (water == yes || sunlight == yes){
                // Yes is defined?
                console.log("Plant will grow")
            } else {
                console.log("Plant will not grow")
            }
        })
    })
}
xor()