var fs = require('fs');
var util = require('../OOPs/OOPsUtility')
var read = require('readline-sync');

/**
    * @description this class is used for calling Stock method in utility & reading JSON file
    * @param nothing
    * @returns nothing
    */

class Stock {
    stock(){
        try {

            var data = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Stock.json');
    
            var object = JSON.parse(data);
            // console.log(object);
    
                var Result=util.Stock(object);
            return Result;
        } 
        catch (error) {
            console.log(error);
            
        }
    }
    }
    

module.exports = {
    Stock
}

var st=new Stock();
st.stock();