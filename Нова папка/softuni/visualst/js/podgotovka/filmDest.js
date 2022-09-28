function filmDest(input) {

    let budjet = Number(input[0]);
    let city = input[1];
    let seson = input[2];
    let days = Number(input[3]);
    let prcPrDay = 0
    switch (seson) {
        case "Winter":
            switch (city) {
                case "Dubai":
                    prcPrDay = 45000
                    break;
                case "Sofia":
                    prcPrDay = 17000
                    break;
                case "London":
                    prcPrDay = 24000
                    break;
            }
            break;
        case "Summer":
            switch (city) {
                case "Dubai":
                    prcPrDay = 40000
                    break;
                case "Sofia":
                    prcPrDay = 12500
                    break;
                case "London":
                    prcPrDay = 20250
                    break;
            }
            break;
    }
switch(city){
    case "Dubai":
tottalsum=(days*prcPrDay)*0.70
    break;
    case "Sofia":
        tottalsum=(days*prcPrDay)*1.25
    break;
default:
    tottalsum=days*prcPrDay
break;
}
    let left = budjet - tottalsum
    if (budjet >= tottalsum) {
        console.log(`The budget for the movie is enough! We have ${left.toFixed(2)} leva left!`);
    } else {
        left = Math.abs(left)
        console.log(`The director needs ${left.toFixed(2)} leva more!`);
    }

} filmDest(["200000", "London", "Summer", "7"])