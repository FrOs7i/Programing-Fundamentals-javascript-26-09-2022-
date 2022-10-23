function maxNumber(arr) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isBiger = true
        let currNum = arr[i]
        for (let index = i + 1; index < arr.length; index++) {
            if (currNum <= arr[index]) {
                isBiger = false
            }
        }
        if (isBiger) {
            resultArray.push(arr[i])
        }
    }
    console.log(resultArray.join(" "));
}
maxNumber([1, 4, 3, 2])