///Objects are Structure of related data or functionality
function personalInformation(input) {
    
let personalInfo=[
    `Ivan`,
    `Petrov`,
    28,
    `Sofia`,
    `12.12.2000`,
    true,
    `Kafevi`,
    `Dulga`,
]

////fashliv obekt   (nagore)


/// pravilen obekt(nadolu)
let perInfo={
    firstName: `Petur`,
    secondName: `Petrov`,
    age : 25,
    carBrand : `Toyota`,
    carColour : `Red`,
    adress: `27 Coventry rode`,
    eyeColour: `brown`,
    isMale: true,
    
}

console.log(`Hello my name is ${perInfo.firstName} ${perInfo.secondName}.Im ${perInfo.age},and i drive a ${perInfo.carColour} ${perInfo.carBrand}.`);

if (perInfo.isMale) {
    console.log(`Go get a beer!!`);
}else{
    console.log(`Go eat some chocolate`);
}
////dinamyc property adding


perInfo.weight=80;
console.log(perInfo.weight);
//Dinamyc removing of property's (Not so comonnly used mostly (ONLY FOR OBJECTS!!!))
delete perInfo.weight
////using bracket syntaxis





}personalInformation()