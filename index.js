function stringToArray(input) {
  let arr = input.split(",")
  let result =  [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].split(""))
  }
return result
}
console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwe,ert,tyu"));
