const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)

const getAreaOfSquare = () => {

    const height = 0, length = 0

    readline.question("What is the height: ", (input) => {

        if(input < 0) {

            console.log(error)
            readline.close()
            return

        }
        readline.question("What is the length: ", (input2) => {

            if(input2 < 0) {
    
                console.log(error)
                readline.close()
                return
    
            }
        })
    
        const areaOfSquare = height*length
    
        console.log(areaOfSquare)
    })



    readline.close()
}

getAreaOfSquare()