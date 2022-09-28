function printAndSum(num1,num2) {
    let furstRow="";
    let sum = 0;
    while (num1<=num2) {
        furstRow+=`${num1} `;
        sum+=num1
        num1++
    }
    console.log(furstRow);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)