/*
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

//Beregner score for et stort tal
function largeNumber() {
    let score = 0;
    let length = howManyØ(roll);
    if (length === 4){
        score = 40;
    }
    return score;
};

//Beregner scote for et små tal
function smallNumber() {
    let score = 0;
    let length = howMany(roll);
    if (lenth >= 3) {
        score = 30;
    }
    return score;
}
*/
// Beregner scoren for et fullhouse
function isCombo(komb) {

    if(komb.length != 5) return null;

    var map = [0, 0, 0, 0, 0, 0];
    for(var i = 0; i < komb.length; i++) {
        var digit = komb.charCodeAt(i) - 48;
        if(digit < 1 || digit > 6) return null;
        map[digit - 1]++;
    }

    var sum = 0, p = 0, seq = 0;
    for(var i = 0; i < map.length; i++) {
        if(map[i] == 2) sum += 20;
        if(map[i] >= 3) sum += map[i];

        p = map[i] ? p + 1 : 0;
        if(p > seq) seq = p;
    }

    if(sum == 5)  return "Yahtzee";
    if(sum == 23) return "Full House";
    if(sum == 3)  return "Three-Of-A-Kind";
    if(sum == 4)  return "Four-Of-A-Kind";

    if(seq == 5) return "Large Straight";
    if(seq == 4) return "Small Straight";

    return "Chance";
}