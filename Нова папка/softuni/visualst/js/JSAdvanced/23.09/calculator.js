function calculator(num1,operator,num2) {
    let num1ToString=num1.toString()
    let num2ToString=num2.toString()
    let mainString = `${num1ToString}  ${operator}  ${num2ToString}`
    console.log(eval(mainString).toFixed(2))
}
calculator(5,"+",100)