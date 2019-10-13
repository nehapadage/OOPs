var fs = require('fs');
var util = require('../OOPs/OOPsUtility')
var flag = true;
var read = require('readline-sync');
/**
    * @description this class is used for showing Inventory Data & Reading JSON file
    * @param nothing
    * @returns nothing
    */
class Inventory 
{

  InventoryData() {
    try {
      var inputWeight = read.questionInt("Enter weight");
      var data = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Inventory.json')

      var object = JSON.parse(data);
      // console.log(object);


      if (flag)
        var data=util.Inventory(object, inputWeight);
        rice_value=data[0];
        wheat_value=data[1];
        pulses_value=data[2];

        return [rice_value,wheat_value,pulses_value]

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