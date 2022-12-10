function friendlistMaintanance(params) {
    let blacklistedCount = 0
    let lostCount = 0
    let friendsList = params.shift()
    let splitedArr = friendsList.split(`,`)
    paramsLength = params.length
    for (const el of params) {
        let currEl = el.split(``)
        if (currEl.includes(`B`,`l`,`a`,`c`,`k`,`l`,`i`,`s`,`t`,`e`,`d`)) {
            let curName = el.slice(10)
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
        } else if (currEl.includes(`E`,`r`,`r`,`o`,`r`)) {
            let transformed = el.split(` `)
            let curIndex = Number(transformed.slice(1))
            if (curIndex >= 0 && curIndex < splitedArr.length && splitedArr[curIndex] !== "Blacklisted" && splitedArr[curIndex] !== ` Lost`) {
                let lostName = splitedArr[curIndex]
                let reslostName=lostName.split(``)
                reslostName.shift()
                let lostNameString=reslostName.join(``)
                splitedArr.splice(curIndex, 1,` Lost`)
                console.log(`${lostNameString} was lost due to an error.`);
                lostCount++
            } else {
            }
        } else if (currEl.includes(`C`,`h`,`a`,`n`,`g`,`e`)) {
            let curIndex = Number(el.slice(7, 8))
            let tempName = el.slice(9)
            if (curIndex >= 0 && curIndex < splitedArr.length) {
                console.log(`${splitedArr[curIndex]} changed his username to ${tempName}.`);
                splitedArr.splice(curIndex, 1, tempName)

            }
        } else if (el === `Report`) {
            console.log(`Blacklisted names: ${blacklistedCount}`);
            console.log(`Lost names: ${lostCount}`);
            console.log(splitedArr.join(``));
        }
    }
}
friendlistMaintanance(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"])
