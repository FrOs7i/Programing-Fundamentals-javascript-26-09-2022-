function mergeArrays(arrayOne, arrayTwo) {
    let resultArray = []
    let temporaryElement = ""
    for (let i = 0; i < arrayOne.length; i++) {
        if (i % 2 == 0) {
            temporaryElement = Number(arrayOne[i]) + Number(arrayTwo[i])
            resultArray.push(temporaryElement)
        } else {
            temporaryElement = arrayOne[i] + arrayTwo[i]
            resultArray.push(temporaryElement)
        }

    }
    console.log(resultArray.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']) 