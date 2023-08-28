// // 0 1 1 2 3 5 8 13 21
// let first = 0;

// while(first <30){
// let second = 1;
// let temp = 0;

// process.stdout.write(`${first}, ${second}, `);

// temp = second;
// first = first + second;
// second = temp + first;

// process.stdout.write(`${first}, ${second}, `);

// temp = second;
// first = first + second;
// second = temp + first;

// process.stdout.write(`${first}, ${second}, `);
// first++;
// }

// let array = [0,1,2,3,4,5,6,7,32,8];
// // for loop
// for( let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }


// let numbers = {uno: "one", duo: "two"}
// for(let index = 0; index < numbers.length; index++){
//     const element = numbers
// }
// // for in is for the index
// for(let i in Object.entries(numbers)){
//     console.log(i);
// }
// // for of is for the element
// for(let i of Object.values(numbers)){
//     console.log(i);
// }

// console.log(Object.values(numbers));
// console.log(Object.keys(numbers));
// console.log(Object.entries(numbers));

// let scores = {
//     bukayo: 67,
//     saliba: 71,
//     trossard: 57,
//     rotimi: 65,
//     jesus: 73,
//     ramsdale: 89
// }
// for(let i of Object.values(scores)){
//     console.log(i);
// }

let rawArray = [];
let row1 = new Array(4);
let row2 = new Array(4);
let row3 = new Array(4);

let obj1 = {
    name: "saliba",
    population: 67,
    temperature: 9,
    currency: "SB"
}
let obj2 = {
    name: "bukayo",
    population: 789,
    temperature: 3,
    currency: "BS"
}
let obj3 = {
    name: "white",
    population: 765,
    temperature: 6,
    currency: "WH"
}
row1.push(null);
row1.push(obj1);
row1.push(obj2);
row1.push(obj3);
rawArray.push(row1)

let obj4 = {
    name: "jesus",
    population: 89,
    temperature: 5,
    currency: "BG"
}
let obj5 = {
    name: "martinelli",
    population: 56,
    temperature: 7,
    currency: "BG"
}
let obj6 = {
    name: "rice",
    population: 908,
    temperature: -4,
    currency: "BG"
}
row2.push(obj4);
row2.push(obj5);
row2.push(obj6);
row2.push(null);
rawArray.push(row2)

let obj7 = {
    name: "partey",
    population: 54,
    temperature: -2,
    currency: "BG"
}
let obj8 = {
    name: "xhaka",
    population: 78,
    temperature: 11,
    currency: "BG"
}
let obj9 = {
    name: "trossard",
    population: 765,
    temperature: 7,
    currency: "BG"
}
row3.push(obj7);
row3.push(null);
row3.push(obj8);
row3.push(obj9);
rawArray.push(row3)

console.table(rawArray);

let total = 0;
for (let i in rawArray){
    for(let j = 0; j < rawArray[i].length; j++){
        if (rawArray[i][j] == null) continue;
        if (rawArray[i][j].temperature <10){
            total += rawArray[i][j].population;
        }
    }
}

console.log(total)




