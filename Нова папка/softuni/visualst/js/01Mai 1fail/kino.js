function kino(input){
    let type =(input[0])
    let r =Number(input[1]) 
let c =Number(input[2])
let tottalsum = 0
let brSeats = r * c
let price = 0 
switch(type){
    case "Premiere" : 
     price = 12.00
    ;break;
    case "Normal" :
        price = 7.50
        ;break;
        case "Discount" :
            price = 5.00
            ;break;
}
tottalsum = (brSeats * price )
console.log(tottalsum.toFixed(2))
}
kino(["Normal","10","12"])