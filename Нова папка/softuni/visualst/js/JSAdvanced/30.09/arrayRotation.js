function arrayRotation(array,rottations) {
    for (let i = 0; i < rottations; i++) {
        let tempNum=array.shift() //izrqzva chisloto ot [0] i go zapazva vuv promenliva
        array.push(tempNum)
    }
    console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)





//     for (let i = 0; i < array.length; i++) {
    
//     }
//     console.log(newArraay);