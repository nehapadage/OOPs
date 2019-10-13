const assert = require('chai').assert;

const Regexp=require("../Regexp")

describe("test case for Regular Expressions",function(){

// Test cases for Message
    it("Message should not be Array ",function(){
        assert.isNotArray(Regexp[0],"Message should not be Array")         
    })

   
    it("Message should not be Number",function(){
        assert.isNotNumber(Regexp[0],"Message should not be Number")
    })

    it("Message should not be Null",function(){
        assert.isNotNull(Regexp[0],"Message should not be Null")
    })

// Test cases for Name

it("Name should be not Array ",function(){
    assert.isNotArray(Regexp[1],"Name should be not Array")         
})

it("Name should not be Null",function(){
    assert.isNotNull(Regexp[1],"Name should not be Null")
})

it("Name should not be Number",function(){
    assert.isNotNumber(Regexp[1],"Name should not be Number")
})

// Test cases for Full Name

it("Full Name should not be Array ",function(){
    assert.isNotArray(Regexp[2],"Full Name should not be Array")         
})

it("Full Name should not be Null",function(){
    assert.isNotNull(Regexp[2],"Full Name should not be Null")
})

it("Full Name should not be Number",function(){
    assert.isNotNumber(Regexp[2],"Full Name should not be Number")
})

// Test cases for Contact Number

it("Contact Number should not be Array ",function(){
    assert.isNotArray(Regexp[3],"Contact Number should not be Array")         
})

it("Contact Number should not be Null",function(){
    assert.isNotNull(Regexp[3],"Contact Number should not be Null")
})

// it("Message should not be Number",function(){
//     assert.isNotNumber(Regexp[3],"Message should not be Number")
// })



})
