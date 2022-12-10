function bossRush(input) {
    counter = 0
    let numberOfObjects = input.shift()
    let patern = /([\|])(?<name>[A-Z]{4,})([\|]):([#])(?<tittle>[A-Za-z]+ [a-zA-z]+)([#])/g
    let exec = patern.exec(input)
    let players = []
    while (counter < numberOfObjects) {
        if (exec) {
            let name = exec.groups[`name`]
            let currStr = name.length
            let tittle = exec.groups[`tittle`]
            let currArr = tittle.length

          let furstline=(`${name}, The ${tittle}`);
        let secondline=(`>> Strength: ${currStr}`)
               let thurdline=(`>> Armor: ${currArr}`)
               players.push(furstline)
               players.push(secondline)
               players.push(thurdline)

                exec = patern.exec(input)
        } else {
console.log(`Access denied!`);

        }
        counter++
    }
    players.forEach(element => {
        console.log(element);
    });
} bossRush([3, "|STEFAN|:#Lead architect#", "|GEORGE|:#High Overseer#", "|ALEX|:#Assistant Game Developer#"])