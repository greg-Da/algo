function parseArray() {
    const fs = require('fs');
    
    const fileName = process.argv[2];
    
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        
        let arr = data.split(" ").map(elem => elem * 1)
        if (arr.some(isNaN)){
            return console.error("contains non numerical value")
        }
        return arr
        
    } catch (error) {
        console.error(error.message);
    }
}


function mergeSort(arr) {
    if (arr.length < 2){
        return arr
    }else{
        let half = arr.length / 2
        let left = arr.slice(0, half)
        let right = arr.slice(half, arr.length)
        return mergeArrays(mergeSort(left), mergeSort(right))
    }
    
}

function mergeArrays(left, right) {
    let array = []
    while (left.length && right.length) {
       if (left[0] < right[0]) {
          array.push(left.shift())
       } else {
          array.push(right.shift())
       }
    }
    return [ ...array, ...left, ...right ]
 }


let arr = parseArray()
console.log(mergeSort(arr))