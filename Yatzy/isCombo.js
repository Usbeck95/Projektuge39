
//Kontrollerer, om alle elementer i matrixen er ens
function erEns(array) {
    if (array.every((val, i ,arr)=> val ==
    arr[0])){
        return true;
    } else {
        return false;
    }
};

//Sorterer array og tæller hvor mange terninger -1 er i en lige
function howMany(array) {
    let sorted = array.sort();
    let length = 0;
    for (var i = o; i < sorted.length - 1; i++) {
        if(sorted[i + 1] - sorted[i] === 1){
            length += 1;
        }
    }
    return length;
};

// Beregner scoren for et fuldt hus
function isCombo() {
      let score = 0;  
      let isCombo = roll;
      let frequency = {};
      let max = 0;
      let most;
      for(var v in isCombo) {
        frequency[isCombo[v]]=
          (frequency[isCombo[v]] || 0) + 1;
          if (frequency[isCombo[v]] > max) {
              max = frequency[isCombo[v]];
              most = isCombo[v];
          }
          if(max === 3) {
              isCombo = $.grep(isCombo, 
            function(value) {
                return value != most;
            });
            if []
          }
      }
}