// feetToMile program/app start

function feetToMile(feet) {
    if (0 > feet) {
        var errorMassage = "Sorry,Your input number is negative.Distance cannot be negative.Please try again.";
        return errorMassage;
    } else {
        var mile = (feet / 5280);
        return mile;
    }

}
//Default test case:
var feetInput = -5280;
console.log(feetInput, "feet to mile : ", feetToMile(feetInput));
console.log("feet to mile : ", feetToMile(5280));
console.log("feet to mile : ", feetToMile(1));

console.log("\n \n ");

// feetToMile program/app end


//woodCalculator program/apps start

function woodCalculator(chairCount, tableCount, bedCount) {
    if (0 > chairCount || 0 > tableCount || 0 > bedCount) {
        var errorMsg = ("Element Number doesn't less than zero.Please try again another input");
        return errorMsg;
    } else {
        var woodCount = chairCount + tableCount * 3 + bedCount * 5;
        return woodCount + " Cubic meter";
    }
}


//Default test case
//Please Enter Your valid Input given woodCalculator function serial.

var chair = 3,
    table = 4,
    bed = 5;
var totalWood = woodCalculator(chair, table, bed);
console.log("Total wood needed :", totalWood);
var totalWood = woodCalculator(0, 5, 8);
console.log("Total wood needed :", totalWood)
var totalWood = woodCalculator(8, -5, 6);
console.log("Total wood needed :", totalWood)

console.log("\n \n ");

//woodCalculator program/apps end


//brickCalculator program/app start

function brickCalculator(floorNumbers) {
    if (floorNumbers > 20) {
        var totalHeights = (floorNumbers - 20) * 10 + 270; //this condition is valid for greater than 20floor 
        return totalHeights; //so 1st 20floor height = 1st_10floor +2nd_floor = (15*10)+(12*10) = 150+120 = 270(!note)

    } else if (floorNumbers > 10) {
        var totalHeights = (floorNumbers - 10) * 12 + 150; //this condition is valid for greater than 10floor 
        return totalHeights; //so 1st 20floor height = 1st_10floor +2nd_floor = 15*10 = 150 (!note)
    } else {
        var totalHeights = floorNumbers * 15;
        return totalHeights;
    }
}

//Default test case

var floorNumbers = 5;
var totalBrick = brickCalculator(floorNumbers) * 1000;
console.log("Total Bricks = ", totalBrick);

var totalBrick = brickCalculator(18) * 1000;
console.log("Total Bricks = ", totalBrick);

var totalBrick = brickCalculator(37) * 1000;
console.log("Total Bricks = ", totalBrick);

console.log("\n \n ");


//brickCalculator program/app end


// tinyFriend program/app start

function tinyFriend(friendsName) {
    //toRemove empty array
    var validName = friendsName.filter(Boolean);
    var nameLength = validName.map(function (value) {
        return value.length;
    });
    var tinyName = validName[0]
    var smallLength = nameLength[0];
    var lengths = nameLength.length;
    for (var i = 1; i < lengths; i++) {
        var currentNameLength = nameLength[i];
        if (smallLength > currentNameLength) {
            smallLength = currentNameLength;
            var tinyName = validName[i];
        }
    }
    return tinyName;
}

//Default test case

//1st test case
var friendsName = ["Aman", "Hasan", "Nahid", "Tushar", "Bokkor", "mahi", "Anik", 'Diptho', "Sadman", "Pritom"];
var tinyNames = tinyFriend(friendsName);
console.log(tinyNames);

//2nd test case
var tinyNames = tinyFriend(["Amanur Rahman", "Tushar", NaN, "Hasan", 'Aman', null, 12, 23, 0, "Nowshin"]);
console.log(tinyNames);

//tinyFriend program/app end