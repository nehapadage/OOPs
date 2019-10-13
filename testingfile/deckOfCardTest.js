const assert = require('chai').assert;

const deckOfCard=require("/home/admin1/Desktop/Neha_Programs/OOPs/DeckOfCards")

describe("test case for deck of cards",function(){

// Test cases for complete Array [[A0],[A1],[A2],[A3]]
    it("Returning parameter should be Array ",function(){
        assert.isNotArray(deckOfCard,"Returning parameter should be Array")         
    })

   
    it("Array should not be Empty",function(){
        assert.isNotEmpty(deckOfCard,"Array should not be Empty")
    })

    it("Array should not be Null",function(){
        assert.isNotNull(deckOfCard,"Array should not be Null")
    })

// Test cases for indivisual array
// Test cases for first Array [[A0],[],[],[]]

it("Returning parameter should be Array ",function(){
    assert.isNotArray(deckOfCard[0],"Returning parameter should be Array")         
})

it("Array should not be Null",function(){
    assert.isNotNull(deckOfCard[0],"Array should not be Null")
})

// Test cases for second Array [[],[A1],[],[]]

it("Returning parameter should be Array ",function(){
    assert.isNotArray(deckOfCard[1],"Returning parameter should be Array")         
})

it("Array should not be Null",function(){
    assert.isNotNull(deckOfCard[1],"Array should not be Null")
})

// Test cases for third Array [[],[],[A2],[]]

it("Returning parameter should be Array ",function(){
    assert.isNotArray(deckOfCard[2],"Returning parameter should be Array")         
})

it("Array should not be Null",function(){
    assert.isNotNull(deckOfCard[2],"Array should not be Null")
})

// Test cases for fourth Array [[],[],[],[A3]]

it("Returning parameter should be Array ",function(){
    assert.isNotArray(deckOfCard[3],"Returning parameter should be Array")         
})

it("Array should not be Null",function(){
    assert.isNotNull(deckOfCard[3],"Array should not be Null")
})

})