function sumDigits(num) {
    let numAsString = num.toString()
    let sum = 0
    let numberOfDigits = numAsString.length
    for (let index = 0; index < numberOfDigits; index++) {
        let currNum= Number(numAsString[index])
        sum+=currNum

    }
    console.log(sum)
}
sumDigits(245678)