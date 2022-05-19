import { green, lightBlue, changeColor, darkBlue } from '../Helper'
import { insertBefore, insertIBeforeJ, unpackSteps } from '../Helper'

let steps = [] 
let root = null 
let sortedIndices = []
let data = [] 

export const title = "QUICK SORT" 

export const sort = async (visualizerData) => { 
    steps = [] 
    root = {} 
    data = visualizerData
    sortedIndices = [...Array(data.length).keys()]
    root = quickSort(0, data.length) 
    convertToSteps(root, 0) 
    steps = unpackSteps(steps) 
    return steps 
} 

export const convertToSteps = (node, depth) => { 
    if (!node) return 
    if (!steps[depth]) steps[depth] = [] 
    convertToSteps(node.left, depth + 1) 
    convertToSteps(node.right, depth + 1) 
    steps[depth].push(node.steps) 
    return  
}

const quickSort = (lo, hi) => {
    if (hi <= lo || lo >= data.length) return null 
    
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
    
    let part = partition(lo, hi)
    const p = part[0] 
    node.steps = part[1]
    node.left = quickSort(lo, p) 
    node.right = quickSort(p+1, hi) 
    return node 
}

const partition = (lo, hi) => { 

    const pivotValue = data[sortedIndices[lo]] 
    
    let left = [] 

    for (let i = lo; i < hi; i++) { 
        if (data[sortedIndices[i]] < pivotValue) 
            left.push(sortedIndices[i]) 
    }

    let step = [] 

    step.push([ 
        { 
            func: changeColor, 
            args: [sortedIndices[lo], green]
        }
    ]) 

    for (let i = lo, j = 0; j < left.length; i++, j++) {
        step.push([
            { 
                func: insertBefore, 
                args: [left[j], sortedIndices[i]]
            }
        ])
        let z = sortedIndices.indexOf(left[j])
        sortedIndices = insertIBeforeJ(sortedIndices, z, i) 
    } 

    const p = lo + left.length 

    step.push([ 
        { 
            func: changeColor, 
            args: [sortedIndices[p], lightBlue]
        }
    ])

    return [p, step] 
}