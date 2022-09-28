function demo(input) {
    let startNum =input[0];
    let endNum =input[1];

    let startNum1 = Number(startNum[0])
    let startNum2 = Number(startNum[1])
    let startNum3 = Number(startNum[2])
    let startNum4 = Number(startNum[3])
    let startNum5 = Number(startNum[4])
    let startNum6 = Number(startNum[5])
    let endNum1 = Number(endNum[0])
    let endNum2 = Number(endNum[1])
    let endNum3 = Number(endNum[2])
    let endNum4 = Number(endNum[3])
    let endNum5 = Number(endNum[4])
    let endNum6 = Number(endNum[5])
    let buff = "";
    for (let q = startNum1; q <= endNum1; q++) {
        for (let w = startNum2; w <= endNum2; w++) {
            for (let e = startNum3; e <= endNum3; e++) {
                for (let r = startNum4; r <= endNum4; r++) {
                    for (let t = startNum5; t <= endNum5; t++) {
                        for (let y = startNum6; y <= endNum6; y++) {
                            let oddsum = q + e + t;
                            let evensum = w + r + y
                            if (oddsum = evensum) {
                                buff = `${q}${w}${e}${r}${t}${y}`
                                console.log(buff);
                            }

                            
                        }
                    }
                }
            }
        }
    }

}
demo(["100000", "100050"])