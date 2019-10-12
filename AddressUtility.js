/**
 * @description this class is for constructor, setters, getters of Address Book
 * @param id,name,address,city.......
 * @returns id,name,address,city.......
 */
class addRecord {
    constructor() {
        this.id = "";
        this.firstName = "";
        this.lastName = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.zipCode = "";
        this.phoneNumber = "";
    }

    set ID(id) {
        this.id = id;
    }

    get ID() {
        return this.id;
    }

    set FirstName(firstName) {
        this.firstName = firstName;
    }

    get FirstName() {
        return this.firstName;
    }

    set LastName(lastName) {
        this.lastName = lastName;
    }

    get LastName() {
        return this.lastName;
    }

    set Address(address) {
        this.address = address
    }

    get Address() {
        return this.address;
    }

    set City(city) {
        this.city = city;
    }

    get City() {
        return this.city;
    }

    set State(state) {
        this.state = state
    }

    get State() {
        return this.state;
    }

    set ZipCode(zipCode) {
        this.zipCode = zipCode;
    }

    get ZipCode() {
        return this.zipCode;
    }

    set PhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber
    }

    get PhoneNumber() {
        return this.phoneNumber;
    }
}

/**
 * @description this class is for add delete update methods of Address Book & reading JSON file
 * @param nothing
 * @returns nothing
 */
const fs = require('fs')

class AddressBook extends addRecord {

    readfile() {
        var address = fs.readFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/AddressJson.json", 'utf8')
        var myJson = JSON.parse(address);
        return myJson;
    }

    writefile(myJson) {
        return fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/AddressJson.json", JSON.stringify(myJson))
    }


    /**
     * @description this method is for adding data into Address Book
     * @param nothing
     * @returns nothing
     */
    add() {
        try {
            var myJson = this.readfile();

            console.log(myJson);

            let record = {
                "id": this.ID,
                "firstName": this.FirstName,
                "lastName": this.LastName,
                "address": this.Address,
                "city": this.City,
                "state": this.State,
                "zipCode": this.ZipCode,
                "phoneNumber": this.PhoneNumber
            }

            myJson.push(record)
            // console.log("record after pushing--", myJson);

            this.writefile(myJson);



        } catch (error) {
            console.log(error);
        }
    }
    /**
     * @description this method is used for showing content in Address Book
     * @param nothing
     * @returns nothing
     */

    show() {
        try {

            var myJson = this.readfile();
            console.log(myJson);



        } catch (error) {
            console.log(error);
        }
    }
    /**
     * @description this method is used for deleting content in Address Book
     * @param deleteKey
     * @returns nothing
     */
    delete(deleteKey) {
        try {


            var myJson = this.readfile();
            for (let i in myJson) {

                if (myJson[i].phoneNumber == deleteKey) {

                    myJson.splice(i, 1);
                    console.log(myJson);

                }
            }
            this.writefile(myJson);

        } catch (error) {
            console.log(error);
        }
    }
    /**
     * @description this method is used for updating content in Address Book
     * @param PhoneNumber,Choice of which parameter should update, updation value
     * @returns nothing
     */
    update(ph, ch, Result) {
        try {
            var myJson = this.readfile();
            switch (ch) {
                case 1:
                    for (let i in myJson) {
                        if (myJson[i].phoneNumber == ph) {

                            myJson[i].lastName = Result;
                            console.log(myJson);

                        }
                    }
                    break;
                case 2:
                    for (let i in myJson) {
                        if (myJson[i].phoneNumber == ph) {

                            myJson[i].address = Result;
                            console.log(myJson);

                        }
                    }
                    break;
                case 3:
                    for (let i in myJson) {
                        if (myJson[i].phoneNumber == ph) {

                            myJson[i].city = Result;
                            console.log(myJson);

                        }
                    }
                    break;
                case 4:
                    for (let i in myJson) {
                        if (myJson[i].phoneNumber == ph) {

                            myJson[i].state = Result;
                            console.log(myJson);

                        }
                    }
                    break;
                case 5:
                    for (let i in myJson) {
                        if (myJson[i].phoneNumber == ph) {

                            myJson[i].zipCode = Result;
                            console.log(myJson);

                        }
                    }
                    break;
                case 6:
                    for (let i in myJson) {
                        if (myJson[i].phoneNumber == ph) {

                            myJson[i].phoneNumber = Result;
                            console.log(myJson);

                        }
                    }
                    break;

                default:
                    console.log("Enter valid input");
                    break;

            }

            this.writefile(myJson);


        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = {
    AddressBook
}