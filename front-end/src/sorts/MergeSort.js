import { lightBlue, darkBlue, lightGreen, darkGreen, changeColor } from '../Helper'
import { insertBefore, insertIBeforeJ, unpackSteps, colorInline, tab } from '../Helper'

let steps = [] 
let root = null 
let sortedIndices = [] 
let data = [] 

export const info = ( 
    <div>
        Merge Sort is a recursive sorting algorithm with O(N*logN) runtime. 
        <br></br><br></br>
        Merge Sort splits the array into two halves, {colorInline('darkGreen', 'left')} and {colorInline('darkBlue', 'right')}, and calls itself on each half. The two halves are then merged together into one sorted array.
    </div>
)

export const code = ( 
    <pre className = 'code'> 
        mergeSort(arr) &#123;
        <br></br>
        {tab}if (arr.length == 1) 
        <br></br>
        {tab}{tab}return {colorInline('lightGreen','arr')} 
        <br></br>
        {tab}m = lo + (hi - lo) / 2 
        <br></br>
        {tab}{colorInline('darkGreen', 'left')} = mergeSort({colorInline('darkGreen', 'arr[0...m]')})
        <br></br>
        {tab}{colorInline('darkBlue', 'right')} = mergeSort({colorInline('darkBlue', 'arr[m...arr.length]')})
        <br></br>
        {tab}return merge({colorInline('darkGreen', 'left')}, {colorInline('darkBlue', 'right')})
        <br></br>
        &#125;

        <br></br><br></br>
        merge(left, right) &#123;
        <br></br>
        {tab}mergedArray = []  
        <br></br>
        {tab}i = 0, j = 0, k = 0
        <br></br>
        {tab}while (i &#60; left.length &amp;&amp; j &#60; right.length) &#123; {tab}
        <br></br>
        {tab}{tab}if ({colorInline('darkGreen', 'left[i]')} &#60;= {colorInline('darkBlue', 'right[j]')})
        <br></br>
        {tab}{tab}{tab}{colorInline('lightGreen', 'mergedArray[k++]')} = {colorInline('darkGreen', 'left[i++]')}
        <br></br>
        {tab}{tab}else 
        <br></br>
        {tab}{tab}{tab}{colorInline('lightGreen', 'mergedArray[k++]')} = {colorInline('darkBlue', 'right[j++]')}
        <br></br>
        {tab}&#125;
        <br></br>
        {tab}while (i &#60; left.length)
        <br></br>
        {tab}{tab}{colorInline('lightGreen', 'mergedArray[k++]')} = {colorInline('darkGreen', 'left[i++]')}
        <br></br>
        {tab}while (j &#60; right.length)
        <br></br>
        {tab}{tab}{colorInline('lightGreen', 'mergedArray[k++]')} = {colorInline('darkBlue', 'right[j++]')}
        <br></br>
        {tab}return {colorInline('lightBlue', 'mergedArray')}
        <br></br>
        &#125;
    </pre>
)

export const title = "MERGE SORT" 

export const sort = async (visualizerData) => { 
    steps = [] 
    root = {} 
    data = visualizerData 
    sortedIndices = [...Array(data.length).keys()]
    
    let height = Math.floor(Math.log2(data.length)) 
    if (Math.log(data.length)/Math.log(2) % 1 !== 0)
        height++ 
    
    root = mergeSort(0, data.length)
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

const mergeSort = (lo, hi) => { 
    let node = { 
        steps: [], 
        left: null, 
        right: null, 
    }
    if (hi - lo === 1) { 
        node.steps = [
            [{ 
                func: changeColor, 
                args: [sortedIndices[lo], lightGreen] 
            }], 
            [{ 
                func: changeColor, 
                args: [sortedIndices[lo], lightBlue]
            }]
        ]
        return node 
    } 
    let m = lo + Math.floor((hi - lo)/2) 
    let left = mergeSort(lo, m) 
    if (left) node.left = left
    let right = mergeSort(m, hi) 
    if (right) node.right = right 
    node.steps = merge(lo, m, m, hi)   
    return node 
}

const merge = (lo1, hi1, lo2, hi2) => { 

    const step = [] 

    let separateLeftRight = [] 

    for (let x = lo1; x < hi1; x++) { 
        separateLeftRight.push({ 
            func: changeColor, 
            args: [sortedIndices[x], darkGreen]
        })
    }

    for (let x = lo2; x < hi2; x++) { 
        separateLeftRight.push({ 
            func: changeColor, 
            args: [sortedIndices[x], darkBlue]
        })
    }

    step.push(separateLeftRight)

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
                args: [arr[y], lightGreen]
            }, 
            {
                func: insertBefore, 
                args: [arr[y], sortedIndices[x]]
            }
        ] 
        step.push(currentStep) 

        let z = sortedIndices.indexOf(arr[y])
        sortedIndices = insertIBeforeJ(sortedIndices, z, x) 
    }

    const resetStep = [] 

    for (let k = lo1; k < hi2; k++) { 
        resetStep.push({ 
            func: changeColor, 
            args: [sortedIndices[k], lightBlue] 
        })
    }

    step.push(resetStep) 

    return step
}