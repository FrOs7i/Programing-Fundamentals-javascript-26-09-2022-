function demo(input) {
    let startNum = input[0];
    let endNum = input[1];
    let buf = ""
    for (let i = startNum; i <= endNum; i++) {
        let curentNum = i + ""
        let oddsum = 0
        let evensum = 0
        for (let index = 0; index < curentNum.length; index++) {
            let curentDig = Number(curentNum.charAt(index))
            if (index % 2 === 0) {
                evensum += curentDig
            } else {
                oddsum += curentDig
            }
        }
if(evensum===oddsum){
    buf+=`${curentNum} `
}
    }
console.log(buf);
} demo(["123456",
"124000"])