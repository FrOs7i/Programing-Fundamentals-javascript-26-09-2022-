function timePlus(input){
    let hours = Number (input[0])
let minutes = Number (input[1])
let timeInMinutes = ((hours * 60) + (minutes) + 15)
let calcHours = Math.floor(timeInMinutes / 60)
let calcMinutes = (timeInMinutes % 60)
if(calcHours >= 24){
    calcHours = calcHours - 24
}
if(calcMinutes > 59){
    calcMinutes = 0
    calcHours += 1 
}
if(calcMinutes < 10){
    calcMinutes = (`0${calcMinutes}`)
}
console.log(`${calcHours}:${calcMinutes}`)
}
timePlus(["23","59"])