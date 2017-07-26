var input = 'aqrst,ukeai,ffooo'
var input2 = 'qwer,tyui,asdk,ghjk'

function dimensi(arr) {
  var newInput= arr.split(',')
  var result = [];
  for (i=0; i<newInput.length; i++) {
    var indiv = newInput[i].split('');
    result.push(indiv);
  }
return result;
}

console.log(dimensi(input));
console.log(dimensi(input2));
