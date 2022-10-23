/// functions
    let sum = function(a,b){
        return a+b;
    }
    let result=sum(2,10)
    console.log(result);

    /// arrow functiopn
    let double=(a)=>{
        return a*2;
    }
    let doubledNumber=double(10)
    console.log(doubledNumber); 

    ///even simpler arow function
    let triple=(a)=>a*3
    let tripledNumer=triple(10)
    console.log(tripledNumer);

    ///arow function without body with single parameter
    let quadrupal=a=>a*4
    let quadrupaledNumbers=quadrupal(10)
    console.log(quadrupaledNumbers);