const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
const one = "abcxx"

function findXx() {
    if (one.includes("xx")){
        console.log("True")
    } else {
        console.log("False")
    }
    readline.close()
}
findXx()