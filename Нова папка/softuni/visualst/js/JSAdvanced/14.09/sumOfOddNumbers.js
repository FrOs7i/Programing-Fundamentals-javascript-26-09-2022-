function sumOfOddNumbers(num) {
    i=1
    sum=0
    number=1
    while (i<=num) {
        if (number % 2 !== 0) {
            console.log(number);
            sum+=number
            
        }
        number+=2
        i++
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)