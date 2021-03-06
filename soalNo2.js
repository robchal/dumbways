function matrix(mtx) {
    return mtx.map((el,i) => el = mtx.map((element,ind) => element[i]) )
}


console.log(matrix([[1,2,3],[1,2,3],[1,2,3]]))