function rightPlace(ridl,char,answ) {
    let result =ridl.replace("_",char);
    if (result ===answ) {
     console.log(`Matched`);   
    }else{
        console.log(`Not Matched`);
    }
}
rightPlace(`Str_ng`,`I`,`StrIng`)