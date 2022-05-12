//let steps = [] 
let sortedIndices = [] 

export const title = "MERGE SORT" 

export const sort = (data) => { 
    console.log(data) 
    sortedIndices = [...Array(data.length).keys()]
    mergeSort(data, 0, data.length) 
    console.log(sortedIndices) 
    //return sortedIndices  
}

const mergeSort = (data, lo, hi) => { 
    console.log(lo, hi) 
    if (hi === lo) return
    if (hi - lo === 1) return  
    let m = Math.floor(lo + (hi - lo)/2) 
    mergeSort(data, lo, m) 
    mergeSort(data, m, hi) 
    merge(data, lo, m, m, hi)  
}

const merge = (data, lo1, hi1, lo2, hi2) => { 
     let arr = [] 
     let i = lo1, j = lo2 
     while (i<hi1 && j<hi2) { 
        let a = data[sortedIndices[i]] 
        let b = data[sortedIndices[j]] 
        if (a <= b) { 
            arr.push(sortedIndices[i]) 
            i++ 
        } 
        else { 
            arr.push(sortedIndices[j])
            j++ 
        } 
     }
     while (i < hi1) { 
         arr.push(sortedIndices[i]) 
         i ++ 
     }
     while (j < hi2) { 
         arr.push(sortedIndices[j]) 
         j ++ 
     }
     for (let x = lo1, y = 0; x < hi2; x ++, y++) { 
        sortedIndices[x] = arr[y]
     }
}