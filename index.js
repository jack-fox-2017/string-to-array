/*
input "aqrst,ukaei,ffooo"
"qwer,tyui,asdf,ghjk,"
*/

class StringtoArray {
  stArr(str){
    let splitted = str.split(',')
    let printBoard = []
    for(let i = 0; i < splitted.length; i++){
      let splitWord = splitted[i].split('')
      printBoard.push(splitWord)
    }
    return printBoard
  }
}

let convert = new StringtoArray()
console.log('===== StringtoArray =====');
console.log(convert.stArr("aqrst,ukaei,ffooo"));
console.log('===== StringtoArray =====');
console.log(convert.stArr("qwer,tyui,asdf,ghjk"));
