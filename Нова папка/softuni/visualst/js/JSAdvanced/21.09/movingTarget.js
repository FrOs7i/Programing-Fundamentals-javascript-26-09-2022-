function movingTarget(input) {
    let targets = input
        .shift()
        .split(" ")
        .map(x => Number(x))

    let currLine = input.shift()
    while (currLine != "End") {
      //  const[comand,index,dmgDelt]=currLine.split(" "); 
        const lineArr = currLine.split(" ")
       const comand = lineArr[0]
        const index = Number (lineArr[1])
        const dmgDelt = Number (lineArr[2])
 switch (comand) {
    case "Shoot":
        targets[index]-=dmgDelt;
        if(targets[index]){
            if (targets[index]<=0) {
            targets.splice(index,1)
            
        }
    }
        break;
 
    case "Strike":
        const radius=dmgDelt
        const lowerIndex=index-radius
        const upperIndex=index+radius
        if(targets[lowerIndex] && targets[upperIndex]){
        targets.splice(lowerIndex,radius*2+1)
        }else{
            console.log("Strike missed!");
        }
        break;

        case "Add":
            if(targets[index]){
                targets.splice(index, 0 , power)
            }else{
                console.log("Invalid placement!");
            }
            break;
 }

        currLine = input.shift()
    }
    console.log(targets.join(`|`));
}
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"])