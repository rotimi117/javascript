var variable = 25;
if(variable === 25){
    console.log("Hello C16");
}else if(variable === 30){
    console.log("Hiii C16");
}else {
    console.log("Whoops..")
}


var arrayHolder = [1, 2, 3, 4, 5];
Array.prototype.sum = function(){
    let total = 0;

    for (let index = 1; index < this.length; index++){
        total += this[index]
    }
    return total;
}

console.log(arrayHolder.length)
console.log("The sum of the array is: ",arrayHolder.sum())