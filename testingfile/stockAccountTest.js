const assert = require('chai').assert;

const StockAccount = require("../StockAccount")

describe("test case for Stock", function () {

    // Test cases for Username
    it("Username should not be Array ", function () {
        assert.isNotArray(StockAccount[0], "Username should not be Array")
    })


    it("Username should not be Number", function () {
        assert.isNotNumber(StockAccount[0], "Username should not be Number")
    })

    it("Username should not be Null", function () {
        assert.isNotNull(StockAccount[0], "Username should not be Null")
    })


    // Test cases for Company Name
    it("Company Name should not be Array ", function () {
        assert.isNotArray(StockAccount[1], "Company Name should not be Array")
    })


    it("Company Name should not be Number", function () {
        assert.isNotNumber(StockAccount[1], "Company Name should not be Number")
    })
    // Test cases for No. of Shares

    it("No. of Shares should not be Array ", function () {
        assert.isNotArray(StockAccount[2], "No. of Shares should not be Array")
    })


    it("No. of Shares should not be Number", function () {
        assert.isNotNumber(StockAccount[2], "No. of Shares should not be Number")
    })

    it("No. of Shares should not be Null", function () {
        assert.isNotNull(StockAccount[2], "No. of Shares should not be Null")
    })



})