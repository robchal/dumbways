function dumb(letter) {
    let result = '';
    let totalAngka = 0;
    let triangular = 0;
    let arr = [];
    let arr2 = [0];
    while(totalAngka < letter.length) {
        triangular++
        arr.push(triangular)
        totalAngka += triangular
        arr2.push(totalAngka)
    }

    // return arr2
    for (let i = 0; i < triangular; i++) {
        for (let k = i; k < triangular; k++) {
            result += " "
        }
        for (let j = arr2[i] ; j <= arr2[i+1]-1  ; j++) {
            result += ' ' + letter[j]
        }
        result += '\n'
    }
    return result;
}

console.log(dumb("DUMBWAYSIDUJIAN"))