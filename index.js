function strToArr(input) {
  for (var i = 0; i < len; i++) {
    newArr.push([]);
    for (var j = 0; j < strSplit[i].length; j++) {
      newArr[i].push(strSplit[i][j]);
    }
  }
  return newArr;
}

// var str = "aqrst,ukaei,ffooo";
var str = "qwer,tyui,asdf,ghjk";
var strSplit = str.split(',');
var len = strSplit.length;
var newArr =[];

console.log(strSplit);
console.log(strToArr(str));
