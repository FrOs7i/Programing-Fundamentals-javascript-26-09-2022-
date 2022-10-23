function daysOfWeek(day) {
    if (day >= 1 && day <= 7) {
        let weekDays = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
        console.log(weekDays[day - 1]);
    } else {
        console.log("Invalid day!");
    }
}
daysOfWeek([10])