function integerAndFloatSecond(num1,num2,num3) {
    let sum = num1 + num2 + num3
    let type = Number.isInteger(sum)
        ? `Integer`
        : `Float`
console.log(`${sum} - ${type}`);
}
integerAndFloatSecond(9,100,1.1)