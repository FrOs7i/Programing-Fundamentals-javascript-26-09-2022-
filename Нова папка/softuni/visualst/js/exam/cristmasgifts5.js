function demo(input) {
    let index = 0
    let comand = input[index];
    let kidsNum = 0
    let adultsNum = 0
    let tottalMoneyToys = 0
    let tottalMoneySweathers = 0
    let prOfToy = 5
    let prOfSweathers = 15
    while (comand !== "Christmas") {
        comand = input[index]
        let age = Number(input[index]);

        if (age <= 16) {
            tottalMoneyToys += prOfToy
            kidsNum++
        } else if (age > 16) {
            tottalMoneySweathers += prOfSweathers
            adultsNum++
        }
        index++


    }
    console.log(`Number of adults: ${adultsNum}`);
    console.log(`Number of kids: ${kidsNum}`);
    console.log(`Money for toys: ${tottalMoneyToys}`);
    console.log(`Money for sweaters: ${tottalMoneySweathers}`);



} demo(["16",
    "16",
    "16",
    "16",
    "16",
    "Christmas"])
