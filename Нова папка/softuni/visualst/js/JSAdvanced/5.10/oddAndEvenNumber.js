function oddAndEvenNumberSum(num) {
    let numberAsString=num.toString()
    let evenSum=0
    let oddSum=0
    let numberAsStringlength=numberAsString.length
    for (let index = 0; index < numberAsStringlength; index++) {
        let currNumber=Number(numberAsString[index])
        if (currNumber % 2 ===0) {
            evenSum+=currNumber
        }else{
            oddSum+=currNumber
        }
    }
    console.log(`Odd sum = ${oddSum}. Even sum = ${evenSum}`);
}
oddAndEvenNumberSum(1000435)