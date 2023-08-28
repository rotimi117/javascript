// var word1 = "abc"
// var word2 = 'pqr'
// var output = ""

// var minLength = min(length(word1), length(word2));
// for(i in Range(minLength)){
//     output += word1[i] + word2[i]
// }
// if(length(word1) > minLength){
//     output += word1[minLength]
// }
// if(length(word2) > minLength){
//     output += word2[minLength]
// }
// console.log(output)

// const word1 = "ab";
// const word2 = "pqrs";
// const output = "";

// const maxLength = maxLength(length(word1), length(word2));
// for(i in Range(maxLength)){
//     if(i < length(word1)){
//         output += word1[i]
//     }
//     if(i < length(word2)){
//         output += word2[i]
//     }
// }
// console.log(output)

let word1 = "abc";
let word2 = "pqr";
let output = "";

let minLength = Math.min(word1.length, word2.length);
for(let i = 0; i < minLength; i++){
    output += word1[i] + word2[i];
}
if(word1.length > minLength){
    for(let i = minLength; i < word1.length; i++){
        output += word1[i];
    }
}
if(word2.length > minLength){
    for(let i = minLength; i < word2.length; i++){
        output += word2[i]
    }
}
console.log(output)