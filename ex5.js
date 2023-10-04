function ex5(array, nmb) {
    for(let x = 0; x < array.length; x++){
        let res = nmb - array[x]
        if (array.slice(0, x).includes(res)){
            return true
        }
    }
    return false
}

console.log(ex5([10, 15, 3, 7], 20))