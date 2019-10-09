module.exports = 
{
    Inventory(object,weight)
    {
    //console.log("Input Weight :",weight);
    //console.log(object);
    

    if(weight>0)
    {
        var rice=object.Rice;        
        var wheat=object.Wheat;
        var pulses=object.Pulses;
    }
    
    for(let i in rice){
        console.log(rice[i]);
        console.log("Price per kg "+rice[i].price);
        console.log("Total weight "+weight+" kg");
        console.log("Total price="+rice[i].price*weight);
        }

        for(let i in wheat){
            console.log(wheat[i]);
            console.log("Price per kg "+wheat[i].price);
            console.log("Total weight "+weight+" kg");
            console.log("Total price="+wheat[i].price*weight);
            }

            for(let i in pulses){
                console.log(pulses[i]);
                console.log("Price per kg "+pulses[i].price);
                console.log("Total weight "+weight+" kg");
                console.log("Total price="+pulses[i].price*weight);
                }
    
    },

    /*
    allLetter(input){
        var letters=/^[a-zA-Z_ ]+$/;
        if(input.match(letters) && input.letters>=3)
        {
            return true;
        }
        else{
            console.log("Please enter alphabet characters only of length greater than 3");
            return false;            
        }
    }
    */
}
