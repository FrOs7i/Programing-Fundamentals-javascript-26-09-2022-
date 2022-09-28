function opersChisla(input) {
    let numOne = Number(input[0])
    let numTwo = Number(input[1])
    let specChr = (input[2])
    let evenOdd = ""
    let left = 0
    if(numTwo ==0){
        console.log(`Cannot divide ${numOne} by zero`)
}else{
    switch (specChr) {
        case "+":
            tottal = numOne + numTwo
            if ((tottal % 2) == 0) {
                evenOdd = "even"
            } else if ((tottal % 2) !== 0) {
                evenOdd = "odd"
            }
            console.log(`${numOne} ${specChr} ${numTwo} = ${tottal} - ${evenOdd}`)
                ; break;
        case "-":
            tottal = numOne - numTwo
            if ((tottal % 2) == 0) {
                evenOdd = "even"
            } else if ((tottal % 2) !== 0) {
                evenOdd = "odd"
            }
            console.log(`${numOne} ${specChr} ${numTwo} = ${tottal} - ${evenOdd}`)
                ; break;
        case "*":
            tottal = numOne * numTwo
            if ((tottal % 2) == 0) {
                evenOdd = "even"
            } else if ((tottal % 2) !== 0) {
                evenOdd = "odd"
            }
            console.log(`${numOne} ${specChr} ${numTwo} = ${tottal} - ${evenOdd}`)
                ; break;
        case "/":
left = numOne / numTwo ;
console.log(`${numOne} ${specChr} ${numTwo} = ${left.toFixed(2)}`)
            ; break;
        case "%":
left = numOne % numTwo
console.log(`${numOne} ${specChr} ${numTwo} = ${left}`)
            ; break;
    }
}
}
opersChisla(["123", "12", "/"])