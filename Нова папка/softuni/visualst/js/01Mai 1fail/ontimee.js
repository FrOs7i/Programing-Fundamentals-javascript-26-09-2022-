function ontime(input) {
    let examH = Number(input[0]);
    let examM = Number(input[1]);
    let arrH = Number(input[2]);
    let arrM = Number(input[3]);
    let examTimeInMin = examH * 60 + examM;
    let arrTimeInMin = arrH * 60 + arrM;
    let diff = Math.abs(arrTimeInMin - examTimeInMin);
    if (examTimeInMin < arrTimeInMin) {
        console.log(`Late`)

        if (diff >= 60){
            let h = Math.floor(diff / 60)
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else{
                console.log(`${h}:${m} hours after the start`);
            }
        }else{
            console.log(`${diff} minutes after the start`);
        }
    } else if (arrTimeInMin === examTimeInMin || examTimeInMin - arrTimeInMin <= 30) {
        console.log(`On time`);
    } else {
        console.log(`Early`);
    }
} ontime(["9", "00", "9", "09"])