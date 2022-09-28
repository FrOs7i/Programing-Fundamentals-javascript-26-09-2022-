function spaceship(input) {
    let shipWidth=Number(input[0]);
    let shipLenght =Number(input[1]);
    let shipHight = Number(input[2]);
    let astrnHeight =Number(input[3])
    let shipVol=shipHight*shipLenght*shipWidth
    let roomVol=(astrnHeight+0.40)*2*2
    let availableRooms= Math.floor(shipVol/roomVol)
    if(availableRooms >=3 &&availableRooms<=10){
console.log(`The spacecraft holds ${availableRooms} astronauts.`);
    }else if(availableRooms<3){
console.log("The spacecraft is too small.");
    }else if(availableRooms > 10){
console.log("The spacecraft is too big.");
    }
}spaceship(["3",
"3", 
"4",
"1.68"])