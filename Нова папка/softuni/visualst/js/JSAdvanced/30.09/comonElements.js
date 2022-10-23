function comonElements(arrayOne, arrayTwo) {

    for (let i = 0; i < arrayOne.length; i++) {
        let currElement = arrayOne[i]
        let isSame=arrayTwo.includes(currElement)
        if (isSame) {
            console.log(currElement);
        }
    }
}
comonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])