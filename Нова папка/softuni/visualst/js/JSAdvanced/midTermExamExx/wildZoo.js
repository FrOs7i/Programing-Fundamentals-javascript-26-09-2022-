function wildZoo(input) {
    let currLine=input.shift()
    let animals={}
    let finalLines=[]
    while (currLine !=="EndDay") {
let tempcommand=currLine.split(": ")
let command=tempcommand.shift()
let tempStats=tempcommand[0].split("-")
let animalName=tempStats[0]
let neededFoodQuantyti=Number(tempStats[1])
let locationOfAnimal=tempStats[2]
if (finalLines.includes(animalName)) {
    finalLines.neededFoodQuantyti+=neededFoodQuantyti
}else{
animals={animalName,neededFoodQuantyti,locationOfAnimal}
finalLines.push(animals)
}
console.table(animals)
console.log(command);
console.log(tempStats);
console.log(animals);
        currLine=input.shift()
    }
    
}wildZoo(["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay",])