function furstAndLastKNum(array) {
    let kNum=array.shift()
    let furstTwo=array.slice(1,1+kNum)
    let lastTwo=array.slice(-kNum)
    console.log(furstTwo.join(` `));
    console.log(lastTwo.join(` `));
}
furstAndLastKNum([3,6,7,8,9])