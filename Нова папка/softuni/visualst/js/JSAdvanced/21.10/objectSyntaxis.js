/// masivi spisachna kolekciq ot danni []
// let personalInfo =[
//     `Ivan`,
//     `Petrov`,
//     28,
//     `Sofia`,
//     `12.12.2000`,
// true,
// `Kafevi`,
// `Dulga`,
// ]

///obekti -stoinosti s string key s koito se izvikva dadena informaciq vmesto index
let personalInfo={
    firstName: `Pesho`,
    lastName: `Petrov`,
    age: 28,
    eyeColour: `brown`,
    isMale: true,
}//primer za obekt moje i na edin red razdeleni s zapetaika vinagi izglejda taka (ime: `Pesho`, ...: `...`)
console.log(`Hello my name is ${personalInfo.firstName} ${personalInfo.lastName}.I am ${personalInfo.age} years old,and my eye colour is ${personalInfo.eyeColour}` );

///using bracket syntaxis
///dinamik asaingment 
personalInfo.weight = 80;
console.log(personalInfo);