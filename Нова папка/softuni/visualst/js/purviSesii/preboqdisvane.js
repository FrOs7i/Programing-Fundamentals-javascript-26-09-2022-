function predoqdisvane(input) {
    ;
    let nailonPrice = 1.5;
    let paintPrice = 14.5;
    let thinner = 5;
    let bag = 0.4;

    let nailonUsage = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let thinnerAmmount = Number(input[2]);
    let manHours = Number(input[3]);

    nailonUsage = nailonUsage + 2;
    paintNeeded = paintNeeded * 1.10;

    let sumnailon = nailonUsage * nailonPrice;
    let sumpaint = paintNeeded * paintPrice;
    let sumthinner = thinner * thinnerAmmount;
    let consumablesPrice = sumnailon + sumpaint + sumthinner + bag;
    let hourlyRate = consumablesPrice * 0.3;
    let builderSalary = hourlyRate * manHours;
    let tottalSum = builderSalary + consumablesPrice;
    console.log(builderSalary)
    console.log(hourlyRate)
    console.log(tottalSum)

}
predoqdisvane(["5", "10", "10", "1"]);