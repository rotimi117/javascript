var arrayHolder = new Array();
var total = 0;
// var namel = prompt("Please enter your name:");
// console.log("Your name is", namel)
var nigeria  = {
    Name:  "Nigeria",
    Population: 2000,
    Temperature: 10.3,
    Currency : "NG: 2000" 
};
var england  = {
    Name:  "England",
    Population: 5000,
    Temperature: 8.3,
    Currency : "$: 2000" 
};
var uk  = {
    Name:  "United Kingdom",
    Population: 1000,
    Temperature: 5.0,
    Currency : "$: 1,500" 
};

arrayHolder.push(nigeria);
arrayHolder.push(england);
arrayHolder.push(uk);
console.table(arrayHolder);

var arr = new Array();
arr[0] = arrayHolder[0];
for(let index = 0; index < arr.length; index++){
    if(arrayHolder[0] == nigeria){
        total += nigeria.Population
    }
}
console.log(arr.length)
console.log("This is the total: "+total)


var arr2 = new Array();
var secondTotal = 0;
arr2 = arrayHolder[1];
for(let index = 0; index < arr2.length; index++){
    if(arrayHolder[1] == nigeria){
        secondTotal += nigeria.Population
    }
}
console.log("This is the Second Total: "+secondTotal)