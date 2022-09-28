function familyTrip(input) {
    let budjet = Number(input[0]);
    let timeSpend = Number(input[1]);
    let prPerNight = Number(input[2]);
    let sideSpend = Number(input[3]);
    
if(timeSpend>7){
    prPerNight=prPerNight*0.95
}
let timePay  = prPerNight*timeSpend;
let sidetottal=budjet*(sideSpend/100);
let tottalsum = sidetottal+timePay
let left = budjet-tottalsum
if(budjet>=tottalsum){
console.log(`Ivanovi will be left with ${left.toFixed(2)} leva after vacation.`);
}else{
    left=Math.abs(left)
    console.log(`${left.toFixed(2)} leva needed.`);
}

}familyTrip(["500","7","66","15"])