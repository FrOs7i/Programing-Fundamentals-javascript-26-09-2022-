function printAndSumFor(num1, num2) {
    let sum = 0
    let output = ""
    for (let i = num1; i <= num2; i++) {
        if (i === num2) {
            output += `${i}`
        } else {
            output += `${i} `
        }
        sum += i;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
printAndSumFor(5, 10)