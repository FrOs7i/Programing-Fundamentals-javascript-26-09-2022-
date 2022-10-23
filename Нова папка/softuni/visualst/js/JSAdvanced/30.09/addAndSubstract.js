function addAndSubstract(array) {
    let arrResult = []
    let furstSum = 0
    let secondSum = 0
    for (let i = 0; i < array.length; i++) {
        let currNum = array[i];
        furstSum += currNum
        if (currNum % 2 == 0) {
            currNum += i
            secondSum += currNum
        } else {
            currNum -= i
            secondSum += currNum
        }
        arrResult.push(currNum)
    }
    console.log(arrResult);
    console.log(furstSum);
    console.log(secondSum);
}
addAndSubstract([-5, 11, 3, 0, 2])