function petfood(input){
    let dogFood= Number(input[0]); 
    let catFood= Number(input[1]); 
    let catPr= 4
    let dogPr = 2.5
    let tottal = dogFood * dogPr + catFood*catPr;
    console.log(`${tottal} lv.`)
}
petfood(["5","7"])