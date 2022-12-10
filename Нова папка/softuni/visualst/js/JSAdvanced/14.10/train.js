function train(arr) {
    let pasangersInTrain = arr.shift().split(` `).map(Number) ///vzimame purvoto sled tova go pravim na arr sled tova go pravim na Number
    let maxCapacyti = Number(arr.shift())
    let arrLength = arr.length

    for (let index = 0; index < arrLength; index++) {
        ///vzima opreciite i stoinostite ot masiva
        let curentRow = arr[index].split(` `)

        if (curentRow[0] === `Add`) {
            let newWagon = Number(curentRow[1])
            pasangersInTrain.push(newWagon)
        } else {

            for (let i = 0; i < pasangersInTrain.length; i++) {
                let passInCurr = pasangersInTrain[i]
                if (passInCurr + Number(curentRow[0]) <= maxCapacyti) {
                    pasangersInTrain[i] += Number(curentRow[0])
                    break;
                }

            }
        }

    }
    console.log(pasangersInTrain.join(` `));
}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])