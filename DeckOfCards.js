
var util = require('../OOPs/OOPsUtility');
class deckOfCards
 {
     deckofcards()
     {
       try{
        util.distributingCards();
       }catch(error){
           console.log(error);
       }  
     }
    
    
}

module.exports = {deckOfCards}

var doc=new deckOfCards();
doc.deckofcards();


