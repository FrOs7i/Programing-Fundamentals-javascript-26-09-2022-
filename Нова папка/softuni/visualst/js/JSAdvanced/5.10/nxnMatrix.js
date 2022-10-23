function nxnMatrix(num) {
    let arr = []

    let rowGenerator = () => {          //arow function
        let singleRow = ``
        for (let k = 1; k <= num; k++) {
            singleRow += `${num} `
        }
        return singleRow
    }

    for (let i = 1; i <= num; i++) {

        arr.push(rowGenerator())
    }
    console.log(arr.join(`\n`));
}
nxnMatrix(3)







// let numToString=num.toString()+` `
// let printLine =numToString.repeat(num)
// for (let i = 1; i <= num; i++) {
//     console.log(printLine);
// }