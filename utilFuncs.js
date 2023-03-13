


const createResturaunt = (readline) => {

    console.log("You are now creating a Resturaunt!!!!!")

    readline.question("What is the name of your Resturaunt: ", (name) => {

        readline.question("What is your address: ", (address) => {

            readline.question("What is the phone number: ", (phoneNumber) => {

                readline.question("What is the type of food your serve: ", (typeOfFood) => {

                    const newResturaunt = new Resturaunt(name, address, phoneNumber, typeOfFood)

                    resturauntList.push(newResturaunt)

                    console.log("Your Resturaunt has been created!!!")

                    continueOrExit(createResturaunt, readline)

                })

            })

        })
    })

}


const searchResturaunts = (readline) => {

    if(resturauntList.length === 0) {
        console.log("No Resturaunts in List")

    } else {

        console.log("1) Name")
        console.log("2) Type Of Food")

        readline.question("How would you like to search by: ", (input) => {


            readline.question("What is the keyword: ", (keyword) => {

                const searchList = []
                switch(input) {
                    case '1':
                        for (const resturant of resturauntList) {
            
                            if(resturant.getName === keyword) {
                                console.log(resturant)
                                searchList.push(resturant)
                            }

                        }

                        if(searchList.length == 0) {
                            console.log("No Matches")
                        }

                        continueOrExit(searchResturaunts, readline)
                        break
                    case '2':
                        for (const resturant of resturauntList) {
            
                            if(resturant.getTypeOfFood === keyword) {
                                console.log(resturant)
                                searchList.push(resturant)
                            }

                        }

                        if(searchList.length == 0) {
                            console.log("No Matches")
                        }
                        continueOrExit(searchResturaunts, readline)
                        break
                    default:
                }
            })

        })
    }

}

const updateResturaunt = (readline) => {


    readline.question("What is the id of your Resturaunt: ", (input) => {

        
        for (const resturant of resturauntList) {
            
            if(resturant.getId == input) {

                updateFieldMenu(resturant, readline)

            }

        }

    })


}

const updateFieldMenu = (resturant, readline) => {

    console.log("What would you like to update: ")
    console.log("1) Name")
    console.log("2) Address")
    console.log("3) Phone Number")
    console.log("4) Type Of Food")

    readline.question("What would you like to select? ", (selection) => {

        switch(selection) {
            case '1':
                readline.question("What is your new name: ", (name) => {

                    resturant.setName = name
                    console.log(`We have updated your name to ${resturant.getName}`)
                    continueOrExit(updateFieldMenu, readline)
                })
                break
            case '2':
                readline.question("What is your new Address: ", (address) => {

                    resturant.setAddress =address
                    console.log(`We have updated your Address to ${resturant.getAddress}`)
                    continueOrExit(updateFieldMenu, readline)
                })
                break
            case '3':
                readline.question("What is your new Phone Number: ", (phoneNumber) => {

                    resturant.setPhoneNumber = phoneNumber
                    console.log(`We have updated your Phone Number to ${resturant.getPhoneNumber}`)
                    continueOrExit(updateFieldMenu, readline)
                })
                break
            case '4':
                readline.question("What is your new Type Of Food: ", (typeOfFood) => {

                    resturant.setTypeOfFood = typeOfFood
                    console.log(`We have updated your Type Of Food to ${resturant.getTypeOfFood}`)
                    continueOrExit(updateFieldMenu, readline)
                })
                break
            default:
                console.log("Please enter a valid entry, 1,2,3,4")
                updateFieldMenu(readline)
                break
        }

    })
}

const continueOrExit = (callback, readline) => {

    console.log("1) Go back")
    console.log("2) Main Menu")
    readline.question("Do you want to continue what you were doing or go to the Main Menu? ", (input) => {

        switch(input) {
            case '1':
                callback(readline)
                break;
            case '2':
                menu()
                break;
            default:
                console.log("Stop it Billy")
                continueOrExit(callback, readline)
        }
    })

}

const deleteResturaunt = () => {


    console.log("We are sorry for your loss")
    readline.question("What is the id of your Resturaunt: ", (input) => {

        
        for (const resturant of resturauntList) {
            
            if(resturant.getId == input) {

                resturauntList.pop(resturant)
                console.log("Your resturuant has been removed from the system. Good Luck")
                continueOrExit(deleteResturaunt)
            }

        }

    })


}


module.exports =  {
    createResturaunt,
    searchResturaunts,
    updateFieldMenu,
    updateResturaunt,
    deleteResturaunt,
    continueOrExit
}