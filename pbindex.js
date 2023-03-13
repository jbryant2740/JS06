const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const PhoneBook = require('./phonebook')
const phonebook1 = new PhoneBook("John Doe", "114 Market St, St Louis, MO, 63403", "6366435698")
const phonebook2 = new PhoneBook("John E Doe", "324 Main St, St Charles", "MO,63303, 8475390126")
const phonebook3 = new PhoneBook("John Michael West Doe", "574 Pole ave, St. Peters, MO, 63333", "5628592375")
const phoneBookList = []
phoneBookList.push(phonebook1)
phoneBookList.push(phonebook2)
phoneBookList.push(phonebook3)


const menu = () => {

    console.log("Phone book options: ")
    console.log("1) Add an entry")
    console.log("2) Search for an entry")
    console.log("3) Remove an entry")
    console.log("4) Update an entry")
    console.log("5) Show all entries")
    console.log("6) Exit")

    readline.question("What is your selection: ", (input) => {

        switch(input) {

            case "1":
                addEntry()
                break;
            case "2":
                searchEntry()
                break;
            case "3":
                removeEntry()
                break;
            case "4":
                updateEntry()
                break;
            case "5":
                showEntry()
                break;
            case "6":
                exitEntry()
                break;
            default:
                console.log("Please enter a valid entry")
                menu()
        }

    })

}

const addEntry = () => {

    console.log("You are now adding an entry")

    readline.question("What is your full name: ", (fullName) => {

            readline.question("What is your address: ", (address) => {

                readline.question("What is your phone number: ", (phoneNumber) => {

                    const newEntry = new Entry(fullName, address, phoneNumber)

                    phoneBookList.push(newEntry)

                    console.log("Your entry has been accepted")

                    continueOrExit(addEntry)

                })

            })

        })
    }


const searchEntry = () => {

    if(phoneBookList.length === 0) {
        console.log("No entries available")

    } else {

        console.log("1) Name")
        console.log("2) Phone number")

        readline.question("How would you like to search by: ", (input) => {


            readline.question("What is the keyword: ", (keyword) => {

                const searchList = []
                switch(input) {
                    case '1':
                        for (const phonebook of phoneBookList) {
            
                            if(phonebook.getName === keyword) {
                                console.log(phonebook)
                                searchList.push(phonebook)
                            }

                        }

                        if(searchList.length == 0) {
                            console.log("No matches")
                        }

                        continueOrExit(searchEntry)
                        break
                    case '2':
                        for (const phonebook of phoneBookList) {
            
                            if(phonebook.getTypeOfFood === keyword) {
                                console.log(phonebook)
                                searchList.push(phonebook)
                            }

                        }

                        if(searchList.length == 0) {
                            console.log("No matches")
                        }
                        continueOrExit(searchEntry)
                        break
                    default:
                }
            })

        })
    }

}

const updateEntry = (phonebook) => {

    console.log("What would you like to update: ")
    console.log("1) Name")
    console.log("2) Address")
    console.log("3) Phone Number")

    readline.question("What would you like to select: ", (selection) => {

        switch(selection) {
            case '1':
                readline.question("What is your new name: ", (fullName) => {

                    phonebook.setName = fullName
                    console.log(`We have updated your name to ${phonebook.getName}`)
                    continueOrExit(updateFieldMenu)
                })
                break
            case '2':
                readline.question("What is your new address: ", (address) => {

                    phonebook.setAddress =address
                    console.log(`We have updated your Address to ${phonebook.getAddress}`)
                    continueOrExit(updateFieldMenu)
                })
                break
            case '3':
                readline.question("What is your new phone number: ", (phoneNumber) => {

                    phonebook.setPhoneNumber = phoneNumber
                    console.log(`We have updated your Phone Number to ${phonebook.getPhoneNumber}`)
                    continueOrExit(updateFieldMenu)
                })
                break
            default:
                console.log("Please enter a valid entry")
                updateFieldMenu()
                break
        }

    })
}

const exitEntry = (callback) => {

    console.log("1) Go back")
    console.log("2) Main Menu")
    readline.question("Do you want to continue what you were doing or go to the Main Menu? ", (input) => {

        switch(input) {
            case '1':
                callback()
                break;
            case '2':
                menu()
                break;
            default:
                console.log("Please enter a valid entry")
                continueOrExit()
        }
    })

}

const removeEntry = () => {


    readline.question("What is the phone number: ", (input) => {

        
        for (const phonebook of phoneBookList) {
            
            if(phonebook.getId == input) {

                phoneBookList.pop(phonebook)
                console.log("Your entry has been removed")
                continueOrExit(removeEntry)
            }

        }

    })


}

menu()