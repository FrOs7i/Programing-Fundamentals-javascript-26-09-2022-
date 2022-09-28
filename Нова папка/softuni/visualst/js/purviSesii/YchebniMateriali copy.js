function uchebnimateriali (input){;
let pens = Number (input[0] * 5.8);
let markers = Number (input[1] * 7.2);
let chemichal = Number (input[2] * 1.2);
let price = chemichal + markers + pens;
let disscount = Number (input[3]/100);
let totalPrice = price - (price * disscount);

console.log(totalPrice);

}
uchebnimateriali(["2","3","4","25"])