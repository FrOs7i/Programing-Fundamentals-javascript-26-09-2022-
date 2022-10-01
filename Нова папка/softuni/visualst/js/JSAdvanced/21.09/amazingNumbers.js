function amazingNumbers(num) {
let textNumber = num.toString();
let sum=0
let isAmazing =false
for (let i = 0; i < textNumber.length; i++) {
  currNumber=Number(textNumber[i])
  sum+=currNumber
} 
let sumText=sum.toString()
for (let i = 0; i < sumText.length; i++) {
  let currDigit = sumText[i]
  if (currDigit==`9`) {
    isAmazing=true;
    break;
  }
}

  console.log(`${num} Amazing? ${isAmazing ? `True` : `False`}`);

}

amazingNumbers(1233)