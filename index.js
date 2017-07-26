function stringToArray(str){
  var pecah = str.split(',');
  var arrKosong = [];
  for(i=0;i<pecah.length;i++){
    var pecahLagi = pecah[i].split('');
    arrKosong.push([]);
    for(j=0;j<pecahLagi.length;j++){
      arrKosong[i].push(pecahLagi[j])

    }
  }
  return arrKosong
}
console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
