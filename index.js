function stringToArray(string){
  var str = string.split(',')
  //var temp = []
  var save = []
  for(let i=0; i<str.length; i++){
    var pisah = str[i].split('')
    save.push(pisah)
    //console.log(str[i]);
  }

  return save;
}

//stringToArray("aqrst,ukaei,ffooo")
console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log("*-------------------------------*");
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
