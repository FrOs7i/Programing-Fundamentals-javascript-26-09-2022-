function obednapuchivka(input){
 let nameOfSeries = (input[0]);
 let lenghtOfSeeries = Number(input[1]);
 let lenghtOfRest = Number(input[2]);
let lunchTime = lenghtOfRest / 8 ;
let relaxTime = lenghtOfRest / 4;
let tottalNeededtime = (relaxTime + lunchTime + lenghtOfSeeries);
let abs =(lenghtOfRest - tottalNeededtime);
if (abs >=  0){
console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(abs)} minutes free time.`)

}else{
    abs = Math.abs(abs)
    console.log (`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(abs)} more minutes.`)
}
}
obednapuchivka (["Teen Wolf","48","60"])