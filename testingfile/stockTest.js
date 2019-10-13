const assert = require('chai').assert;

const Stock=require("../Stock")

describe("test case for Stock",function(){

// Test cases for Stock Result
    it("Stock Result should not be Array ",function(){
        assert.isNotArray(Stock,"Stock Result should not be Array")         
    })

   
    it("Stock Result should not be Number",function(){
        assert.isNotNumber(Stock,"Stock Result should not be Number")
    })

    it("Stock Result should not be Null",function(){
        assert.isNotNull(Stock,"Stock Result should not be Null")
    })

    it("Stock Result should not be Null",function(){
        assert.isNotEmpty(Stock,"Stock Result should not be Null")
    })

})