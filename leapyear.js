const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function determineLeapYear() {
    readline.question("What is the year: ", function (year){
        if (year% == 0) {

        } else {
            console.log("The year is not a leap year (it has 365 days).")
        }
        readline.close
    })
}
determineLeapYear()