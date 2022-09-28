function barkode(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let printLine = ""
    let startDigit1 = Math.floor((start / 1000) % 10)//puvos
    let startDigit2 = Math.floor((start / 100) % 10)//vtoros
    let startDigit3 = Math.floor((start / 10) % 10)//tretos
    let startDigit4 = Math.floor(start % 10)//chetvurtos

    let finishDigit1 = Math.floor((finish / 1000) % 10)//purvof
    let finishDigit2 = Math.floor((finish / 100) % 10)//vtorof
    let finishDigit3 = Math.floor((finish / 10) % 10)//tretoof
    let finishDigit4 = Math.floor(finish % 10)//cetvf

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
