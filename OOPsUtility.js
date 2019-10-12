var fs = require('fs');
var read = require('readline-sync');
module.exports = {

/**
    * @description this method is used for Operation of Inventory Data
    * @param object,weight
    * @returns nothing
    */

    Inventory(object, weight) {
        //console.log("Input Weight :",weight);
        //console.log(object);


        if (weight > 0) {
            var rice = object.Rice;
            var wheat = object.Wheat;
            var pulses = object.Pulses;
        }

        for (let i in rice) {
            console.log(rice[i]);
            console.log("Price per kg " + rice[i].price);
            console.log("Total weight " + weight + " kg");
            console.log("Total price=" + rice[i].price * weight);
        }

        for (let i in wheat) {
            console.log(wheat[i]);
            console.log("Price per kg " + wheat[i].price);
            console.log("Total weight " + weight + " kg");
            console.log("Total price=" + wheat[i].price * weight);
        }

        for (let i in pulses) {
            console.log(pulses[i]);
            console.log("Price per kg " + pulses[i].price);
            console.log("Total weight " + weight + " kg");
            console.log("Total price=" + pulses[i].price * weight);
        }

    },

/**
    * @description this method is used for Operation of Inventory Management
    * @param object
    * @returns nothing
    */

    InventoryManagement(object) {
        try {

            var Result;
            var Money = 0;

            do {
                var choice = read.questionInt("What you want to buy? Press 1.Rice 2.Wheat 3.Pulses 4.Exit ");


                switch (choice) {
                    case 1:
                        var rname = read.question("Enter Rice name: Basmati Rice=Rs 200 per kg or Kolam Rice=Rs 100 per kg");
                        for (var key in object.Rice) {
                            if (object.Rice[key].name == rname) {
                                var RiceWeight = read.questionInt("Enter weight");
                                Result = object.Rice[key].price * RiceWeight;
                                Money = Money + Result;
                                console.log("Money u should pay for rice : " + Result);
                            }
                        }
                        this.ManageInventory(object, RiceWeight, WheatWeight, PulsesWeight, rname, wname, pname);
                        break;
                    case 2:
                        var wname = read.question("Enter Wheat name: Spelt=Rs 30 per kg or Durum=Rs 40 per kg");
                        for (var key in object.Wheat) {
                            if (object.Wheat[key].name == wname) {
                                var WheatWeight = read.questionInt("Enter weight");
                                Result = object.Wheat[key].price * WheatWeight;
                                Money = Money + Result;
                                console.log("Money u should pay for wheat : " + Result);
                            }
                        }
                        this.ManageInventory(object, RiceWeight, WheatWeight, PulsesWeight, rname, wname, pname);
                        break;
                    case 3:
                        var pname = read.question("Enter Wheat name: Beans=Rs 80 per kg or Peas=Rs 50 per kg");
                        for (var key in object.Pulses) {
                            if (object.Pulses[key].name == pname) {
                                var PulsesWeight = read.questionInt("Enter weight");
                                Result = object.Pulses[key].price * PulsesWeight;
                                Money = Money + Result;
                                console.log("Money u should pay for pulses: " + Result);
                            }

                        }
                        this.ManageInventory(object, RiceWeight, WheatWeight, PulsesWeight, rname, wname, pname);
                        break;
                    case 4:
                        break;
                    default:
                        console.log("Enter valid input");
                        break;


                }
            } while (choice > 0 && choice < 3)

            console.log("Total Money you should Pay " + parseInt(Money));

        } catch (error) {
            console.log(error);
        }
    },


    ManageInventory(object, RiceWeight, WheatWeight, PulsesWeight, rname, wname, pname) {


        var rice = object.Rice;
        var wheat = object.Wheat;
        var pulses = object.Pulses;


        for (let i in rice) {
            if (rice[i].name == rname) {
                console.log("Total weight of rice" + RiceWeight + " kg");
                console.log("Remaining weight of Rice in kg" + (rice[i].weight - RiceWeight))
                rice[i].weight = rice[i].weight - RiceWeight;
                console.log("Updated weight of Rice" + rice[i].weight);
                fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Inventory.json", JSON.stringify(object));
            }

        }

        for (let i in wheat) {
            if (object.Wheat[i].name == wname) {
                console.log("Total weight of wheat" + WheatWeight + " kg");
                console.log("Remaining weight of Wheat in kg" + (wheat[i].weight - WheatWeight))
                wheat[i].weight = wheat[i].weight - WheatWeight;
                console.log("Updated weight of Wheat" + wheat[i].weight);
                fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Inventory.json", JSON.stringify(object));
            }

        }

        for (let i in pulses) {
            if (object.Pulses[i].name == pname) {
                console.log("Total weight of pulses" + PulsesWeight + " kg");
                console.log("Remaining weight of pulses in kg" + (pulses[i].weight - PulsesWeight))
                pulses[i].weight = pulses[i].weight - PulsesWeight;
                console.log("Updated weight of Rice" + pulses[i].weight);
            }

            fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Inventory.json", JSON.stringify(object));
        }


    },

/**
    * @description this method is used for Operation of Replacing data from message
    * @param Message, name, fullName, contactNo, date_info
    * @returns nothing
    */

    RegExp(Message, name, fullName, contactNo, date_info) {
        Message = Message.replace(/<<name>>/, name);
        Message = Message.replace(/<<full name>>/, fullName);
        Message = Message.replace(/xxxxxxxxxx/, contactNo);
        Message = Message.replace(/dd-mm-yyyy/, date_info);

        console.log(Message);
    },

/**
    * @description this method is used for Operation of Stock
    * @param object
    * @returns nothing
    */    

    Stock(object) {
        //  console.log(object);

        var stock = object;

        for (let i in stock) {
            console.log("Stock Name = " + stock[i].StockName);
            console.log("No. of Shares = " + stock[i].NoOfShares);
            console.log("Share price = " + stock[i].SharePrice);
            console.log("Total value = " + stock[i].NoOfShares * stock[i].SharePrice);
            console.log("***********************");

        }


    },

/**
    * @description this method is used for Operation of Shuffling Deck of Cards
    * @param nothing
    * @returns cards
    */ 


    deckOfCards() {
        var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        var cards = [];

        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                cards.push("" + suit[i] + rank[j])
                // console.log(cards);
            }
        }



        var n = suit.length * rank.length;

        for (var i = 0; i < n; i++) {
            var shuffle = Math.floor(Math.random() * n);
            // console.log(shuffle);
            var temp = cards[shuffle];
            cards[shuffle] = cards[i];
            cards[i] = temp;
        }
        console.log("shuffle cards output: \n" + cards)

        return cards;

    },


    /**
     * @description this method is to distribute 9 Cards to 4 Players and Print the Cards received by the 4 Players using 2D Array…
     * @param nothing
     * @returns nothing
     */

    distributingCards() {

        var play = 0;
        var cards = this.deckOfCards();
        // console.log(cards);

        var personCards = [
            [],
            [],
            [],
            []
        ];
        for (let i = 0; i < 4; i++) {

            for (let j = 0; j < 9; j++) {

                personCards[i][j] = cards[j + play];

            }
            play = Math.floor(Math.random() * cards.length);

        }

        console.log(" \n cards distributed among the four players are \n");

        console.log("first player : " + personCards[0]);
        console.log("second player : " + personCards[1]);
        console.log("Third player : " + personCards[2]);
        console.log("Fourth player : " + personCards[3]);

    },

/**
    * @description this method is used for Operation of Stock Management
    * @param StockObject, UserObject
    * @returns nothing
    */ 

    StockAccountData(StockObject, UserObject) {
        console.log("length-->", UserObject.length);
        var choice = read.questionInt("1.Buy\t2.Sell\nEnter your choice");
        switch (choice) {
            case 1:
                do {
                    var uname = read.question("Enter your name");
                } while (this.allLetters(uname) == false)

                do {
                    console.log("TCS or Infosys");
                    var cname = read.question("Which company shares you want to buy? ");
                } while (this.allLetters(cname) == false)


                for (var key in StockObject) {
                    if (StockObject[key].StockName === cname)
                        var val = key;
                }

                do {
                    var nShare = read.questionInt("Enter no. of share you want to buy");
                } while (this.allNumbers(nShare) == false)

                for (var key1 = 0; key1 < UserObject.length; key1++) {
                    if (UserObject[key1].UserName === uname) {

                        for (var key2 = 0; key2 < UserObject.length; key2++) {
                            if (UserObject[key1].Stock_Name[key2].StockName === cname) {
                                UserObject[key1].Stock_Name[key2].NoOfShares = (UserObject[key1].Stock_Name[key2].NoOfShares) + nShare;
                                var date = new Date();
                                var dateTime = (date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
                                console.log("Transaction done at : " + dateTime);

                            }

                        }

                        if (UserObject[key1].AccountBalance > 0) {
                            var TotalSharePrice = nShare * StockObject[val].SharePrice;
                            UserObject[key1].AccountBalance = UserObject[key1].AccountBalance - TotalSharePrice;
                            console.log(UserObject[key1].AccountBalance);
                            fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/StockAccount.json", JSON.stringify(UserObject));
                        }

                    }

                }

                if (nShare < StockObject[val].NoOfShares) {
                    StockObject[val].NoOfShares = StockObject[val].NoOfShares - nShare;
                    //console.log(StockObject[val].NoOfShares);
                    fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Stock.json", JSON.stringify(StockObject));
                }
                break;

            case 2:
                do {
                    var uname = read.question("Enter your name");
                } while (this.allLetters(uname) == false)

                do {
                    console.log("TCS or Infosys");
                    var cname = read.question("Which company shares you want to sell? ");
                } while (this.allLetters(cname) == false)


                for (var key in StockObject) {
                    if (StockObject[key].StockName === cname)
                        var val = key;
                }

                do {
                    var nShare = read.questionInt("Enter no. of share you want to sell");
                } while (this.allNumbers(nShare) == false)



                for (var key1 = 0; key1 < UserObject.length; key1++) {
                    if (UserObject[key1].UserName === uname) {
                        for (var key2 = 0; key2 < UserObject.length; key2++) {
                            if (UserObject[key1].Stock_Name[key2].StockName === cname) {
                                UserObject[key1].Stock_Name[key2].NoOfShares = (UserObject[key1].Stock_Name[key2].NoOfShares) - nShare;
                                fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/StockAccount.json", JSON.stringify(UserObject));
                                var date = new Date();
                                var dateTime = (date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
                                console.log("Transaction done at : " + dateTime);

                            }
                        }


                        var TotalSharePrice = nShare * StockObject[val].SharePrice;
                        UserObject[key1].AccountBalance = UserObject[key1].AccountBalance + TotalSharePrice;
                        console.log(UserObject[key1].AccountBalance);
                        fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/StockAccount.json", JSON.stringify(UserObject));



                    }

                }

                if (nShare < StockObject[val].NoOfShares) {
                    StockObject[val].NoOfShares = StockObject[val].NoOfShares + nShare;
                    //console.log(StockObject[val].NoOfShares);
                    fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Stock.json", JSON.stringify(StockObject));
                }
                break;
            default:
                console.log("Enter valid Input");
                break;

        }
    },

/**
    * @description this method is used for Checking whatever user entered are all Alphabets
    * @param name
    * @returns true / false
    */ 

    allLetters(name) {
        let regx1 = /^[a-zA-Z_ ]*$/ig;
        if (regx1.test(name))
            return true;
        else
            console.log("Enter alphabet characters only");
        return false;
    },

/**
    * @description this method is used for Checking whatever user entered are all Numbers having only 10 digits
    * @param number
    * @returns true / false
    */     

    contactNum(num) {
        let regx2 = /^\d{10}$/;
        if (regx2.test(num))
            return true;
        else
            console.log("Please Enter 10 digits not characters");

        return false;
    },

/**
    * @description this method is used for Checking whatever user entered are all Numbers
    * @param number
    * @returns true / false
    */ 

    allNumbers(num) {
        let regx1 = /^[0-9]*$/ig;
        if (regx1.test(num))
            return true;
        else
            console.log("Enter numbers only");
        return false;
    },

/**
    * @description this method is used for Checking whatever user entered are all Numbers having only 6 digits
    * @param number
    * @returns true / false
    */ 

    zipCode(num) {
        let regx2 = /^\d{6}$/;
        if (regx2.test(num))
            return true;
        else
            console.log("Please Enter only 6 digits not characters");

        return false;
    },



}