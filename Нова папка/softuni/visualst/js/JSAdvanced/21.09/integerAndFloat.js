function integerAndFloat(num1,num2,num3) {
    let sum =num1+num2+num3;
    let type =""
    if (Number.isInteger(sum)) {
        type = `Integerr`
    }else{
        type = `Float`
    }
    console.log(`${sum} - ${type}`);
}integerAndFloat(9,100,1.1)