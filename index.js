'use strict'

var stringToArr = str => {
  let arr = []
  let kata = str.split(',')

  for (let i=0; i<kata.length; i++) {
    arr.push(kata[i].split(''))
  }

  return arr
}

console.log(stringToArr('kuda,naik,lama,sore'));
