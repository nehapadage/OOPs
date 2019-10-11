var fs = require('fs');
var util = require('../OOPs/OOPsUtility')

var read = require('readline-sync');



class StockAccount {
    stockAccount() {
        try {

            var data1 = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Stock.json');
            var data2 = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/StockAccount.json');

            var StockObject = JSON.parse(data1);
            var UserObject = JSON.parse(data2);



            util.StockAccountData(StockObject, UserObject);





            

        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = {
    StockAccount
}

var st = new StockAccount();
st.stockAccount();