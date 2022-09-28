function nestedLoops(input) {
    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            if(m<10){//not needed in exercise
                m = `0${m}`//not needed in exercise
            }//not needed in exercise
console.log(`${h}:${m}`);
        }
    }
}
nestedLoops("")