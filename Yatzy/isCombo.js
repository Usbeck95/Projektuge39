/*
//Kontrollerer, om alle elementer er ens
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

//Beregner score for et stort tal
function largeNumber() {
    let score = 0;
    let length = howManyØ(roll);
    if (length === 4){
        score = 40;
    }
    return score;
};

//Beregner score for et små tal
function smallNumber() {
    let score = 0;
    let length = howMany(roll);
    if (lenth >= 3) {
        score = 30;
    }
    return score;
}
*/
// Beregner fullhouse
const isCombo = (ar1) => {
    let countObj = {}
    for(let x of ar1){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
  
  //Kontrollere to ens par
  const twoPairs = ar1 => {
    let countObj = {}
    for(let x of ar1){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    //console.log(vals);
    if(vals.filter(x => x === 2).length == 2) return true;
    return false;
  }
  
  
  //Tester-----------
  let arrays = [[1, 2, 3, 4, 5, 6], [2, 4, 2, 4, 2], [2, 2, 4, 4, 6]]
  arrays.forEach(x => {
    console.log(`Array: ${JSON.stringify(x)}`)
    console.log(`Full House: ${fullHouse(x)}`)
    console.log(`Two Pairs: ${twoPairs(x)}`)
  })
};