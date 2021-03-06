var read = require('readline-sync')
var util = require('../OOPs/OOPsUtility')

/**
    * @description this class is used for Replacing data using Regular Expressions
    * @param nothing
    * @returns nothing
    */

class RegExp {
    regexp() {
        try {
            var Message = " Hello <<name>> , We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz dd-mm-yyyy"

            do {
                var name = read.question("Enter your name");
            } while (util.allLetters(name) == false)

            do {
                var fullName = read.question("Enter your full name");
            } while (util.allLetters(fullName) == false)

            do {
                var contactNo = read.questionInt("Enter your contact number");
            } while (util.contactNum(contactNo) == false)


            var Dt = new Date();
            var date_info = Dt.getDate() + "/" + Dt.getMonth() + "/" + Dt.getFullYear();


            var reg=util.RegExp(Message, name, fullName, contactNo, date_info);
            Message= reg[0]
            name=reg[1]
             fullName=reg[2]
              contactNo=reg[3] 
            

              return [Message, name, fullName, contactNo]

        } 
        catch (error) {
            console.log(error);
        }
    }
}

module.exports={RegExp}

var reg=new RegExp();
reg.regexp();