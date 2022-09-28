function demo(input) {
    let data = input[0];
    let sum = 0;
    for (let index = 0; index < data.length; index++) {
        let currentNumber = Number(data[index]);//
        sum = sum + currentNumber;//sum +=Number(data[index])

    }
    console.log(sum)
} demo(["1234"])