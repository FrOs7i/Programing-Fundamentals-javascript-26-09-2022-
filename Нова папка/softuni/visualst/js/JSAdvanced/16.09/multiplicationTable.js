function multiplicationTable(num) {
    let currRow="";
    for (let i = 1; i <=10; i++) {
        currRow=0
        for (let multipl = i; multipl<=i; multipl++) {
            let sum =num*multipl
            currRow+=`${num} X ${multipl} = ${sum}`
        }
        console.log(currRow);
    }
}
multiplicationTable(2)
