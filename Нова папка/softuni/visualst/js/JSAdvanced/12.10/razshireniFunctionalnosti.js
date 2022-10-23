let array=[];
//.push() dobavq stoinost(stoinosti) na posledniq index///i vrushta duljinata na array
array.push(10) ///
let currentLastIndex=array.push(20,30,40,50,60,70,80,90,100)
console.log(array);
console.log(currentLastIndex);
//.pop() premahva ot posledniq index
array.pop()
array.pop()
array.pop()
console.log(array);
///remove and get the last element of the array
lastChar=array.pop()
console.log(array);
console.log(lastChar);
////.shift() premahva v nachaloto na masiva i vzima stoinostta mu v promenliva
let takenChar=array.shift()
console.log(array);
console.log(takenChar);
///.unshift() dobavq v nachaloto na masiva  i vrushta krainata duljina na array
let length=array.unshift(10)
console.log(array);
console.log(length);
// premahvane ot kraq bez .pop() bazov nachin (kak raboti .pop())
array.length=array.length-1
console.log(array);