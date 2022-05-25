import { lightBlue, darkBlue, darkerBlue, lightGreen, darkGreen, changeColor } from '../Helper'
import { swap, unpackSteps, colorInline, tab } from '../Helper'

let steps = [] 
let root = null 
let sortedIndices = []
let data = [] 

export const title = "QUICK SORT" 

export const info = ( 
    <div>
        Quick Sort is a recursive sorting algorithm with O(N*logN) runtime. 
        <br></br><br></br>
        Quick Sort partitions the array by placing all elements less than a chosen {colorInline('darkGreen', 'pivot')} before it and all elements greater than the {colorInline('darkGreen', 'pivot')} after it.
        It then calls itself on the subarray before the pivot and the subarray after the pivot. 
        <br></br><br></br>
        To partition the array, Quick Sort uses two pointers, {colorInline('darkBlue', 'arr[i]')} and {colorInline('darkerBlue', 'arr[j]')}, to pass through it. 
        When {colorInline('darkBlue', 'arr[i]')} is greater than the {colorInline('darkGreen', 'pivot')} and {colorInline('darkerBlue', 'arr[j]')} is less than the {colorInline('darkGreen', 'pivot')}, the two are swapped. 
        The {colorInline('darkGreen', 'pivot')} is then inserted after {colorInline('darkBlue', 'arr[i]')}. 
    </div>
)

export const code = ( 
    <div>
        <pre className = 'code'>
            quickSort(arr) &#123;
            <br></br>
            {tab}if (arr.length &#62; 0) &#123;
            <br></br>
            {tab}{tab}{colorInline('lightGreen', 'p')} = partition(arr) 
            <br></br>
            {tab}{tab}quickSort(arr[0...p-1])
            <br></br>
            {tab}{tab}quickSort(arr[p+1...arr.length])
            <br></br>
            {tab}&#125;
            <br></br>
            &#125;

            <br></br><br></br>

            partition(arr) &#123;
            <br></br>
            {tab}{colorInline('darkGreen', 'pivot')} = arr[arr.length - 1] 
            <br></br>
            {tab}i = -1 
            <br></br>
            {tab}for (j = 0; j &#60; arr.length; j++) &#123;
            <br></br>
            {tab}{tab}if ({colorInline('darkerBlue', 'arr[j]')} &#60; {colorInline('darkGreen', 'pivot')}) &#123;
            <br></br>
            {tab}{tab}{tab}i++ 
            <br></br>
            {tab}{tab}{tab}temp = {colorInline('darkBlue', 'arr[i]')}
            <br></br>
            {tab}{tab}{tab}{colorInline('darkBlue', 'arr[i]')} = {colorInline('darkerBlue', 'arr[j]')}
            <br></br>
            {tab}{tab}{tab}{colorInline('darkerBlue', 'arr[j]')} = temp 
            <br></br>
            {tab}{tab}&#125;
            <br></br>
            {tab}&#125;
            <br></br>
            {tab}temp = {colorInline('lightGreen', 'arr[i+1]')}
            <br></br>
            {tab}{colorInline('lightGreen', 'arr[i+1]')} = {colorInline('darkGreen', 'arr[arr.length - 1]')}
            <br></br>
            {tab}{colorInline('darkGreen', 'arr[arr.length - 1]')} = temp
            <br></br>
            {tab}return i + 1
            <br></br>
            &#125;
        </pre>
        {/* <font size = "1">
            Note: While Merge Sort and Quick Sort have the same average runtime, 
            to show the mechanisms of the partition function clearly, 
            Quick Sort's implementation in this visualizer will generally be slower than Merge Sort.
        </font> */}
    </div> 
)

export const sort = async (visualizerData) => { 
    steps = [] 
    root = {} 
    data = visualizerData
    sortedIndices = [...Array(data.length).keys()]
    root = quickSort(0, data.length-1) 
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
    if (lo < hi) {
        let node = { 
            steps: [], 
            left: null, 
            right: null, 
        }
        let part = partition(lo, hi)
        const p = part[0] 
        node.steps = part[1]
        node.left = quickSort(lo, p-1) 
        node.right = quickSort(p+1, hi) 
        return node 
    }
}

const partition = (lo, hi) => { 

    const step = [] 

    const pivot = data[sortedIndices[hi]] 

    let i = (lo-1)
    let j = lo

    step.push([
        { 
            func: changeColor, 
            args: [sortedIndices[hi], darkGreen]
        }
    ])

    for (; j <= hi - 1; j++) { 
        const moveIandJ = [ 
            { 
                func: changeColor, 
                args: [sortedIndices[j], darkerBlue]
            }
        ] 
        if (j !== lo) { 
            moveIandJ.push({ 
                func: changeColor, 
                args: [sortedIndices[j-1], lightBlue]
            })
        }
        if (data[sortedIndices[j]] < pivot) {  
            if (i!==lo-1) { 
                moveIandJ.push({ 
                    func: changeColor, 
                    args: [sortedIndices[i], lightBlue]
                })
            }
            i++ 
            moveIandJ.push({ 
                func: changeColor, 
                args: [sortedIndices[i], darkBlue]
            })
            step.push(moveIandJ) 
            const swapStep =[] 
            swapStep.push(
                { 
                    func: swap, 
                    args: [sortedIndices[i], sortedIndices[j]]
                }
            )
            const tmp = sortedIndices[i]
            sortedIndices[i] = sortedIndices[j] 
            sortedIndices[j] = tmp 
            swapStep.push(
                { 
                    func: changeColor, 
                    args: [sortedIndices[i], darkBlue]
                }
            )
            swapStep.push(
                { 
                    func: changeColor, 
                    args: [sortedIndices[j], darkerBlue]
                }, 
            )
            step.push(swapStep)
        }
        else step.push(moveIandJ)
    }

    const insertPivot = ([ 
        { 
            func: changeColor, 
            args: [sortedIndices[hi], lightGreen]
        }, 
        { 
            func: swap, 
            args: [sortedIndices[i+1], sortedIndices[hi]]
        },
    ])

    if (i >= lo) { 
        insertPivot.unshift({ 
            func: changeColor, 
            args: [sortedIndices[i], lightBlue]
        })
    }
    if (j >= lo+1) { 
        insertPivot.unshift({ 
            func: changeColor, 
            args: [sortedIndices[j-1], lightBlue]
        })
    }

    step.push(insertPivot)

    const tmp = sortedIndices[i+1]
    sortedIndices[i+1] = sortedIndices[hi] 
    sortedIndices[hi] = tmp 

    return [i+1, step] 
}