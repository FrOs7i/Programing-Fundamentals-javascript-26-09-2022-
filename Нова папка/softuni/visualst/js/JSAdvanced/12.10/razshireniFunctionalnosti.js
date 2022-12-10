let array = [];
//.push() dobavq stoinost(stoinosti) na posledniq index///i vrushta duljinata na array
array.push(10) ///
let currentLastIndex = array.push(20, 30, 40, 50, 60, 70, 80, 90, 100)
console.log(array);
console.log(currentLastIndex);
//.pop() premahva ot posledniq index
array.pop()
array.pop()
array.pop()
console.log(array);
///remove and get the last element of the array
lastChar = array.pop()
console.log(array);
console.log(lastChar);
////.shift() premahva v nachaloto na masiva i vzima stoinostta mu v promenliva
let takenChar = array.shift()
console.log(array);
console.log(takenChar);
///.unshift() dobavq v nachaloto na masiva  i vrushta krainata duljina na array
let length = array.unshift(10)
console.log(array);
console.log(length);
// premahvane ot kraq bez .pop() bazov nachin (kak raboti .pop())
array.length = array.length - 1
console.log(array);
array.push(60)
console.log(array);
///.slice(start,end) kopira chast ot masiva i go zapazvame v nov array
let furstHalf = array.slice(0, 3)
let lastHalf = array.slice(3)        //ako ne lsagame posleden index deistva ot dadeniq index do kraq
console.log(furstHalf);
console.log(lastHalf);
////kopirane na masiv s slice()
let arrayCoppy = array.slice()
console.log(arrayCoppy);
////vzemane ot kraq s otricatelna stoinost
let lastCharacter = array.slice(-1)
console.log(lastCharacter)
////.splice mutira originalniq array 
////remove single element in th array
let spliceResul = array.splice(4, 1)
console.log(array);
console.log(spliceResul);
////add element in the midle
array = [10, 20, 30, 40, 50, 60, 70, 80, 90]
array.splice(6, 3, 100, 110)
console.log(array);
array.splice(6, 0, 70, 80, 90)
console.log(array);
////.map(arow function) suzdava nov array sus pomeneni po daden nachin soinosti kato obhojda el po el
/// toest ima sushtiq broy elementi v nego prosto promeneni
let myArr = [`one`, `two`, `three`, `four`]
let lengths = myArr.map(x => x.length) /////v sluchaq vzimame duljinata na vseki indeks
console.log(lengths);
////vtori primer
let numsAsString = [`5`, `3`, `14`, `-2`, `8`]
let nums = numsAsString.map(Number)
console.log(nums);
let incr = nums.map(x => x + 1)
console.log(incr);
let doubleNumbers = nums.map(x => x * 2)
console.log(doubleNumbers);
/// /// /       ////razpisana map function
function map(arr, callback) {
    let transformedArray = [];
    for (const el of arr) {
        transformedArray.push(callback(el))
    }
    return transformedArray
}
let result = map(nums, x => x * 27)
console.log(result);//
///             ////.filter podava function koqto vrusha true ili false(bolean)

let filterArr = [2, 4, 1, 9, 10, 3]
let evenNumbers = filterArr.filter(x => x % 2 === 0)
let oddNumber = filterArr.filter(x => x % 2 !== 0)
console.log(evenNumbers);
console.log(oddNumber);
console.log(filterArr);
////        /// //vzimane na chisla ot cheten index ssus .filter()
let evenPositionNumber=filterArr.filter((x,i)=>i%2===0)
console.log(evenPositionNumber);
//////      //  //  //sortirane
////.sort() sortira elemntite po dadena comanda
let check=[2,4,1,6,2]
let text=[`pesho`,`Gosho`,`stamat`,`valeri`,`borislav`]
check.sort()   //default sort sortira po ascii tablica
text.sort()
console.log(check);
console.log(text);
///sortirane na chisla
let asd=[2,4,1,100,6,2] 
asd.sort((a,b) => {   ///asd.sort((a,b)=>a-b)
if(a<b){               ///     
    return -1           ///
}else if(a>b){          ///
    return 1            ///
}else{                  ///
    return 0            ////    
}                       /////////  
})                      ////////
console.log(asd);
////sortirane na string
text.sort((a,b)=>a.localeCompare(b)) ////sortira string po pravilen nachin bez znachenie glavni ili malki bukvi