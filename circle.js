const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)
function areaAndCircumference() {
        readline.question("What is the radius of the circle: ", function (radius){
            area = (Math.PI*radius ** 2)
            console.log(area)

            circumference = (2 * Math.PI*radius)
            console.log(circumference)

            readline.close()
    })
}
areaAndCircumference()