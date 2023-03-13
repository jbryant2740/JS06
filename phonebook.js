class PhoneBook {

    constructor(fullName, address, phoneNumber) {

        this.fullName = fullName
        this.address = address
        this.phoneNumber = phoneNumber

    }

    get getFullName() {
        return this.fullName
    }

    set setFullName(name) {
        this.fullName = fullName
    }

    get getAddress() {
        return this.fullName
    }

    set setAddress(address) {
        this.address = address
    }

    get getPhoneNumber() {
        return this.phoneNumber
    }

    set setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber
    }
}

module.exports = PhoneBook;