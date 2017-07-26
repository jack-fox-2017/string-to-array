function randomArrStr(num) {
  var x = num
  var strArr = [];
  var strPembatas = Math.floor(Math.random() * ((5-1)+1) + 1)
  for (var i = 1; i < x; i++) {
    //Math.floor(Math.random() * ((y-x)+1) + x);
    var str = String.fromCharCode(Math.floor(Math.random() * ((122-97)+1) + 97))
    strArr.push(str);
    if (i%strPembatas===0 && i!==0 && i!==x-1) {
      strArr.push(',');
    }
  }
  return strArr.join('')
}

function stringToArray(num) {
  var str = randomArrStr(num)
  console.log(str);
  return str.split(',').map(function(x){ return x.split('')})
}

console.log(stringToArray(25));
console.log(stringToArray(35));
