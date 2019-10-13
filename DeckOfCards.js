/**
    * @description this class is used for calling distribution of Deck of Cards method
    * @param nothing
    * @returns nothing
    */
var util = require('../OOPs/OOPsUtility');
class deckOfCards
 {
     deckofcards()
     {
       try{
        var personCards=util.distributingCards();
        
        return [personCards];      // returning array of 4 person
        

       }catch(error){
           console.log(error);
       }  
     }
    
    
}

module.exports = {deckOfCards}

var doc=new deckOfCards();
doc.deckofcards();


