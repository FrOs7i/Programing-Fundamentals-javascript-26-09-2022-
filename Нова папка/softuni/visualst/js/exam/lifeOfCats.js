function lifeOfCats(input) {
    let catType = input[0];
    let catSex = input[1];
    let catyears = 0
    switch (catType) {
        case "British Shorthair":
            if (catSex === "m") {
                catyears = Math.floor((13 * 12) / 6)
                console.log(`${catyears} cat months`);
            } else if (catSex === "f") {
                catyears = Math.floor((14 * 12) / 6)
                console.log(`${catyears} cat months`);
            }
            break;
        case "Siamese":
            if (catSex === "m") {
                catyears = Math.floor((15 * 12) / 6)
                console.log(`${catyears} cat months`);
            } else if (catSex === "f") {
                let catyears = (Math.floor(16 * 12) / 6)
                console.log(`${catyears} cat months`);
            }
            break
        case "Persian":
            if (catSex === "m") {
                catyears = Math.floor((14 * 12) / 6)
                console.log(`${catyears} cat months`);
            } else if (catSex === "f") {
                catyears = Math.floor((15 * 12) / 6)
                console.log(`${catyears} cat months`);
            }
            break
        case "Ragdoll":
            if (catSex === "m") {
                catyears = Math.floor((16 * 12) / 6)
                console.log(`${catyears} cat months`);
            } else if (catSex === "f") {
                catyears = Math.floor((17 * 12) / 6)
                console.log(`${catyears} cat months`);
            }
            break
        case "American Shorthair":
            if (catSex === "m") {
                catyears = Math.floor((12 * 12) / 6)
                console.log(`${catyears} cat months`);
            } else if (catSex === "f") {
                catyears = Math.floor((13 * 12) / 6)
                console.log(`${catyears} cat months`);
            }
            break
        case "Siberian":
            if (catSex === "m") {
                catyears = Math.floor((11 * 12) / 6)
                console.log(`${catyears} cat months`);
            } else if (catSex === "f") {
                catyears = Math.floor((12 * 12) / 6)
                console.log(`${catyears} cat months`);
            }

            break
        default:
            console.log(`${catType} is invalid cat!`);
            break
    }

} lifeOfCats(["Siberian",
    "m"])