function passwordValidator(password) {
    let digitsCounte = 0
    let passwordLength = password.length
    let isSymbol = false
    for (let i = 0; i < passwordLength; i++) {
        let charNum = password[i].charCodeAt()

        let isDigit = charNum >= 48 && charNum <= 57
        let isSmallLetter = charNum >= 97 && charNum <= 122
        let isBigLetter = charNum >= 65 && charNum <= 90

        if (isDigit) {
            digitsCounte++
        }
        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true
        }
    }
    if ( password.length < 6 || password.length > 10) { 
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (isSymbol) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (digitsCounte < 2) {
        console.log(`Password must have at least 2 digits`);
    }
    if (digitsCounte >= 2 && !isSymbol && (password.length >= 6 || password.length <= 10)) {
        console.log(`Password is valid`);
    }
}
passwordValidator(`login`)






// let digitCounter = 0
// let passwordLength = password.length
// let isValid = false
// let outputArray = []
// if (passwordLength >= 6 && passwordLength <= 10) {
//     isValid = true
// } else {
//     outputArray.push(`Password must be between 6 and 10 characters`)
// }
// for (let i = 0; i < passwordLength; i++) {

//     let charNumber = password[i].charCodeAt()
//     if (charNumber >= 48 && charNumber <= 57) {
//         digitCounter++
//     }
//     if(charNumber<=47 && charNumber>=58 && charNumber <65 && charNumber >90 && charNumber<97 &&charNumber>122){
//         isValid=false
//         outputArray.push(`Password must consist only of letters and digits`)
//     }
// }
// if (digitCounter < 2) {
//     isValid = false
//     outputArray.push(`Password must have at least 2 digits`)
// }
// if(isValid){
// console.log(`Password is valid`);
// }else{
// console.log(outputArray.join(`\n`));
// }