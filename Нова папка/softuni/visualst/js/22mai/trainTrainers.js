function trainTrainers(input) {
    let index = 0
    let jury = Number(input[index])
    index++
    let command = input[index]
    index++
    let sumgrade=0
    let counter =0

    while (command !== "Finish") {
       let name= command
        let cursumgrade = 0
        counter++
        for (let i = 0; i < jury; i++) {
            let grade = Number(input[index])
            index++
            cursumgrade += grade
        }
        let curAvrg=cursumgrade/jury
        sumgrade+=curAvrg;
        console.log(`${name} - ${curAvrg.toFixed(2)}`);
        command = input[index]
        index++
    }
console.log(` Student's final assessment is ${(sumgrade/counter).toFixed(2)}.`);
}
trainTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])