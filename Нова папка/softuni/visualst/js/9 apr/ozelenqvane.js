function ozelenqvane(input){
    let area= Number(input[0]);
    let pricepkm=7.61
    let tottal = pricepkm * area;
    let discount = tottal * 0.18;
    let finalprice = tottal - discount;
    console.log(`The final price is ${finalprice} lv.`);
    console.log(`The discount is ${discount} lv.`)
}