var util = require('../OOPs/AddressUtility')
var ooputil = require('./OOPsUtility')
const read = require("readline-sync")

class Address{
    address(){
        try{
            var Book = new util.AddressBook();

            var n = 1;
            
            do {
                console.log("Select an Option ");
                console.log("1. Add Entry to Address Book ");
                console.log("2. View Address Book ");
                console.log("3. Delete an address from Address Book \n4. Update Address Book\n5. Exit");
                var switchOption = read.questionInt()
 /**
 * @description this method is for selecting option of Address Book
 * @param switchOption
 * @returns nothing
 */
                switch (switchOption) {
                    case 1:
                        Book.ID = n++;
                        do {
                            Book.FirstName = read.question("Enter first name");
                        } while (ooputil.allLetters(Book.FirstName) == false)
            
                        do {
                            Book.LastName = read.question("Enter last name");
                        } while (ooputil.allLetters(Book.LastName) == false)
            
            
                        Book.Address = read.question("Enter Address");
            
            
                        do {
                            Book.City = read.question("Enter city");
                        } while (ooputil.allLetters(Book.City) == false)
            
                        do {
                            Book.State = read.question("Enter state");
                        } while (ooputil.allLetters(Book.State) == false)
            
                        do {
                            Book.ZipCode = read.question("Enter zipcode");
                        } while (ooputil.zipCode(Book.ZipCode) == false)
            
                        do {
                            Book.PhoneNumber = read.question("Enter phone number");
                        } while (ooputil.contactNum(Book.PhoneNumber) == false)
            
            
                        Book.add();
            
            
                        break;
                    case 2:
                        Book.show();
            
                        break;
                    case 3:
                        do{
                        deleteKey = read.question("Enter Phone Number of the record to be deleted : \n")
                        }while(ooputil.contactNum(Book.deleteKey) == false)

                        Book.delete(deleteKey)
                        break;
                    case 4:
                        do{
                        var phone = read.question("Enter your Phone number");
                        }while(ooputil.contactNum(phone) == false)

                        do {
                            var choice = read.questionInt("Enter what u want to update?\nEnter  1.Last Name 2.Address 3.City 4.State 5.Zip code 6.Phone number 7.Exit")
                            if (choice == 7) {
                                break;
                            }
                            Result = read.question("Enter updation value");
                            Book.update(phone, choice, Result);
                        } while (choice > 0 && choice <= 6)
                        break;
                    case 5:
                        break;
                    default:
                        console.log("Invalid Input");
                }
            
            } while (switchOption < 4 && switchOption > 0)

            return[phone,choice];

        }catch(error){
            console.log(error);
            
        }
    }
}
module.exports={Address}
var add=new Address();
add.address();
