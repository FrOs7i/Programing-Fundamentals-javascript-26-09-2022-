function theImitationGame(input) {
    let arr = input.slice();
    let message = arr.shift()
    let currLine = arr.shift()
    let tempMesage=""
    while (currLine !== "Decode") {
        let tokens = currLine.split(`|`)
        let command = tokens.shift()
        switch (command) {
            case `Move`:
                let letersNumber = Number(tokens.shift())                //izrqzvame otpred i slagame nakraq
                let letersToMove = message.substring(0, letersNumber)                //izrqzvame otpred i slagame nakraq
                tempMesage = message.replace(letersToMove, "")                //izrqzvame otpred i slagame nakraq
                tempMesage += letersToMove                   //izrqzvame otpred i slagame nakraq
                message = tempMesage                 //izrqzvame otpred i slagame nakraq
                break;
            case `Insert`:
                let index = Number(tokens.shift())      //dobavqme sled daden indeks(prevrushatame ot strng-arr=strng)
                let values = tokens.shift()     //dobavqme sled daden indeks(prevrushatame ot strng-arr=strng)
                tempMesage = message.split("")      //dobavqme sled daden indeks(prevrushatame ot strng-arr=strng)
                tempMesage.splice(index, 0, values);        //dobavqme sled daden indeks(prevrushatame ot strng-arr=strng)
                message = tempMesage.join("")       //dobavqme sled daden indeks(prevrushatame ot strng-arr=strng)
                break;
            case `ChangeAll`:
                let substring = tokens.shift()          ///let res = new RegExp(`${substring}`,"g")
                let replacement = tokens.shift()            ///message=message.replace(res,replacement)
                while (message.includes(substring)) {           ///drug nachin za reshavane
                    tempMesage = message.replace(substring, replacement)            ///promenqme daden substring s drug
                    message = tempMesage            ///promenqme daden substring s drug
                }           ///promenqme daden substring s drug
                break;
        }
        currLine = arr.shift()
    }
    console.log(`The decrypted message is: ${message}`);
} theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])
