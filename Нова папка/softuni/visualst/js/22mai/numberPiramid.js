function numberPiramid(input) {
    let start = Number(input[0])
    let current = 1
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows = 1; rows <= start; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > start) {
                isBigger = true;
                break
            }
            printCurrentLine += current + " ";
            current++
        }
        console.log(printCurrentLine);
        printCurrentLine = ""
        if (isBigger) {
            break;
        }
    }
} numberPiramid(["91"])