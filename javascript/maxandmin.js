var arrayHolder = [4, 7, 10, 100, 2, 10, 9]
var max = 0; 
var seconfMax = 0;
for(let index = 0; index < arrayHolder.length; index++){
    if(arrayHolder[index] > max){
        max = arrayHolder[index];
    }
    else if(arrayHolder[index] < max && arrayHolder[index] > seconfMax){
        seconfMax = arrayHolder[index]
    }
}

console.log("The maximum is: ", max)
console.log("The Second Maximum is: ", seconfMax)