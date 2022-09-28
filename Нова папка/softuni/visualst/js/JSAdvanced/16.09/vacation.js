function vacation(volume, type, day) {
    let tottalprice = 0
    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    tottalprice = volume * 8.45
                    break;
                case "Saturday":
                    tottalprice = volume * 9.80
                    break;
                case "Sunday":
                    tottalprice = volume * 10.46
                    break;
            }
            break;

        case "Business":
            switch (day) {
                case "Friday":

                    break;
                case "Saturday":

                    break;
                case "Sunday":

                    break;
            }
        case "Regular":
            switch (day) {
                case "Friday":

                    break;
                case "Saturday":

                    break;
                case "Sunday":

                    break;
            }
    }
    console.log(tottalprice);
}
vacation(30, "Students", "Sunday")