function godzillaVsKong(input){
let movieBudget = Number(input[0]);
let brStatisti = Number(input[1]);
let onestatistClothes = Number(input[2]);
let movieDecor = movieBudget * 0.10;
let tottalSumClothes = onestatistClothes * brStatisti
if(brStatisti > 150){
    let applyDiscount = (brStatisti * (onestatistClothes-(onestatistClothes * 0.10)))
 tottalSumClothes = applyDiscount 
}
let tottalsum = tottalSumClothes + movieDecor;
if(tottalsum > movieBudget){
    let moneyNeeded = Math.abs(movieBudget - tottalsum);
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
} else{
    let moneyLeft = (movieBudget - tottalsum);
    console.log("Action!");
    console.log (`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
}
}
godzillaVsKong(["9587.88","222","55.68"])