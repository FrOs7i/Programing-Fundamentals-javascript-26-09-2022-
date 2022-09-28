function building(input) {
    let floors = Number(input[0]);
    let apartmentPFL = Number(input[1]);
    let print = " "
    for (let currFloor = floors; currFloor > 0; currFloor--) {
        let buff = ""
        for (let room = 0; room < apartmentPFL; room++) {
            if (floors === currFloor) {
                buff += `L${currFloor}${room} `
            } else if (currFloor % 2 !== 0) {
                buff += `A${currFloor}${room} `
            } else {
                buff += `O${currFloor}${room} `
            }
            
        }
        console.log(buff);
    }
}
building(["6", "4"])