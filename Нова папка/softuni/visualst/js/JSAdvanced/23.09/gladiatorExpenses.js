function gladiatorExpenses(lostFights, helmetPr, swordPr, shieldPr, armorPr) {
    let tottalPrice = 0
let shieldCount=0
    for (let index = 1; index <= lostFights; index++) {
        if (index % 2 == 0 || index % 3 === 0) {
            if (index % 2 == 0) {
                tottalPrice += helmetPr
            }
            if (index % 3 === 0) {
                tottalPrice+=swordPr
            }
            if (index  % 2 == 0 && index%3==0) {
                tottalPrice+=shieldPr
                shieldCount++
            }
            if (shieldCount % 2 == 0 && shieldCount !== 0) {
                tottalPrice+=armorPr
                shieldCount=0
            }


        }
    }
    console.log(`Gladiator expenses: ${tottalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23,12.5,21.5,40,200)