let globalVariable = "Pesh"  //global scope

function variableScope() {
    //Function scope
let functionVarriable = "Gosho"

if(true){
    let blockVarriable="Stamat"
console.log(globalVariable);
console.log(functionVarriable);
console.log(blockVarriable);
}
console.log(globalVariable);
console.log(functionVarriable);
//console.log(blockVarriable);  //error out of scope
}
variableScope()

console.log(globalVariable);
//console.log(functionVarriable); // error out of scope
//console.log(blockVarriable);  //error out of scope