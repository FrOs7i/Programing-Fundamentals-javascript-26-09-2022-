function pirates(input) {
    let cities = {}
    let array = []
    while (input[0] !== `Sail`) {
        let command = input.shift().split(`||`)
        let city = command[0]             //vzimame si informaciqta sled spl-ita
        let population = Number(command[1])               //vzimame si informaciqta sled spl-ita
        let gold = Number(command[2])             //vzimame si informaciqta sled spl-ita
        let result = array.find((x) => x.city === city)   //proverqva dali tozi grad veche go ima boolean stoinost
        let index = array.indexOf(result)
        if (result) {                //updeitvame neinite stoinosti ili go suzdavame ako go nqma
            array[index].population += population///i ponijavame stoinostite mu
            array[index].gold += gold
        } else {
            cities = { city, population, gold }
            array.push(cities)///ako go nqma go dobav
        }
    }
    while (input[0] !== `End`) {                //proverqvame comandite
        let comands = input.shift().split(`=>`);
        let currentComand = comands.shift()
        switch (currentComand) {
            case `Plunder`:
                let cityName = comands[0]
                let population = Number(comands[1])
                let gold = Number(comands[2])
                console.log(`${cityName} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                let result = array.find((x) => x.city === cityName)
                let index = array.indexOf(result)
                array[index].population -= population
                array[index].gold -= gold
                if (array[index].population <= 0 || array[index].gold <= 0) {
                    array.splice(index,1)
                    console.log(`${array[index].cityName} has been wiped off the map!`);

                }
                break;
            case `Prosper`:
                let town = comands[0]
                let tresure = Number(comands[1])
                if (tresure < 0) {
                    console.log(`Gold added cannot be a  negative number!`);
                } else {
                    let result = array.find((x) => x.city === town)
                    let index = array.indexOf(result)
                    array[index].gold += tresure
                    console.log(`${tresure} gold added to the city treasury. ${town} now has ${array[index].gold} gold.`);
                }
                break;
        }
    }
    if (array.length !== 0) {
        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);
        array.forEach(t => console.log(`${t.city} -> Population: ${t.population} citizens, Gold: ${t.gold} kg`))
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
} pirates(["Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End"])