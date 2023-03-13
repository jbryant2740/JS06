const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
const temp = 62
const isSummer = new Boolean(true)

function squirrelPlay() {
    if (temp > 60 < 90 && isSummer == false); {
        console.log("Squirrels are playing")
    } if (temp > 60 < 100 && isSummer == true); {
        console.log("Squirrels are playing")
    } else { // Don't know what's wrong with this
        console.log("Squirrels are not playing")
    }
}
squirrelPlay()