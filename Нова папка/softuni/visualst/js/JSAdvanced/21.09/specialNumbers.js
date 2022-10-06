function specialNumbers(num) {
    let isSpecial = true
    for (let currNum = 1; currNum <= num; currNum++) {
        let sumOfDIgits = 0
        let numberToSting = currNum.toString()
        let stringLength = numberToSting.length
        for (let index = 0; index < stringLength; index++) {

            if (currNum >= 10) {
                sumOfDIgits += Number(numberToSting[index])
            } else {
                sumOfDIgits += Number([currNum])
            }

        }
        if (sumOfDIgits == 5 || sumOfDIgits == 7 || sumOfDIgits == 11) {
            isSpecial = true
            console.log(`${currNum} -> True`);
        } else {
            isSpecial = false
            console.log(`${currNum} -> False`);
        }


    }
}
specialNumbers(15)