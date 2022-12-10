function plantDiscoveries(input) {
    //input data
    let plantCount = Number(input.shift())
    let plants = {}
    for (let i = 0; i < plantCount; i++) {
        let plant = input.shift()
        let [plantName, rarity] = plant.split(`<->`)
        plants[plantName] = {
            rarity: rarity,
            ratings: [],
        }
    }
    let command = input.shift()
    while (command !== `Exhibition`) {
        let [comandName, args] = command.split(`: `)
        let [plantName, argument] = args.split(` - `)
        if (plants[plantName]) {
            switch (comandName) {
                case "Rate":
                    let rating = Number(argument)
                    plants[plantName].ratings.push(rating)
                    break;
                case `Update`:
                    let rarity = Number(argument)
                    plants[plantName].rarity = rarity
                    break;
                case `Reset`:
                    plants[plantName].ratings = []
                    break
            }
        } else {
            console.log(`error`);
        }
        command = input.shift()
    }

    let plantEntries = Object.entries(plants);
    plantEntries.sort((a, b) => {
        let result = (b[1].rarity - a[1].rarity)
        if (result ==0) {
             let averageA =calculateRatings(a[1].ratings)
             let averageB = calculateRatings(b[1].ratings)
             return averageB-averageA 
        }
        return result
    })
        console.log(`Plants for the exibition:`);
        for  (const [plantName, plant] of plantEntries) {
            let averageRating = calculateRatings(plant.ratings)
            console.log(`- ${plantName}; Rarity ${plant.rarity}; Rating: ${averageRating.toFixed(2)}`);
        }

        function calculateRatings(ratings) {
            let sum = 0
            for (const rating of ratings) {
                sum += rating
            }
            let averageRating = sum / ratings.length
            if (!averageRating) {
                averageRating = 0
            }
            return averageRating
        }
        //  console.table(plants);
    } plantDiscoveries(["3",

        "Arnoldii<->4",

        "Woodii<->7",

        "Welwitschia<->2",

        "Rate: Woodii - 10",

        "Rate: Welwitschia - 7",

        "Rate: Arnoldii - 3",

        "Rate: Woodii - 5",

        "Update: Woodii - 5",

        "Reset: Arnoldii",

        "Exhibition"])