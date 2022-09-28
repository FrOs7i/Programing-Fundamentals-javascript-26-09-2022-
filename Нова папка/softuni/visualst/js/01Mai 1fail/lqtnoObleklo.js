function lqtno(input) {
    let degrees = (input[0]);
    let prtOfDay = (input[1]);
    let outfit = "a"
    let shoes = "b"
    if (degrees >= 10 && degrees <= 18) {
        switch (prtOfDay) {
            case "Morning":
                outfit = "Sweatshirt"
                shoes = "Sneakers"
                    ; break;
            case "Afternoon":
                outfit = "Shirts"
                shoes = "Moccasins"
                    ; break;
            case "Evening":
                outfit = "Shirts"
                shoes = "Moccasins"
                    ; break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (prtOfDay) {
            case "Morning":
                outfit = "Shirt"
                shoes = "Moccasins"
                    ; break;
            case "Afternoon":
                outfit = "T-Shirt"
                shoes = "Sandals"
                    ; break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                    ; break;
        }
    } else if (degrees >= 25) {
        switch (prtOfDay) {
            case "Morning":
                outfit = "T-Shirt"
                shoes = "Sandals"
                    ; break;
            case "Afternoon":
                outfit = "Swim Suit"
                shoes = "Barefoot"
                    ; break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                    ; break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}
lqtno(["16", "Morning"])