function ex2(buildings) {
    let count = 0;
  
    for (let x = 0; x < buildings.length; x++) {
      let taller = true;
      for (let y = x + 1; y < buildings.length; y++) {
        if (buildings[y] >= buildings[x]) {
          taller = false;
          break;
        }
      }
  
      if (taller) {
        count++;
      }
    }
  
    return count;
  }
 console.log(ex2([1, 4, 5, 8]))
