function zavurshvane(input) {
    let student = input[0]
    let grades = 1
    let index = 0
    let sum = 0
    let excluded = 0
while(grades <= 12){
    index++
    let grade=Number(input[index])
    if(grade >= 4){
        sum+=grade;
        grades++
    }else{
        excluded++
        break
    }
}
let avrgGrade=sum/12
if(excluded >= 1){
    console.log(`${student} has been excluded at ${grades} grade`);
}else{
    console.log(`${student} graduated. Average grade: ${avrgGrade.toFixed(2)}`);
}
}
 zavurshvane(["Mimizasa",
 "5",
 "6",
 "5",
 "6",
 "5",
 "6",
 "6",
 "4",
 "4"])
