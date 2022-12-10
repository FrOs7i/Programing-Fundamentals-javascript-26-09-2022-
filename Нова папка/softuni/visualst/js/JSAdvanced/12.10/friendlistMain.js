function friendlistMain(params) {
    let blacklistedCount = 0
    let lostCount = 0
    let friendsList = params.shift()
    let splitedArr = friendsList.split(`,`)
    paramsLength = params.length
    for (const el of params) {
        let splitedEll = el.split(` `)
        switch (splitedEll[0]) {
            case `Blacklist`:
                let curName = splitedEll[1]
                if (friendsList.includes(curName)) {
                    let indexForChange = friendsList.indexOf(`${curName}`)

                    if (indexForChange !== -1) {
                        splitedArr.splice(indexForChange, 1, `Blacklisted`)
                        blacklistedCount++
                    }
                    console.log(`${curName} was blacklisted.`);

                } else {
                    console.log(`${curName} was not found.`);
                }
                break;
            case `Error`:
                if (splitedEll[1] >= 0 && splitedEll[1] < splitedArr.length && splitedArr[splitedEll[1]] !== "Blacklisted" && splitedArr[splitedEll[1]] !== ` Lost`) {
                    let lostName = splitedArr[splitedEll[1]]
                    let reslostName = lostName.split(``)
                    reslostName.shift()
                    let lostNameString = reslostName.join(``)
                    splitedArr.splice(splitedEll[1], 1, ` Lost`)
                    console.log(`${lostNameString} was lost due to an error.`);
                    lostCount++
                }
                break
            case `Change`:
                let currIndex = Number(splitedEll[1])
                let tempName = splitedEll[2]
                if (currIndex >= 0 && currIndex < splitedArr.length) {
                    console.log(`${splitedArr[currIndex]} changed his username to ${tempName}.`);
                    splitedArr.splice(splitedEll[1], 1, tempName)

                }
                break;
            case `Report`:
                console.log(`Blacklisted names: ${blacklistedCount}`);
                console.log(`Lost names: ${lostCount}`);
                console.log(splitedArr.join(``));
                break
        }
    }
}
friendlistMain(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])
