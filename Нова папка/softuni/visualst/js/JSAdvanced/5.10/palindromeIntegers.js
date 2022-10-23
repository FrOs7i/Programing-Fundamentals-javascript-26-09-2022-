function palindromeIntegers(numberArray) {
    let numberArrayLength = numberArray.length
    for (let i = 0; i < numberArrayLength; i++) {
        let numberAsString = numberArray[i].toString() ///zad chisloto ot daden indeks kum STRING promenliva
        let reversedString = numberAsString.split(``).reverse().join(``)      //split ot string na array //reverse obrushta array //join vrushta  na string
        if (numberAsString === reversedString) {            /// sravnqvame i zadave rezultat
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([123, 323, 421, 121])