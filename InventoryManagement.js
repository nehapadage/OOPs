var fs = require('fs');
var util = require('../OOPs/OOPsUtility')
var read = require('readline-sync');


class InventManage {
    InventoryManagement() {
        try {
            var Result;
            var Money=0;
            
            var data = fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Inventory.json','utf-8')

            var object = JSON.parse(data);

            do{
            var choice=read.questionInt("What you want to buy? Press 1.Rice 2.Wheat 3.Pulses");

            
            switch(choice)
            {
                case 1: 
                var rname=read.question("Enter Rice name: Basmati Rice or Kolam Rice");
                for(var key in object.Rice)
                {
                    if(object.Rice[key].name==rname)
                    {
                        var inputWeight = read.questionInt("Enter weight");
                        Result=object.Rice[key].price*inputWeight;
                        Money=Money+Result;
                        console.log("Money u should pay for rice : "+Result);
                    }
                    
                }
                break;
                case 2:
                        var wname=read.question("Enter Wheat name: Spelt or Durum");
                        for(var key in object.Wheat)
                        {
                            if(object.Wheat[key].name==wname)
                            {
                                var inputWeight = read.questionInt("Enter weight");
                                Result=object.Wheat[key].price*inputWeight;
                                Money=Money+Result;
                                console.log("Money u should pay for wheat : "+Result);
                            }
                            
                        }
                        break;
                case 3:
                        var pname=read.question("Enter Wheat name: Beans or Peas");
                        for(var key in object.Pulses)
                        {
                            if(object.Pulses[key].name==pname)
                            {
                                var inputWeight = read.questionInt("Enter weight");
                                Result=object.Pulses[key].price*inputWeight;
                                Money=Money+Result;
                                console.log("Money u should pay for pulses: "+Result);
                            }
                           
                        }
                        break;
                default:console.log("Enter valid input");
                        break;
                
                        
            }
        }while(choice>0 && choice<3)

            console.log("Total Money you should Pay "+parseInt(Money));
        
            
            
          
        
                //util.ManageInventory(object, inputWeight);

                
                                
        } 
        catch (error) {
             console.log(error);
        }
    }
}

module.exports={ InventManage }

var im=new InventManage();
im.InventoryManagement();