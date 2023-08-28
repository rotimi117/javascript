function factorial(value){
    let answer = 1;
    for (let i = value; i > 0; i--){
        answer *= i;
    }
    return answer;
}
console.log(factorial(3));