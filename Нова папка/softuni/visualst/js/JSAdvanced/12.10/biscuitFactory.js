function biscuits(array) {
    let tottalProducted=0
    let percentage=0
let productionPDay=Number(array[0])
let countOfWorkers1=Number(array[1])
let rivalCompTottal1=Number(array[2])
    for (let i = 1; i <=30; i++) {
        if(i%3===0){
            let tempProduction =(productionPDay*0.75)
            tottalProducted+=Math.floor(tempProduction*countOfWorkers1)
        }else{
        tottalProducted+=Math.floor(productionPDay*countOfWorkers1)
        }
    }
    if(tottalProducted >rivalCompTottal1){
        percentage=(((tottalProducted-rivalCompTottal1)/rivalCompTottal1)*100).toFixed(2)
        console.log(`You have produced ${tottalProducted} biscuits for the past month.`)
        console.log(`You produce ${percentage} percent more biscuits.`);
    }else{
        percentage=(((rivalCompTottal1-tottalProducted)/rivalCompTottal1)*100).toFixed(2)
        console.log(`You have produced ${tottalProducted} biscuits for the past month.`)
        console.log(`You produce ${percentage} percent less biscuits.`);
    }
  }
biscuits([`78`,`8`,`16000`])