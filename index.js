"use strict"

function stringToArray(input){
  let array = [];
  let masukan = input.split(',')

  for (var i = 0; i < masukan.length; i++) {
        array.push(masukan[i].split(''))
  }


  return array
}

console.log("");
console.log("input = aqrst,ukaei,ffooo");
console.log("");
console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log("");
console.log("input = qwer,tyui,asdf,ghjk");
console.log("");
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
console.log("");
