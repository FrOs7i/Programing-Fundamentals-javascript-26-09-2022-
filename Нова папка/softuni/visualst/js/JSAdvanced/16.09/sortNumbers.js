function sortNumbers(num1,num2,num3) {
for (let row = 0; row < sortNumbers.length; row++) {
    currRow=0
    if (num1>num2 && num1>num3) {
        currRow+=num1
    }else if(num2>num1 && num2>num3){
        currRowrow+=num2
    }else if(num3>num1 && num3>num2){
        currRow+=num3
    }
    console.log(currRow);
}
}
sortNumbers(2,1,3)