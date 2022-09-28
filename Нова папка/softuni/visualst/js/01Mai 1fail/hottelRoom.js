function hottelRoom(input) {
    let month = (input[0])
    let nights = (input[1])
    let studioPr = 0
    let appPr = 0
    let tottalsuma = 0
    let tottalsumSt = 0
    switch (month) {
        case "May":
            studioPr = 50;
            appPr = 65;
            tottalsumSt = nights * studioPr;
            tottalsuma = nights * appPr;
            if (nights > 7 && nights < 14) {
                tottalsumSt = tottalsumSt * 0.95;
            } else if (nights > 14) {
                tottalsuma = tottalsuma * 0.90;
                tottalsumSt = tottalsumSt * 0.70;
            }
            ; break;
        case "June":
            studioPr = 75.20;
            appPr = 68.70
            tottalsumSt = nights * studioPr;
            tottalsuma = nights * appPr;
            if (nights > 14) {
                tottalsumSt = tottalsumSt * 0.80
                tottalsuma = tottalsuma * 0.90
            }
            ; break;
        case "July":
            studioPr = 76;
            appPr = 77;
            tottalsumSt = nights * studioPr;
            tottalsuma = nights * appPr;
            if (nights > 14) {
                tottalsuma = tottalsuma * 0.90;
            }
            ; break;
        case "August":
            studioPr = 76;
            appPr = 77;
            tottalsumSt = nights * studioPr;
            tottalsuma = nights * appPr;
            if (nights > 14) {
                tottalsuma = tottalsuma * 0.90;
            }
            ; break;
        case "September":
            studioPr = 75.20;
            appPr = 68.70
            tottalsumSt = nights * studioPr;
            tottalsuma = nights * appPr;
            if (nights > 14) {
                tottalsumSt = tottalsumSt * 0.80;
                tottalsuma = tottalsuma * 0.90;
            }
            ; break;
        case "October":
            studioPr = 50;
            appPr = 65;
            tottalsumSt = nights * studioPr;
            tottalsuma = nights * appPr;
            if (nights > 7 && nights < 14) {
                tottalsumSt = tottalsumSt * 0.95;
            } else if (nights > 14) {
                tottalsuma = tottalsuma * 0.90;
                tottalsumSt = tottalsumSt * 0.70;
            }
            ; break;
    }
    console.log(`Apartment: ${tottalsuma.toFixed(2)} lv.`)
    console.log(`Studio: ${tottalsumSt.toFixed(2)} lv.`);
}
hottelRoom(["May", "15"])
