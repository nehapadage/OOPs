var fs = require('fs');
var util = require('../OOPs/OOPsUtility')
var flag = true;
var read = require('readline-sync');

class Inventory 
{

  InventoryData() {
    try {
      var inputWeight = read.questionInt("Enter weight");
      var data = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Inventory.json')

      var object = JSON.parse(data);
      // console.log(object);


      if (flag)
        util.Inventory(object, inputWeight);

    } 
    catch (error) {
      console.log("File not found");
      flag = false;
    }
  }

}

module.exports = {
  Inventory
}
var inven = new Inventory(); 
inven.InventoryData();