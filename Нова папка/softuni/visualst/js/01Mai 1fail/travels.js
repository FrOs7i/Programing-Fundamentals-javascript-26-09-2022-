function travels(input) {
    let budget = Number(input[0])
    let season = (input[1])
    let destination = ""
    let tottalprice = 0
    let tipeOfTrip = ""
    if (budget <= 100) {
        destination = "Bulgaria"
        switch (season) {
            case "summer":
                tottalprice = budget * 0.30
                tipeOfTrip = "Camp"
                    ; break;
            case "winter":
                tottalprice = budget * 0.70
                tipeOfTrip = " Hotel"
                    ; break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        switch (season) {
            case "summer":
                tipeOfTrip = "Camp"
                tottalprice = budget * 0.40
                    ; break;
            case "winter":
                tipeOfTrip = "Hotel"
                tottalprice = budget * 0.80
                    ; break;
        }
    } else if (budget > 1000) {
        destination = "Europe"
        switch (season) {
            case "summer":
                tottalprice = budget * 0.90
                tipeOfTrip = "Hotel"
                    ; break;
            case "winter":
                tipeOfTrip = "Hotel"
                tottalprice = budget * 0.90
                    ; break;
        }
    }
console.log(`Somewhere in ${destination}`)
    console.log(`${tipeOfTrip} - ${tottalprice.toFixed(2)}`)
}
 travels(["50", "summer",])