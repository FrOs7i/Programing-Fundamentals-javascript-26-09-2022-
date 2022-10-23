function addAndSubtract(num1, num2, num3) {
    function add(num1, num2) {
        let sumOfTwoNumbers = num1 + num2
        return sumOfTwoNumbers
    }
    let sum = add(num1, num2)
    function subtract(num1, num2) {
        sutractOfTwoNumbers = num1 - num2
        return sutractOfTwoNumbers
    }
    console.log(subtract(sum, num3))
}
addAndSubtract(10, 6, 10) 