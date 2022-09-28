    function vacation(volume, type, day) {
        let tottalPrice = 0
        switch (type) {
            case "Students":
                if (day === "Friday") {
                    tottalPrice = volume * 8.45
                } else if (day === "Saturday") {
                    tottalPrice = volume * 9.80
                } else if (day === "Sunday") {
                    tottalPrice = volume * 10.46
                }
                if (volume >= 30) {
                    tottalPrice = tottalPrice * 0.85
                }
                break
            case "Business":
                if (volume >= 100) {
                    volume -= 10
                }
                if (day === "Friday") {
                    tottalPrice = volume * 10.90
                } else if (day === "Saturday") {
                    tottalPrice = volume * 15.60
                } else if (day === "Sunday") {
                    tottalPrice = volume * 16
                }
                break
            case "Regular":
                if (day === "Friday") {
                    tottalPrice = volume * 15
                } else if (day === "Saturday") {
                    tottalPrice = volume * 20
                } else if (day === "Sunday") {
                    tottalPrice = volume * 22.5
                }
                if (volume >= 10 && volume <= 20) {
                    tottalPrice *=0.95
                }
                break

        }
        console.log(`Total price: ${tottalPrice.toFixed(2)}`);
    }
vacation(30, "Students", "Sunday")