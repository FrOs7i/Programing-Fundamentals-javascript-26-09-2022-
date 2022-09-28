function demo(input) {
  let sumPrime = 0
  let sumNonPirme = 0
  for (let index = 0; index < input.length; index++) {
    let currNum = Number(input[index])
    while (currNum !== "stop") {

      if (index === 2) {
        return true;
      } else if (index > 1) {
        for (let i = 2; i < index; i++) {

          if (index % i !== 0) {
            return true;
          } else if (index === i * i) {
            return false
          } else {
            return false;
          }
        }
      } else {
        return false;
      }

    }
  }
  console.log(`Sum of all prime numbers is:${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPirme}`);
} demo(["3", "9", "0", "7", "19", "4", "stop"])