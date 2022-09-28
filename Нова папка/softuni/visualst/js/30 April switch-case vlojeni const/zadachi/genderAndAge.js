function genderAndAge(input){
 let sex = input[1]
    let age = Number(input[0])

if(sex === "f"){
    if( age >= 16 ){
        console.log("Ms.")
    }else{
        console.log("Miss")
    }
}else if (sex === "m"){
    if(age < 16){
        console.log("Master")
    }else {
        console.log("Mr.")
    }
}

}
genderAndAge(["12","f"])