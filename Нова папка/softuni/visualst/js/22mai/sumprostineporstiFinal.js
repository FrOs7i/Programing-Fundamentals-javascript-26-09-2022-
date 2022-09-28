function demo(input) {
    let index = 0
    let comand = input[index];
    index++
    let sumPime = 0
    let sumNonPrime = 0
    while (comand !== "stop") {
        let num = Number(comand)
        if (num < 0) {
            console.log("Number is negative.");
            comand = input[index];
            index++
            continue;

        }
        if (num === 1) {
            sumPime += num;
            comand = input[index]
            index++
            continue
        }
        let isPrime = true;
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) {
            sumPime += num
        } else {
            sumNonPrime += num
        }
        comand = input[index];
        index++
    }
    console.log(`Sum of all prime numbers is: ${sumPime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
} demo(["30",

    "83",

    "33",

    "-1",

    "20",

    "stop"])