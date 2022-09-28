function examTime(input){
let izpitTimeH = Number(input[0]);
let izpitTimeM =  Number(input[1]);
let arrTimeH =  Number(input[2]);
let arrTiemM = Number(input[3]);
let time = (izpitTimeH*60) + izpitTimeM;
let arrtime = (arrTimeH*60) + arrTiemM;
diff = Math.abs(arrtime-time);
if(time >= arrtime && diff <= 30){
 console.log(`On time`)
 if(diff <= 60){
    if(diff < 10){
        diff = `0${diff}`
    }
    console.log(`${diff} minutes before the start`)
}else if(diff > 60){
   let diffM = diff % 60
   let diffH = Math.floor(diff / 60)
   let ttt = (`${diffH}:${diffM}`)
   if(diff < 10){
       diff = `0${diff}`
   }
    console.log(`${ttt} hours before the start`)
}
}else if(time >= arrtime && (time-arrtime) >30){

        console.log(`Early`);
        if(diff < 60){
            if(diff < 10){
                diff = `0${diff}`
            }
            console.log(`${diff} minutes before the start`)
        }else if(diff >= 60){
           let diffM = diff % 60
           let diffH = Math.floor(diff / 60)
           let ttt = (`${diffH}:${diffM}`)
           if(diff < 10){
            diff = `0${diff}`
        }
            console.log(`${ttt} hours before the start`)
        }      
}else if (time < arrtime){
console.log(`Late`);
if(diff <= 60){
    if(diff < 10){
        diff = `0${diff}`
    }
    console.log(`${diff} minutes after the start`)
}else if(diff > 60){
    if(diff < 10){
        diff = `0${diff}`
    }
   let diffM = diff % 60
   let diffH = Math.floor(diff / 60)
   let ttt = (`${diffH}:${diffM}`)
    console.log(`${ttt} hours after the start`)
}
}

}
examTime(["16","00","15","00"])