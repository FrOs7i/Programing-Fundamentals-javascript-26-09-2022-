function sumOfNum(input){
let targetsum=Number(input[0]);
let sum = 0
let index = 1
while(sum < targetsum){
    let currNumber=Number(input[index])
    sum+=currNumber;
    index++
}
console.log(sum);
}sumOfNum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

