var fs = require('fs');
var util = require('../OOPs/OOPsUtility')
var read = require('readline-sync');

/**
    * @description this class is used for Managing Inventory Data & reading JSON file
    * @param nothing
    * @returns nothing
    */
class InventManage {
  InventoryManagement(){
    
    
    var data = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Inventory.json','utf-8')

    var object = JSON.parse(data);

      util.InventoryManagement(object);
  }
}

module.exports={ InventManage }

var im=new InventManage();
im.InventoryManagement();