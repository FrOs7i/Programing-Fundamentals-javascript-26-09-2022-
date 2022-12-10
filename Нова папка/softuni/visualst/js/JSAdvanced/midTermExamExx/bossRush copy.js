function bossRush(input) {
  let counter=0
    let numberOfObjects = input.shift()
    let item=input.slice().join("")
    let patern = /([\|])(?<name>[A-Z]{4,})([\|]):([#])(?<tittle>[A-Za-z]+ [a-zA-z]+)([#])/g
    let curentplayer=input.shift()
    let exec=patern.exec(curentplayer)
    let players=[]
while (counter<numberOfObjects) {
console.table(exec);
let name=exec.groups.name
let tittle=exec.groups.tittle
 curentplayer=input.shift()
   exec=patern.exec(curentplayer)
   counter++
}


} bossRush([3, "|PETER|:#Lead architect#", "|GEORGE|:#High Overseer#", "|ALEX|:#Assistant Game Developer#"])