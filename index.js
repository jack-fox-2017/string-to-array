function stringToArray(input)
{
  var split = input.split(",");

  var arrPush = []

  for(var i=0; i<split.length; i++)
  {
    arrPush.push(split[i].split(""));
  }
  return arrPush
}

console.log(stringToArray("aqrst,ukaei,ffoo"));
console.log(stringToArray("qwe,ert,tyu"));
