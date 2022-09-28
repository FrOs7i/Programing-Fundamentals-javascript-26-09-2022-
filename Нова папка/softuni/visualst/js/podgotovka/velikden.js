function velikden(input) {
    let playerOne = Number(input[0]);
    let platerTwo = Number(input[1]);
    let index = 2
    let winner = input[index]
    while (winner !== `End`) {
        if (winner === "one") {
            platerTwo -= 1
        } else if (winner === "two"){
            playerOne -= 1
        }
        if(playerOne === 0){
            console.log(`Player one is out of eggs. Player two has ${platerTwo} eggs left.`);
       break;
        }
         if(platerTwo ===0){
            console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
        break
        }
        index++;
    winner=input[index]
    }
    if(winner==="End"){
        
        console.log(`Player one has ${playerOne} eggs left.`);
    console.log(`Player two has ${platerTwo} eggs left.`);
    }
} velikden(["2", "6",   "one", "two", "two", ])