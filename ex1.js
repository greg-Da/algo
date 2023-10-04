function ex1(array, nmb) {
    for(let x = 0; x < array.length; x++){
        for(let y = x + 1; y < array.length; y++){
            if (array[x] + array[y] === nmb){
                return true
            }
        }
    }
    return false
}

console.log(ex1([10, 15, 3, 7], 19))