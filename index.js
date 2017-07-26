function strToArr(str){
  str = str.split(',');

  let rowArr = [];
  for(let i=0; i<str.length; i++){
    let colArr = [];
    newStr = str[i].split('');
    for(let j=0; j<newStr.length; j++){
      colArr.push(newStr[j]);
    }
    rowArr.push(colArr);
  }
  return rowArr;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,asdf,ghjk'));
