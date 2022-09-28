function demo(input) {
    let index = 0
    let comand = Number(input[index]);
    index++
    for (let locations = 1; locations <= comand; locations++) {
        let tottalExcavated = 0
        let exAvgDig = Number(input[index]);
        index++
        let daysEx = Number(input[index]);
        index++
        for (let curDay = 1; curDay <= daysEx; curDay++) {
            let excavated = Number(input[index]);
            index++
            tottalExcavated += excavated

        }
        tottalExcavated = tottalExcavated / daysEx
        if (tottalExcavated >= exAvgDig) {
            console.log(`Good job! Average gold per day: ${tottalExcavated.toFixed(2)}.`);
        } else {
            let needed = Math.abs(exAvgDig - tottalExcavated)
            console.log(`You need ${needed.toFixed(2)} gold.`);
        }
        daysEx = 0
        exAvgDig = 0

    }



} demo(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])