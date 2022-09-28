function demo(input) {

    let start = Number(input[0]);
    let end = Number = (input[1]);
    let sum = 0;
    let buff = "";
    for (let i = start; i <= end; i++){
        if (i % 9 === 0) {
            sum += i;
            // buff =buff + i + "\n";//"\n= nov red" //
           buff +=`${i}\n`        //the same as above
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);    
} demo(["100", "200"]) 