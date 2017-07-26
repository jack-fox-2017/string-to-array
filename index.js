function stringToArray(str){
  let splitWord = str.split(',');
  let splitAlph = str.split('');
  let row = splitWord.length;
  let arr = [];

  for(let i = 0; i < row; i++){
    arr.push([]);
    for(let j = 0; j < splitWord[i].length; j++){
      arr[i][j]=splitWord[i][j];
    }
  }
  return arr;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('aqrst'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
