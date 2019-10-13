const assert = require('chai').assert;

const InventoryManage=require("../InventoryManagement")

describe("test case for Inventory Management",function(){

// Test cases for rice_name
    it("rice_name should not be Array ",function(){
        assert.isNotArray(InventoryManage[0],"rice_name should not be Array")         
    })

   
    it("rice_name should not be Number",function(){
        assert.isNotNumber(InventoryManage[0],"rice_name should not be Number")
    })

    it("rice_name should not be Null",function(){
        assert.isNotNull(InventoryManage[0],"rice_name should not be Null")
    })

// Test cases for wheat_name
it("wheat_name should not be Array ",function(){
    assert.isNotArray(InventoryManage[1],"wheat_name should not be Array")         
})


it("wheat_name should not be Number",function(){
    assert.isNotNumber(InventoryManage[1],"wheat_name should not be Number")
})

it("wheat_name should not be Null",function(){
    assert.isNotNull(InventoryManage[1],"wheat_name should not be Null")
})

// Test cases for pulses_name
it("pulses_name should not be Array ",function(){
    assert.isNotArray(InventoryManage[2],"pulses_name should not be Array")         
})


it("pulses_name should not be Number",function(){
    assert.isNotNumber(InventoryManage[2],"pulses_name should not be Number")
})

it("pulses_name should not be Null",function(){
    assert.isNotNull(InventoryManage[2],"pulses_name should not be Null")
})

    

})