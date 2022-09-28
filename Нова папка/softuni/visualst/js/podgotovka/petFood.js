function petFood(input) {
    let days = Number(input[0]);
    let countDays = 0;
    let foodQntd = Number(input[1])
    let tottalfood = 0
    let dogfood = 0
    let catfood = 0
    let dogfoodpr = 0
    let catfoodpr = 0
    let biscuits = 0
    let entireFood = 0;
    let index = 2;
    for (let currDay = 1; currDay <= days; currDay++) {
        countDays++;
        let foodForDay = 0;
        let dogQuantiti = Number(input[index++]);
        let catQuantiti = Number(input[index++]);
        dogfood += dogQuantiti;
        catfood += catQuantiti;
        foodForDay = dogQuantiti + catQuantiti;
        tottalfood = dogfood + catfood
        if (countDays % 3 === 0) {
            biscuits += foodForDay * 0.10;

        }

    }
    entireFood =(tottalfood/foodQntd)*100
    dogfoodpr=(dogfood/tottalfood)*100
    catfoodpr=(catfood/tottalfood)*100
    console.log(`Total eaten biscuits: ${Math.floor(biscuits)}gr.`);
    console.log(`${entireFood}% of the food has been eaten.`);
console.log(`${dogfoodpr}% eaten from the dog.`);
console.log(`${catfoodpr}% eaten from the cat.`);

} petFood(["3", "500", "100", "30", "110",
    "25", "120", "45"])