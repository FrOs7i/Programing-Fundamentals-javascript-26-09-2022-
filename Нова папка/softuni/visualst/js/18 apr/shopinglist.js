function shopinglist(input) {
  let budgeet = Number(input[0]);
  let brVideo = Number(input[1]);
  let brprocesori = Number(input[2]);
  let brRam = Number(input[3]);
  let priceOfVideo = 250.0;
  let tottalVideoPrice = priceOfVideo * brVideo;
  let priceOfProcessor = tottalVideoPrice * 0.35 * brprocesori;
  let priceOfRam = tottalVideoPrice * 0.1 * brRam;
  let tottalNeeded = priceOfRam + priceOfProcessor + tottalVideoPrice;
  if (brVideo > brprocesori) {
    let applyDiscount = tottalNeeded - tottalNeeded * 0.15;
    tottalNeeded = applyDiscount;
  }
  if (budgeet >= tottalNeeded) {
    let left = budgeet - tottalNeeded;
    console.log(`You have ${left.toFixed(2)} leva left!`);
  } else {
    let needed = tottalNeeded - budgeet;
    console.log(`Not enough money! You need ${needed.toFixed(2)} leva more!`);
  }
}
shopinglist(["920.45", "3", "1", "1"]);
