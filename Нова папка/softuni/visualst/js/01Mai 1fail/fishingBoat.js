function fishingBoat(input) {
    let budget = Number(input[0])
    let season = (input[1])
    let brFishm = Number(input[2])
    let prcOfBoat = 0
    switch (season) {
        case "Summer":
            prcOfBoat = 4200
                ; break;
        case "Spring":
            prcOfBoat = 3000
                ; break;
        case "Autumn":  
            prcOfBoat = 4200
                ; break;
        case "Winter":
            prcOfBoat = 2600
                ; break;
    }
    if (brFishm <= 6 && season) {
prcOfBoat = prcOfBoat * 0.90
    } else if (brFishm >= 7 && brFishm <= 11) {
prcOfBoat = prcOfBoat * 0.85
    } else if (brFishm >= 12) {
prcOfBoat= prcOfBoat *0.75
    }
    if (brFishm % 2 == 0 && season !== "Autumn"){
        prcOfBoat = prcOfBoat * 0.95
    }
    if(budget >=prcOfBoat){
        let left = budget - prcOfBoat
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`)
    }else if( budget < prcOfBoat){
        let needed = prcOfBoat - budget
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`)
    }
}
fishingBoat(["3000", "Summer", "11"])