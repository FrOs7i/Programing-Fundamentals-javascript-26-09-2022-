// function kvartalMagazin(input) {
//     let product = input[0];
//     let city = input[1];
//     let br = Number(input[2]);
//     switch (city) {
//         case "Varna":
//             switch (product) {
//                 case "coffee":
//                     console.log(br * 0.45);
//                     break;
//                 case "water":
//                     console.log(br * 0.7);
//                     break;
//                 case "beer":
//                     console.log(br * 1.15);
//                     break;
//                 case "sweets":
//                     console.log(br * 1.35);
//                     break;
//                 case "peanuts":
//                     console.log(br * 1.55);
//                     break;
//             }
//             break
//         case "Sofia":
//             switch (product) {
//                 case "coffee":
//                     console.log(br * 0.50);
//                     break;
//                 case "water":
//                     console.log(br * 0.80);
//                     break;
//                 case "beer":
//                     console.log(br * 1.2);
//                     break;
//                 case "sweets":
//                     console.log(br * 1.45);
//                     break;
//                 case "peanuts":
//                     console.log(br * 1.6);
//                     break;
//             }
//             break
//         case "Plovdiv":
//             switch (product) {
//                 case "coffee":
//                     console.log(br * 0.4)
//                     break
//                 case "water": console.log(br * 0.70)
//                     break
//                 case "beer": console.log(br * 1.15)
//                     break
//                 case "sweets": console.log(br * 1.35)
//                     break
//                 case "peanuts": console.log(br * 1.50)
//                     break
//             }
//             break
//     }
// }
// kvartalMagazin(["coffee", "Varna", "2"]);




function kvartalMagazin(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let finalResult = 0;


    if (city === "Sofia") {
        switch (product) {
            case "coffee": finalResult = (quantity * 0.50); break;
            case "water": finalResult = (quantity * 0.80); break;
            case "beer": finalResult = (quantity * 1.20); break;
            case "sweets": finalResult = (quantity * 1.45); break;
            case "peanuts": finalResult = (quantity * 1.60); break;
        }

    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee": finalResult = (quantity * 0.40); break;
            case "water": finalResult = (quantity * 0.70); break;
            case "beer": finalResult = (quantity * 1.15); break;
            case "sweets": finalResult = (quantity * 1.30); break;
            case "peanuts": finalResult = (quantity * 1.50); break;
        }
    } else if (city === "Varna") {
        switch (product) {
            case "coffee": finalResult = (quantity * 0.45); break;
            case "water": finalResult = (quantity * 0.70); break;
            case "beer": finalResult = (quantity * 1.10); break;
            case "sweets": finalResult = (quantity * 1.35); break;
            case "peanuts": finalResult = (quantity * 1.55); break;
        }
    }
    console.log(finalResult)
}   
kvartalMagazin(["coffee", "Varna", "2"]);