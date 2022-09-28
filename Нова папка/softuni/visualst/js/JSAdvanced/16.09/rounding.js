function rounding(toBeRounded,precision){
    if(precision>15){
        precision=15
    }
    let finalNumber = toBeRounded.toFixed(precision)
console.log(parseFloat(finalNumber));
}
rounding(3.141,20)