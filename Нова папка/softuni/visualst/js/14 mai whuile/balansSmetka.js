function balansSmetka(input) {
    // let index = 0
    // let tottalSum = 0
//     let currinput = input[index]
//     while (currinput !== "NoMoreMoney") {
//         let inputAsNumber = Number(currinput)
//         if (currinput < 0) {
//             console.log("Invalid operation!");
//             break
//         }
//         tottalSum += inputAsNumber
//         console.log(`Increase : ${inputAsNumber.toFixed(2)}`);
// index++
// currinput=input[index]
//     }
//     console.log(`Tottal: ${tottalSum.toFixed(2)}`);
//                                                                  ///reshenie s while
let tottalSum = 0
for(let index=0;index < input.length;index++){
    let currInput=input[index]
    if(currInput === "NoMoreMoney"){
        break
    }
    let inputAsNumber=Number(currInput);
    if(inputAsNumber <0){
        console.log("Invalid operation!");
        
    }
    tottalSum+=inputAsNumber
    console.log(`Increase : ${inputAsNumber.toFixed(2)}`);
}
console.log(`Tottal: ${tottalSum.toFixed(2)}`);
}                                                       ///alt reshenie s for

balansSmetka(["120",
"45.55",
"-100","150",])
