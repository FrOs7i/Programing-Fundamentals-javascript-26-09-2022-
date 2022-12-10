function stringManipulator(input) {
    let textLine = input.shift()
    let tempMesage = ""

    while (input[0] !== "End") {
        let currComand = input.shift().split(" ")
        let comand = currComand[0]
        switch (comand) {
            case "Translate":
                let substring = currComand[1]
                let replacement = currComand[2]
                while (textLine.includes(substring)) {
                    tempMesage = textLine.replace(substring, replacement)
                    textLine = tempMesage
                }

                console.log(textLine);

                break;
            case "Includes":
                let substrings = currComand[1]
                if (textLine.includes(substrings)) {
                    console.log("True");
                } else {
                    console.log(`False`);
                }
                break;
            case "Start":
                let substringss = currComand[1]
                if (textLine.startsWith(substringss)) {
                    console.log(`True`);
                } else {
                    console.log("False");
                }
                break
            case "Lowercase":
                let tempLowerString = textLine.toLowerCase()
                textLine = tempLowerString
                console.log(textLine);
                break
            case "FindIndex":
                let char = currComand[1]
                let result = textLine.lastIndexOf(char)
                console.log(result);
                break
            case "Remove":
                let startIndex = Number(currComand[1])
                let endIndex = Number(currComand[2])
                let textForMod = textLine.split("")
                textForMod.splice(startIndex, endIndex)
                textLine = textForMod.join("")
                console.log(textLine);
                break
        }

    }

} stringManipulator([
    "*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End",
])