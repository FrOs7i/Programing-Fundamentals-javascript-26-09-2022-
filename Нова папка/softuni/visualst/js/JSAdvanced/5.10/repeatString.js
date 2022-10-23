function repeatString(text , count) {
    let resultString=""
    for (let i = 0; i <count ; i++) {
     resultString +=text
    }
    return resultString; 
}

console.log(repeatString("abc" , 3));