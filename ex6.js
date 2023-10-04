function ex6(arr){
    let current = 0
    let res = 0
    for(let x = arr.length; x >= 0; x--){
        if(arr[x] > current){
            current = arr[x]
            res++
        }
    }
    return res
}

console.log(ex6([3, 7, 8, 3, 6, 1]))