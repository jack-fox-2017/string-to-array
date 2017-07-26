function ogiSTA(arr){

  let splitting = arr.split(","); //['ga','pake','boong']
  let result =[];

  for (let i =0; i< splitting.length; i ++)
    {
      result.push(splitting[i].split(""));
    }
  return result;
}

console.log(ogiSTA('I,Love,you,tapi,boong'));
