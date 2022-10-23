function equalSum(array) {
    let isEqual = false
    let currIndex
    for (let index = 0; index < array.length; index++) {
        currIndex = index
        let chekNumLeft = 0
        let chekNumRight = 0
        for (let i = index - 1; i >= 0; i--) {
            chekNumLeft += array[i]
        }
        for (let ind = index + 1; ind < array.length; ind++) {
            chekNumRight += array[ind]
        }
        if (chekNumRight == chekNumLeft) {
            isEqual = true
            break
        }

    }
    if (isEqual) {
        console.log(currIndex);
    } else {
        console.log("no");
    }

} equalSum([1, 2, 3, 3])