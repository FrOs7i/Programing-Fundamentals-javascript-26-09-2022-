function addAstra(input) {
    let pattern = /([\|])(?<name>[A-Z]{4,})([\|]):([#])(?<tittle>[A-Za-z]+ [a-zA-z]+)([#])/gm
    let exec = pattern.exec(input)
    let tottalkcal = 0
    let productsStore = []
    while (exec) {
        let name = exec.groups[`name`]
        let date = exec.groups[`date`]
        let kcal = exec.groups[`kcal`]

        tottalkcal += Number(kcal)
        let currProductData = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`
        productsStore.push(currProductData)         //zapazvame stoinostite na shablon v arr
        exec = pattern.exec(input)
    }
    let tottaldays = Math.floor(tottalkcal / 2000)
    console.log(`You have food to last you for: ${tottaldays} days!`);
    productsStore.forEach(p => console.log(p))        //printira ot array vsichko na nov red
} addAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])