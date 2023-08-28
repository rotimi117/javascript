function largestOfOddNumber(string){
    let largestOdd = Number.NEGATIVE_INFINITY;

    for(let i = 0; i< string.length; i++){
        const char = string.charAt(i);
        if (!isNaN(char) && parseInt(char) % 2 !== 0){
            const numbers = parseInt(char);
            if (numbers > largestOdd){
                largestOdd = numbers;
            }
        }
    }
    if (largestOdd !== Number.NEGATIVE_INFINITY){
        return largestOdd;
    }else{
        return null;
    }
}
const  input_string = "52"
const output = largestOfOddNumber(input_string)
console.log(output)

function sum(a,b){
    return a+ b;
}


module.export = largestOfOddNumber;























// function findLargestOddNumber(string) {
//     let largestOdd = Number.NEGATIVE_INFINITY; // Initialize to a very small value
  
//     for (let i = 0; i < string.length; i++) {
//       const char = string.charAt(i);
//       if (!isNaN(char) && parseInt(char) % 2 !== 0) {
//         const currentNumber = parseInt(char);
//         if (currentNumber > largestOdd) {
//           largestOdd = currentNumber;
//         }
//       }
//     }
  
//     if (largestOdd !== Number.NEGATIVE_INFINITY) {
//       return largestOdd;
//     } else {
//       return null; // No odd numbers found
//     }
//   }
  
//   // Example usage:
//   const inputString = "This is a string with 12345 and 67890";
//   const result = findLargestOddNumber(inputString);
//   console.log(result); // Output: 5