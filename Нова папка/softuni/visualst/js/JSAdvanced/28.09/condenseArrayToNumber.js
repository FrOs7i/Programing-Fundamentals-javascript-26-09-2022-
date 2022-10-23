function condenseArrayToNumber(array) {
    let newArray=[]
    let result=[]
    for (let i = 0; i < array.length-1; i++) {
        if(i !== array.length -1){
        newArray.push((array[i]+array[i+1]))
        }
        for (let index = 0; index < newArray.length; index++) {
            if(index!==newArray.length-1){
            result.push(newArray[index]+newArray[index+1])
            
            }
            else{
                break
            }
        }
    }
}
condenseArrayToNumber([2,10,3])