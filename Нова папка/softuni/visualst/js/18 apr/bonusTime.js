function bonusTime(input){
 let startScore = Number (input[0]);
 let bonus = 0.0 
 if(startScore <= 100){
     bonus = 5
 }else if(startScore > 1000){
     bonus = (startScore * 0.10)
 }else {
     bonus = (startScore * 0.20)
 }
 if(startScore % 2 == 0 ){
     bonus += 1;
 }else if(startScore % 10 == 5){
     bonus += 2;
 }
 console.log(bonus)
 console.log(startScore + bonus);
}
bonusTime(["15875"])