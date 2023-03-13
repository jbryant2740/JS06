const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function areaOfTriangle() {
        readline.question("What is the base-width of the triangle: ", function (baseWidth){

            readline.question("What is the height of the triangle: ", function (height){
                area = (0.5 * baseWidth * height)

                console.log(area)

                readline.close()
            })
    })
}
areaOfTriangle()