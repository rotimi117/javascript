function larg(inp) {
    let maxx = -1;
    let secondLar = -1;
    for (let count = 0; count < inp.length; count++) {
      let num = parseInt(inp[count]);
      if (num !== undefined && num > maxx) {
        maxx = num;
      }
    }
  
    for (let count = 0; count < inp.length; count++) {
      let num = parseInt(inp[count]);
      if (num !== undefined && num < maxx && num > secondLar) {
        secondLar = num;
      }
    }
  
    return secondLar;
  }
  
  inp = "dfa12321aafd";
  console.log(larg(inp));
  
  inp1 = "XYZ";
  console.log(larg(inp1));
  
  function largOdd(inp) {
    let maxx = -1;
    let secondLar = -1;
    for (let count = 0; count < inp.length; count++) {
      let num = parseInt(inp[count]);
      if (num !== undefined && num > maxx && num % 2 == 1) {
        maxx = num;
      }
    }
  
    for (let count = 0; count < inp.length; count++) {
      let num = parseInt(inp[count]);
      if (num !== undefined && num < maxx && num > secondLar && num % 2 == 1) {
        secondLar = num;
      }
    }
  
    return secondLar;
  }
  
  console.log("ODD");
  
  inp = "dfa12321aafd";
  console.log(largOdd(inp));
  
  inp1 = "abc1111";
  console.log(largOdd(inp1));










































// function findSecondLargestNumber(inputString) {
//     // Step 1: Split the string into an array of numbers
//     var numbersArray = inputString.split(" ");

//     // Step 2: Convert the array of strings to an array of numbers
//     var numbers = numbersArray.map(function(num) {
//         return parseFloat(num);
//     });

//     // Step 3: Sort the array of numbers in descending order
//     numbers.sort(function(a, b) {
//         return b - a;
//     });

//     // Step 4: Find the second largest number
//     if (numbers.length < 2) {
//         return null; // Return null if there's no second largest
//     }
    
//     return numbers[1];
// }

// // Example input string
// var inputString = "10 20 5 30 15";

// // Call the function to find the second largest number
// var secondLargest = findSecondLargestNumber(inputString);

// // Check if a second largest number was found
// if (secondLargest !== null) {
//     console.log("Second largest number:", secondLargest);
// } else {
//     console.log("There is no second largest number.");
// }
