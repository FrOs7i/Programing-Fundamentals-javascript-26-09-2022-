function podarucikoleda(input) {
    let n = Number(input[0])
    let m = Number(input[1])
    let s = Number(input[2])
    let buff = ""
    for (let i = m; m >= n; i--) {
        if (i === 0) {
            break
        }
        if (i % 2 === 0 && i % 3 === 0) {
            if (i === 0) {
                break
            }
            if (i === s) {
                break
            }
            buff += `${i} `

        }

    }

    console.log(buff);
} podarucikoleda(["1",
"36",
"12"])