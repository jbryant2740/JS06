const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function convertCurrency() {
    readline.question("Please enter the amount of money you wish to exchange: ", function (usDollars){
        
        if (usDollars > 0) {
            cadDollars = (usDollars / 0.7711)
            jpYen = (usDollars * 137.13)
            rusRubles = (usDollars * 59.82)

            console.log("Amount in Canadian Dollars: " + cadDollars)
            console.log("Amount in Japanese Yen: " + jpYen)
            console.log("Amount in Russian Rubles: " + rusRubles)
        } if (usDollars = 0){
            console.log("Error")
        } else  {
            console.log("Error")
        }

        readline.close()
        
    })
}
convertCurrency()