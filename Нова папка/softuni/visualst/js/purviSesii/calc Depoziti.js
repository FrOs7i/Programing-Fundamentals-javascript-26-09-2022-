function calculator(input) {;
    
    let depozitAmount = Number(input[0]);
    let turmOfDepozit = Number(input[1]);
    let annualInterestAmount = Number(input[2]) / 100;
    let acumulatedInterst = depozitAmount * annualInterestAmount;
    let monthlyInteresr = acumulatedInterst / 12;
    let sum = monthlyInteresr * turmOfDepozit + depozitAmount
    console.log(sum)
}
calculator(["2350", "6", "7"]);