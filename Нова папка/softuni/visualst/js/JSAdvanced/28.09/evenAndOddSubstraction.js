function evenAndOddSubstraction(numbers) {
    let sumEven=0
    let sumOdd=0
    let result=0
        for(let number of numbers){
            if (number%2 ==0) {
                sumEven+=number
            }else{
                sumOdd+=number
            }
        }
result=sumEven-sumOdd;
console.log(result);        
}
evenAndOddSubstraction([3,5,7,9])