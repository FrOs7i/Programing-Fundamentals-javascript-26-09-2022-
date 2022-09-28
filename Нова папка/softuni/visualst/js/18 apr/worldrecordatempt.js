function worldrecordatempt(input){
 let worldRecord = Number(input[0]);
 let distanceInMeters = Number(input[1]);
 let speedInMetres = Number(input[2]);
 let time =(distanceInMeters * speedInMetres)
 let dellayTimes = Math.floor(distanceInMeters / 15);
let tottalDellayTime = (dellayTimes * 12.5);
let contestTime = time + tottalDellayTime
if(contestTime < worldRecord){

console.log (`Yes, he succeeded! The new world record is ${contestTime.toFixed(2)} seconds.`);

}else{
    let secondsSlower = Math.abs(worldRecord - contestTime);
    console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`)
}

} 

worldrecordatempt(["55555.67","3017","5.03"]);