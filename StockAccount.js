var fs = require('fs');
var util = require('../OOPs/OOPsUtility')

var read = require('readline-sync');

/**
    * @description this class is used for calling Stock Account Data & calling JSON files
    * @param nothing
    * @returns nothing
    */

class StockAccount {
    stockAccount() {
        try {

            var data1 = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Stock.json');
            var data2 = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/StockAccount.json');

            var StockObject = JSON.parse(data1);
            var UserObject = JSON.parse(data2);



            var data=util.StockAccountData(StockObject, UserObject);

            var userName=data[0];
            var companyName=data[1];
            var noOfShares=data[2];
  
            return [userName,companyName,noOfShares]

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