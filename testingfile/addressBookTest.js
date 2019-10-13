const assert = require('chai').assert;

const Address = require("../AddressMain")

describe("test case for Address Book", function () {

    // Test cases for Phone number
    it("Phone number should not be Array ", function () {
        assert.isNotArray(Address[0], "Phone number should not be Array")
    })


    it("Phone number should not be Number", function () {
        assert.isNotNumber(Address[0], "Phone number should not be Number")
    })

    it("Phone number should not be Null", function () {
        assert.isNotNull(Address[0], "Phone number should not be Null")
    })

    // Test cases for User choice
    it("User choice should not be Array ", function () {
        assert.isNotArray(Address[1], "User choice should not be Array")
    })


    it("User choice should not be Number", function () {
        assert.isNotNumber(Address[1], "User choice should not be Number")
    })

    it("User choice should not be Null", function () {
        assert.isNotNull(Address[1], "User choice should not be Null")
    })

})