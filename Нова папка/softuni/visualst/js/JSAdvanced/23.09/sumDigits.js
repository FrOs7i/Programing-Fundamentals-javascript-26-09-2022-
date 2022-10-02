function sumDigits(num) {
    let numToStrng = num.toString()
    let sum = 0
    let numberOfDigits = numToStrng.lenght
    for (let index = 0; index < numberOfDigits; index++) {
        let currNum = Number(numToStrng[index])
        sum += currNum
    }
    console.log(`${sum}`);
}
sumDigits(245678)