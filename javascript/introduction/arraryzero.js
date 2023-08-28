function arrayzero(array) {
    const numbers = array.filter(x => x !== 0);
    const zero = array.length - numbers.length;
    const output = numbers.concat(Array(zero).fill(0));
    return output;
}

const inputArray = [0, 0, 1];
const output = arrayzero(inputArray);
console.log(output)





















