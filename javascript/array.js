var arrayHolder = new Array();
var firstArray = ["car", 2000, ["Toyotal, Nissan"]]
var secondArray = ["Bike", 6500, "Ford"]
var thirdArray = ["Truck", 500, "Honda"]
var fourthArray = ["Scooter", 1500, null]
arrayHolder.push(firstArray);
arrayHolder.push(secondArray);
arrayHolder.push(thirdArray);
arrayHolder.push(fourthArray);
console.table(arrayHolder)

var arrayHolder = new Array ();
var firstArray = [100, 200, 300];
var secondArray = [400, 500, 600];
var thirdArray = [700, 800, 900];
var fourthArray = [1111, 2222, 3333];

arrayHolder.push(firstArray);
arrayHolder.push(secondArray);
arrayHolder.push(thirdArray);
arrayHolder.push(fourthArray);

var counlum1 = arrayHolder[0];
var counlum2 = arrayHolder[1];
var counlum3 = arrayHolder[2];

var row1 = arrayHolder.splice(0, 1)
var row2 = arrayHolder.splice(0 ,2)
var row3 = arrayHolder.splice(0 ,3)

console.table(row3)