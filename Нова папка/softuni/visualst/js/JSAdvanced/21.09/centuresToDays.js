function centuresToDays(centurees) {
    let years=Math.floor(centurees*100)
    let days =Math.floor(years * 365.2422)
    let hours = Math.floor(days *24)
    let minutes=Math.floor(hours *60)
    console.log(`${centurees} centuries = ${Math.floor(years)} years = ${Math.floor(days)} days = ${Math.floor(hours)} hours = ${Math.floor(minutes)} minutes`);
}
centuresToDays(1)