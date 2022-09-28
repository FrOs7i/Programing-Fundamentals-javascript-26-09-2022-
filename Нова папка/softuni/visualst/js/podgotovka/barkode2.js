function barkode(input) {
    let start = (input[0]);
    let finish = (input[1]);
    let printLine = ""
let startDigit1=Number(start[0])
let startDigit2=Number(start[1])
let startDigit3=Number(start[2])
let startDigit4=Number(start[3])
let finishDigit1=Number(finish[0])
let finishDigit2=Number(finish[1])
let finishDigit3=Number(finish[2])
let finishDigit4=Number(finish[3])
    for (let u = startDigit1; u <= finishDigit1; u++) {
        for (let i = startDigit2; i <= finishDigit2; i++) {
            for (let o = startDigit3; o <= finishDigit3; o++) {
                for (let p = startDigit4; p <= finishDigit4; p++) {
                    if (u % 2 !== 0 && i % 2 !== 0 && o % 2 !== 0 && p % 2 !== 0) {
                        printLine += `${u}${i}${o}${p} `
                    }
                }
            }
        }

    }
    console.log(printLine);
} barkode(["2345", "6789"])
