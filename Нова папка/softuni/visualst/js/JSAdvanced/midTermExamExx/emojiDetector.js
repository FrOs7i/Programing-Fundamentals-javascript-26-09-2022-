function emojiDetector(input) {
//input
let text=input.shift()
let emojiCount=0
let treshhold=1
let coolEmojis=[]
///get all digits and calculate treshhold
let digitsResults =text.matchAll(/\d/g)
for (const digitsResult of digitsResults) {
    let digit=Number(digitsResult[0])
    treshhold*=digit
    
}
//get all emojis
let emojiMatches=text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g)
for (const emojiMatch of emojiMatches) {
    let emoji =(emojiMatch[0]);
    let emojiName=(emojiMatch.groups.name);
    emojiCount++
    //calculate emoji coolnes
    let emojiCoolnes=0
    for (let i=0;i<emojiName.length;i++) {
        emojiCoolnes+=emojiName.charCodeAt(i)
    }
    if(emojiCoolnes >= treshhold){
        coolEmojis.push(emoji)
    }
}
///print result
console.log(`Cool treshold: ${treshhold}`);
console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
for (const emoji of coolEmojis) {
    console.log(emoji);
}

}emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])