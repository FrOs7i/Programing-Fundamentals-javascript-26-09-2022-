function onTime(input){
    let hoursExam =Number (input[0]);
    let minutesExam =Number (input[1]) ;
    let hoursArr =Number (input[2]) ;
    let minutesArr=Number (input[3]);
    let timeEx = hoursExam * 60 + minutesExam;
    let timeArr = hoursArr *60 + minutesArr;
     if(time < timeArr){
         console.log(`Late`);
     }else if(timeArr === timeEx || timeEx - timeArr <= 30){
         console.log(`On Time`);
     }else{
         console.log(`Early`);
     }

}onTime(["9","30","9","50"])