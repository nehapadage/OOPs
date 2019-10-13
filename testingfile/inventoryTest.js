const assert = require('chai').assert;

const Inventory=require("../InventoryData")

describe("test case for Inventory",function(){

// Test cases for rice_value
    it("rice_value should not be Array ",function(){
        assert.isNotArray(Inventory[0],"rice_value should not be Array")         
    })

   
    it("rice_value should not be Number",function(){
        assert.isNotNumber(Inventory[0],"rice_value should not be Number")
    })

    it("rice_value should not be Null",function(){
        assert.isNotNull(Inventory[0],"rice_value should not be Null")
    })

// Test cases for wheat_value
it("wheat_value should not be Array ",function(){
    assert.isNotArray(Inventory[1],"wheat_value should not be Array")         
})


it("wheat_value should not be Number",function(){
    assert.isNotNumber(Inventory[1],"wheat_value should not be Number")
})

it("wheat_value should not be Null",function(){
    assert.isNotNull(Inventory[1],"wheat_value should not be Null")
})

// Test cases for pulses_value
it("pulses_value should not be Array ",function(){
    assert.isNotArray(Inventory[2],"pulses_value should not be Array")         
})


it("pulses_value should not be Number",function(){
    assert.isNotNumber(Inventory[2],"pulses_value should not be Number")
})

it("pulses_value should not be Null",function(){
    assert.isNotNull(Inventory[2],"pulses_value should not be Null")
})

    

})