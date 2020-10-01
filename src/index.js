
exports.min = function min (array) {
    if (array == null) {
         return 0;
    }
    if (array.length > 0) {
        let minNum = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] < minNum) {
                minNum = array[i];
            }
        }
        return minNum
    } else { 
        return 0;
    }    
}

exports.max = function max (array) {
    if (array == null) {
        return 0;
   }
    if (array.length > 0) {
        let maxNum = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maxNum) {
                maxNum = array[i];
            }
        }
        return maxNum
    } else { 
        return 0;
    }    
}

exports.avg = function avg (array) {
    if (array == null) {
        return 0;
   }
    if (array.length > 0) {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let avgNum = sum/array.length; 
        return avgNum;
    } else { 
        return 0;
    }    
}

