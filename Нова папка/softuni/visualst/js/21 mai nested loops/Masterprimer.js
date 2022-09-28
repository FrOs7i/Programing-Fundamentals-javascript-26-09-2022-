function nestedLoops(input) {
    let points = 0
    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= 6; col++) {
            if ((col === 4) && (row === 1)) {
                points += 20
            } else if (col === 2 && (row === 3)) {
                points += 20
            } else if (col === 5 && row === 2) {
                continue;
            }else if(col===5&&row===1)
            {
                break;
            } else {
                points++
            }
        }
    }
    console.log(points);
}
nestedLoops("")
