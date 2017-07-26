function stringArray(input) {
  var pecah = input.split(",");
  var arr = [];
  var result = [];
  for (var i = 0; i < pecah.length; i++) {
     arr.push(pecah[i].split(""));
     }
  return arr;
}
console.log(stringArray("aqrst,ukaei,foool"));
