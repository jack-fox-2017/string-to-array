// let input = 'aqrst ukaei ffooo';
// let pisah = input.split(' ');
// console.log(pisah[0].split(''));

function stringArray(input){
  let pisah = input.split(' ');
  // ['aqrst', 'ukaei', 'ffooo'];

  let tmp = [];

  for(let i=0; i < pisah.length; i++){
    let tmpIndex = [];
    // tmp.push(pisah[i])
    // ['aqrst', 'ukaei', 'ffooo'];

      // ------inde 0
      if(pisah[i] == pisah[0]){
        let pisahIndex0 = pisah[i]
          for(let j = 0; j< pisahIndex0.length; j++){
            tmpIndex.push(pisahIndex0[j]);
          }
      }
      //-----index 0
      // ------inde 1
      if(pisah[i] == pisah[1]){
        let pisahIndex0 = pisah[i]
          for(let j = 0; j< pisahIndex0.length; j++){
            tmpIndex.push(pisahIndex0[j]);
          }
      }
      //-----index 1
      // ------inde 2
      if(pisah[i] == pisah[2]){
        let pisahIndex0 = pisah[i]
          for(let j = 0; j< pisahIndex0.length; j++){
            tmpIndex.push(pisahIndex0[j]);
          }
      }
      //-----index 2
      // ------inde 3
      if(pisah[i] == pisah[3]){
        let pisahIndex0 = pisah[i]
          for(let j = 0; j< pisahIndex0.length; j++){
            tmpIndex.push(pisahIndex0[j]);
          }
      }
      //-----index 3
      // return tmpIndex;
      tmp.push(tmpIndex)
  }


  return tmp;
}

console.log(stringArray('aqrst ukaei ffooo'));
console.log(stringArray('qwer tyui asdf ghjk'));
