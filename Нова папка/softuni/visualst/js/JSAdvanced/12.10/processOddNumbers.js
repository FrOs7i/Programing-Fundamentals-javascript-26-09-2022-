            
function processOddNumbers(array) {
    let result=array
    .filter((num,i)=>i%2!==0)///filtrira elementite po indeks
    .map(x=>2*x)///umnojava elementite po 2
    .reverse();///zavurta masiva na obratno
    return result.join(` `)///vrushta kato rezultat na masiva stoinostite razdeleni s ` `
    ////tova se naricha method Chaning
}
console.log(processOddNumbers([10,15,20,25]))
console.log(processOddNumbers([3,0,10,4,7,3]))