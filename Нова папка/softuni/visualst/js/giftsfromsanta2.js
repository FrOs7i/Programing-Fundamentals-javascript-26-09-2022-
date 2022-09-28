function demo(input) {
    let n = Number(input[0])
    let m = Number(input[1])
    let s = Number(input[2])
    let buff = ""
    for (currAdres = m; currAdres >= n; currAdres--) {
        if (currAdres < 0) {
            break
        }
        if (currAdres % 2 === 0 && currAdres % 3 === 0) {
            if (currAdres === s) {
                break
            }
            buff += (`${currAdres} `)
        } 
    }
console.log(buff);
}
demo(["1", "36", "12"])