function foodDelivery(input) {
    ;
let deliveryFee = 2.5;
    let chickenPrice = 10.35;
    let fishPrice = 12.4;
    let = veganPrice = 8.15;
let chicken = Number (input[0]);
let  fish = Number (input[1]);
let vegan = Number (input[2]);
let total = vegan*veganPrice+chicken*chickenPrice+fish*fishPrice;
    let desert = total*0.2;
    let finalAmount = total+desert+deliveryFee
    console.log(finalAmount)
} 
foodDelivery(["2","4","3"])