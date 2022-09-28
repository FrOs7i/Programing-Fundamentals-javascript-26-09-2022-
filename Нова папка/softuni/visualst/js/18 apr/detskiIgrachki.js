function detskiIgrachki(input) {
  let priceOfTruck = 2.0;
  let priceOfMinion = 8.2;
  let priceOfTeddy = 4.1;
  let priceOfTalkdoll = 3.0;
  let priceOfPuzzle = 2.6;
  let priceOfTrip = Number(input[0]);
  let brPuzzle = Number(input[1]);
  let talkDoll = Number(input[2]);
  let teddyBearr = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);
  let tottalSales = brPuzzle + talkDoll + teddyBearr + minions + trucks;
  let tottalSum =
    brPuzzle * priceOfPuzzle +
    talkDoll * priceOfTalkdoll +
    teddyBearr * priceOfTeddy +
    minions * priceOfMinion +
    trucks * priceOfTruck;

  if (tottalSales >= 50.0) {
    tottalSum = tottalSum - tottalSum * 0.25;
  }
  let rent = tottalSum * 0.1;
  let tottalLeft = tottalSum - rent;
  if (tottalLeft >= priceOfTrip) {
    let leftOver = tottalLeft - priceOfTrip;
    console.log(`Yes! ${leftOver.toFixed(2)} lv left.`);
  } else {
    let moneyNeeded = Math.abs(priceOfTrip - tottalLeft);
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
  }
}
detskiIgrachki(["40.8", "20", "25", "30", "50", "10"]);
