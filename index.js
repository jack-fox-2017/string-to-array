'use strict'

function stringToArray(input) {
  var tamp = [];
  var pecahString = input.split(',');
  console.log(pecahString);
  for (var i = 0; i < pecahString.length; i++) {
    tamp.push(pecahString[i].split(''))
  }
  return tamp;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('dwer,tyui,asdf,ghjk'));
