import { green, lightBlue, changeColor, darkBlue, insertIBeforeJ } from '../Helper'
import { insertBefore } from '../Helper'

let steps = [] 
let root = null 
let sortedIndices = [] 

export const title = "MERGE SORT" 

export const sort = async (data) => { 
    steps = [] 
    root = {} 
    sortedIndices = [...Array(data.length).keys()]
    
    let height = Math.floor(Math.log2(data.length)) 
    if (Math.log(data.length)/Math.log(2) % 1 !== 0)
        height++ 
    
    root = mergeSort(data, 0, data.length)
    convertToSteps(root, height)  
    steps = unpackSteps(steps) 
    return steps   
}

const convertToSteps = (node, depth) => { 
    if (!node) return 
    if (!steps[depth]) steps[depth] = [] 
    convertToSteps(node.left, depth - 1) 
    convertToSteps(node.right, depth - 1) 
    steps[depth].push(node.steps) 
    return 
}

const unpackSteps = (steps) => { 
    let newSteps = [] 
    for (let i = 0; i < steps.length; i ++) { 
        let currentLevel = mergeArrays(steps[i])
        for (let j = 0; j < currentLevel.length; j ++) 
            newSteps.push(currentLevel[j]) 
    }
    return newSteps
}

const mergeArrays = (arr) => { 
    if (arr.length === 1) 
        return arr[0]

    let newArr = []  
    let m = Math.floor(arr.length/2) 
    let left = mergeArrays(arr.splice(0, m)) 
    let right = mergeArrays(arr) 

    while (left.length && right.length) { 
        let step = [] 
        let a = left.shift() 
        let b = right.shift() 
        for (let i = 0; i < a.length; i ++) 
            step.push(a[i]) 
        for (let j = 0; j < b.length; j ++) 
            step.push(b[j]) 
        newArr.push(step) 
    }

    while (left.length) 
        newArr.push(left.shift()) 
    while (right.length)
        newArr.push(right.shift()) 

    return newArr 
}

const mergeSort = (data, lo, hi) => { 
    let node = { 
        steps: [], 
        left: null, 
        right: null, 
    }
    if (hi - lo === 1) { 
        node.steps = [
            [{ 
                func: changeColor, 
                args: [sortedIndices[lo], darkBlue] 
            }], 
            [{ 
                func: changeColor, 
                args: [sortedIndices[lo], lightBlue]
            }]
        ]
        return node 
    } 
    let m = lo + Math.floor((hi - lo)/2) 
    let left = mergeSort(data, lo, m) 
    if (left) node.left = left
    let right = mergeSort(data, m, hi) 
    if (right) node.right = right 
    node.steps = merge(data, lo, m, m, hi)   
    return node 
}

const merge = (data, lo1, hi1, lo2, hi2) => { 

    let step = [] 

     let i = lo1, j = lo2 
     let arr = [] 

     while (i<hi1 && j<hi2) { 
        let a = data[sortedIndices[i]] 
        let b = data[sortedIndices[j]] 
        if (a <= b) 
            arr.push(sortedIndices[i++])
        else 
            arr.push(sortedIndices[j++])
     }

     while (i < hi1) 
        arr.push(sortedIndices[i++]) 

     while (j < hi2) 
        arr.push(sortedIndices[j++]) 

     for (let x = lo1, y = 0; y < arr.length; x++, y++) { 

        const currentStep = [ 
            { 
                func: changeColor, 
                args: [arr[y], green]
            }, 
            {
                func: insertBefore, 
                args: [arr[y], sortedIndices[x]]
            }
        ] 

        if (y!==0) { 
            currentStep.push(
                { 
                    func: changeColor, 
                    args: [arr[y-1], lightBlue], 
                }
            )
        }

        step.push(currentStep) 

        let z = sortedIndices.indexOf(arr[y])
        sortedIndices = insertIBeforeJ(sortedIndices, z, x) 

    }

    step.push([
        { 
            func: changeColor, 
            args: [arr[arr.length - 1], lightBlue], 
        }
    ])

    return step
}