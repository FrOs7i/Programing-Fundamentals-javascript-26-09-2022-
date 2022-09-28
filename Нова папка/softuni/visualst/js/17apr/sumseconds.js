function sumseconds(input) {
  let firstSec = Number(input[0]);
  let secondSec = Number(input[1]);
  let thurdSec = Number(input[2]);

  let tottalTime = firstSec + secondSec + thurdSec;
  let tottalTimemin = Math.floor(tottalTime / 60);
  let tottaltimesecslt = tottalTime % 60;
  if (tottaltimesecslt < 10) {
    console.log(tottalTimemin + ":" + "0" + tottaltimesecslt);
  } else {
    console.log(tottalTimemin + ":" + tottaltimesecslt);
  }
}

sumseconds(["35", "45", "44"]);
  