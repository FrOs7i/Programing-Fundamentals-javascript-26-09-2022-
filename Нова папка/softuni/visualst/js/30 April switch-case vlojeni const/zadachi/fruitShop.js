function fruitShop(input){
let fruit = (input[0]);
let dayOfWeek = (input[1]);
let quantity = Number(input[2]);
let tottalsum = 0
if(dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek ==="Thursday" || dayOfWeek === "Wednesday" || dayOfWeek === "Friday"){
let banana = 2.50
let apple = 1.20
let orange = 0.85
let grapefruit =1.45
let kiwi = 2.70
let pineapple = 5.50
 let grapes = 3.85
 switch(fruit){
     case "banana" : tottalsum = (banana * quantity)
     console.log(tottalsum.toFixed[2])
 }

}else if (dayOfWeek === "Saturday" || dayOfWeek ==="Sunday"){
    let banana = 2.70
let apple = 1.25
let orange = 0.90
let grapefruit =1.60
let kiwi = 3.00
let pineapple = 5.60
 let grapes = 4.20
}
console.log(tottalsum.toFixed[2])
}
fruitShop(["banana","Monday","3"])