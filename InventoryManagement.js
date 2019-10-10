var fs = require('fs');
var util = require('../OOPs/OOPsUtility')
var flag = true;
var read = require('readline-sync');


class InventManage {
    InventoryManagement() {
        try {
            var inputWeight = read.questionInt("Enter weight");
            var data = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Inventory.json','utf-8')

            var object = JSON.parse(data);
            // console.log(object);
            console.log(JSON.stringify(object));

            if (flag)
                util.ManageInventory(object, inputWeight);

                
                                
        } 
        catch (error) {
             console.log(error);
            flag = false;
        }
    }
}

module.exports={ InventManage }

var im=new InventManage();
im.InventoryManagement();