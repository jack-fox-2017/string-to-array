function  changeToArray (str){
  var hasil = [];
  var pisah = str.split(',');

    for (i = 0 ; i< pisah.length; i++){
      hasil.push(pisah[i].split(','))
    }
  return hasil ;
}
console.log(changeToArray("aqrst,ukei,ffooo"));
console.log(changeToArray("qwer,tyui,asdf,ghjk"));
