function StringToArray(input) {
  let inputSplit = input.split(",")
  let arrBaru = []
  for (let i = 0; i < inputSplit.length; i++) {
    arrBaru.push(inputSplit[i].split(''))
  }
return arrBaru
}

console.log(StringToArray("aqrst,zxcvn,weqwer"));
console.log("====================================================");
console.log(StringToArray("aku,seorang,programmer,beretika"));
console.log("====================================================");
console.log(StringToArray("ayoyayoe,oweyaeeyo,oyayeyayuwa"));
