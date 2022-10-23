function arrayRotation(array, rottations) {

    for (let i = 0; i < rottations; i++) {
        let furstElement = array[0]
        for (let innerI = 0; innerI < array.length; innerI++) {
            array[innerI] = array[innerI + 1]
        }
        array[array.length - 1] = furstElement
    }
    console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)