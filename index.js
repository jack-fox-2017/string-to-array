function Array_masuk (array){
    var Arr_split = array.split(",");
    var tampung = [];
      for (var i = 0; i<Arr_split.length; i++){

        tampung.push(Arr_split[i].split(""))
    }
        return tampung;

  }

console.log(Array_masuk("ABCDE,FGHIJ,KLMNO"))
console.log(Array_masuk("HORE,ANDA,BENR"))
