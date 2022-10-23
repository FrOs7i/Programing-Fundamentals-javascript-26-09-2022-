function equalArrays(arrayOne, arrayTwo) {
    let sum = 0
    let boolean =false
    for (let i = 0; i < arrayOne.length; i++) {
        let currNum1 = Number(arrayOne[i])
        let currNum2 = Number(arrayTwo[i])
        if (currNum1 == currNum2) {
            sum += currNum1
            boolean=true
        }else{
           console.log(`Arrays are not identical. Found difference at ${i} index`);
            boolean=false
            break
        }
    }
if(boolean){
    console.log(`Arrays are identical. Sum: ${sum}`);
}
}
equalArrays([10, 20, 30], [10, 20, 30])