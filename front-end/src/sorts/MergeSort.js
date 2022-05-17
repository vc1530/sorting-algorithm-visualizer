import { green, lightBlue, changeColor, darkBlue, insertIBeforeJ } from '../Helper'
import { insertBefore } from '../Helper'

let steps = [] 
let sortedIndices = [] 

export const title = "MERGE SORT" 

export const sort = (data) => { 
    sortedIndices = [...Array(data.length).keys()]
    mergeSort(data, 0, data.length)
    console.log(sortedIndices)
    return steps  
}

const mergeSort = (data, lo, hi) => { 
    if (hi - lo === 1) return 
    let m = lo + Math.floor((hi - lo)/2) 
    mergeSort(data, lo, m) 
    mergeSort(data, m, hi) 
    merge(data, lo, m, m, hi)  
}

const merge = (data, lo1, hi1, lo2, hi2) => { 
     let i = lo1, j = lo2 
     let x = lo1
     let arr = [] 
     while (i<hi1 && j<hi2) { 
        let a = data[sortedIndices[i]] 
        let b = data[sortedIndices[j]] 
        if (a <= b) { 
            // steps.push([ 
            //     { 
            //         func: changeColor, 
            //         args: [sortedIndices[i], green]
            //     }, 
            //     {
            //         func: insertBefore, 
            //         args: [sortedIndices[i], sortedIndices[x]]
            //     }
            // ])
            arr.push(sortedIndices[i])
            //sortedIndices = insertIBeforeJ(sortedIndices, i, x) 
            i++ 
        } 
        else { 
            // steps.push([ 
            //     { 
            //         func: changeColor, 
            //         args: [sortedIndices[j], green]
            //     }, 
            //     {
            //         func: insertBefore, 
            //         args: [sortedIndices[j], sortedIndices[x]]
            //     }
            // ])
            arr.push(sortedIndices[j])
            //sortedIndices = insertIBeforeJ(sortedIndices, j, x) 
            j++ 
        } 
        x++ 
     }
     while (i < hi1) { 
        arr.push(sortedIndices[i]) 
        //sortedIndices = insertIBeforeJ(sortedIndices, i, x) 
        i++ 
        x++ 
     }
     while (j < hi2) { 
        arr.push(sortedIndices[j]) 
        //sortedIndices = insertIBeforeJ(sortedIndices, j, x) 
        j++ 
        x++ 
     }
     console.log("sorting: " + data[sortedIndices[lo1]],  data[sortedIndices[hi2 - 1]]) 
     for (let x = lo1, y = 0; y < arr.length; x++, y++) { 
        steps.push([ 
            { 
                func: changeColor, 
                args: [arr[y], green]
            }, 
            {
                func: insertBefore, 
                args: [arr[y], sortedIndices[x]]
            }
        ])
         sortedIndices[x] = arr[y] 
         steps.push([
            { 
                func: changeColor, 
                args: [sortedIndices[x], lightBlue] 
            }
         ])
     }
}