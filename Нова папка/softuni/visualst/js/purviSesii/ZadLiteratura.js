function hello(input) {
    ;

    let pages = Number(input[0]);
    let ppHours = Number(input[1]);
    let days = Number(input[2]);
    let readTime = pages / ppHours;
    let hpDay =readTime / days;

console.log(hpDay);
}
hello(["432", "15", "4"])