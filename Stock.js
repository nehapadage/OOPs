var fs = require('fs');
var util = require('../OOPs/OOPsUtility')
var flag = true;
var read = require('readline-sync');



class Stock {
    stock(){
        try {

            var data = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Stock.json');
    
            var object = JSON.parse(data);
            // console.log(object);
    
    
            if (flag)
                util.Stock(object);
    
        } 
        catch (error) {
            console.log("File not found");
            flag = false;
        }
    }
    }
    

module.exports = {
    Stock
}

var st=new Stock();
st.stock();