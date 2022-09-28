function demo(input) {
    
    let priceOfStrw = Number(input[0]);
    let amOfbanana = Number(input[1]);
    let amOfOrng = Number(input[2]);
    let amOfMal = Number(input[3]);
    let amOfStrw = Number(input[4]);
let prOfMal = priceOfStrw/2;
let prOfOrng = prOfMal * 0.60;
let prOfBanana = prOfMal*0.20;
let tottalsum = (prOfBanana*amOfbanana)+(prOfMal*amOfMal)+(prOfOrng*amOfOrng)+(priceOfStrw*amOfStrw)
 console.log(`${tottalsum.toFixed(2)}`);   
}demo(["63.5","3.57","6.35","8.15","2.5"])
