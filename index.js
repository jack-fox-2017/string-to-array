function strArr(str) {
  let arr = []
  let splitted = str.split(',')
  for (var i = 0; i < splitted.length; i++) {
    arr.push(splitted[i].split(''))

  }
  return arr
}

console.log(strArr('abancoaw,abaksunv,abauc'));
