function newHome(input) {
    let typeOffllower = (input[0])
    let numberOffl = Number(input[1])
    let budget = Number(input[2]);
    let tottalprice = 0;
    let prOfFlr = 0
    switch (typeOffllower) {
        case "Roses":
            prOfFlr = 5.00;
            tottalprice = (numberOffl * prOfFlr)
            if (numberOffl > 80) {
                tottalprice = (tottalprice * 0.90);
            }
            ; break;
        case "Dahlias":
            prOfFlr = 3.80;
            tottalprice = (numberOffl * prOfFlr)
            if (numberOffl > 90) {
                tottalprice = (tottalprice * 0.85);
            }
            ; break;
        case "Tulips":
            prOfFlr = 2.80;
            tottalprice = (numberOffl * prOfFlr)
            if (numberOffl > 80) {
                tottalprice = (tottalprice * 0.85);
            }
            ; break;
        case "Narcissus":
            prOfFlr = 3.00;
            tottalprice = (numberOffl * prOfFlr)
            if (numberOffl < 120) {
                tottalprice = (tottalprice * 1.15);
            }
            ; break;
        case "Gladiolus":
            prOfFlr = 2.50;
            tottalprice = (numberOffl * prOfFlr)
            if (numberOffl < 80) {
                tottalprice = (tottalprice * 1.20);
            }
            ; break;
    }
    if (budget >= tottalprice) {
        let left = (budget - tottalprice)
        console.log(`Hey, you have a great garden with ${numberOffl} ${typeOffllower} and ${left.toFixed(2)} leva left.`)
    } else {
        let needed = Math.abs(tottalprice - budget)
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`)


    }


}
newHome(["Tulips", "88", "260"])