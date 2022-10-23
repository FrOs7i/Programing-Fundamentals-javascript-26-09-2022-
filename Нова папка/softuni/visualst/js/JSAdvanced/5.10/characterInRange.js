function characterInRange(furstChar, secondChar) {
    result = ""
    let rangeStart = Math.min(furstChar.charCodeAt(),secondChar.charCodeAt())
    let rangeEnd = Math.max(furstChar.charCodeAt(),secondChar.charCodeAt())
    for (let currChar = rangeStart + 1; currChar < rangeEnd; currChar++) {
        if (currChar + 1 !== rangeEnd) {
            result += `${String.fromCharCode(currChar)} `
        } else {
            result += `${String.fromCharCode(currChar)}`
        }
    }

    console.log(result);
}
characterInRange(`:`, `#`)