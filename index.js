function dimension(input) {
  arr = []
  firstSplit = input.split(',')
  for (var i = 0; i < firstSplit.length; i++) {
    secondSplit = firstSplit[i].split('')
    arr.push(secondSplit)
  }
  return arr
}

console.log(dimension('asd,asd,asd'));
console.log(dimension('aselo,aselo,losed'));
console.log(dimension('asasso,aseflo,losegd'));
