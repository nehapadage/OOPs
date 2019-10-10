var fs = require('fs');
module.exports = {
    Inventory(object, weight) {
        //console.log("Input Weight :",weight);
        //console.log(object);


        if (weight > 0) {
            var rice = object.Rice;
            var wheat = object.Wheat;
            var pulses = object.Pulses;
        }

        for (let i in rice) {
            console.log(rice[i]);
            console.log("Price per kg " + rice[i].price);
            console.log("Total weight " + weight + " kg");
            console.log("Total price=" + rice[i].price * weight);
        }

        for (let i in wheat) {
            console.log(wheat[i]);
            console.log("Price per kg " + wheat[i].price);
            console.log("Total weight " + weight + " kg");
            console.log("Total price=" + wheat[i].price * weight);
        }

        for (let i in pulses) {
            console.log(pulses[i]);
            console.log("Price per kg " + pulses[i].price);
            console.log("Total weight " + weight + " kg");
            console.log("Total price=" + pulses[i].price * weight);
        }

    },


    ManageInventory(object,inputWeight){
        
        if (inputWeight > 0) {
            var rice = object.Rice;
           // var wheat = object.Wheat;
          //  var pulses = object.Pulses;
        }
            console.log(rice);
            
        for (let i in rice) {
            console.log(rice[i].name);
            console.log("Total weight " + inputWeight + " kg");
            console.log("Total price=" + rice[i].price * inputWeight);
            console.log("Remaining weight of Rice in kg"+ (rice[i].weight-inputWeight))
        

        var updatedWeight=(rice[i].weight-inputWeight);

        console.log("Updated weight"+updatedWeight);
                
        var rice=object.Rice;
            
                for(let i in rice){
                    
                    rice.push({
                        "name" : rice[i].name,
                        "price" : rice[i].price,
                        "weight" : updatedWeight
                    });
    
                }
           
                
            fs.writeFileSync("Inventory.json",JSON.stringify(object));
        }

    },


    RegExp(Message, name, fullName, contactNo, date_info) {
        Message = Message.replace(/<<name>>/, name);
        Message = Message.replace(/<<full name>>/, fullName);
        Message = Message.replace(/xxxxxxxxxx/, contactNo);
        Message = Message.replace(/dd-mm-yyyy/, date_info);

        console.log(Message);
    },

    Stock(object)
    {
      //  console.log(object);
        
        var stock=object.Stock;
        
        for (let i in stock) {
            console.log("Stock Name = " + stock[i].StockName);
            console.log("No. of Shares = " + stock[i].NoOfShares);
            console.log("Share price = " + stock[i].SharePrice);
            console.log("Total value = " + stock[i].NoOfShares*stock[i].SharePrice);
            console.log("***********************");
            
        }
        
        
    },

    allLetters(name) {
        let regx1 = /^[a-zA-Z_ ]*$/ig;
        if (regx1.test(name))
            return true;
        else
            console.log("Enter alphabet characters only");
        return false;
    },

    allNumbers(num) {
        let regx2 = /^\d{10}$/;
        if (regx2.test(num))
            return true;
        else
            console.log("Please Enter 10 digits not characters");

        return false;
    }

}
