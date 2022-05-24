import { lightBlue, darkBlue, lightGreen, darkGreen, changeColor } from '../Helper'
import { swap, colorInline, tab } from '../Helper'

export const title = "SELECTION SORT" 

export const info = ( 
    <div>
        Selection Sort is an iterative sorting algorithm with O(N<sup>2</sup>) runtime. 
        <br></br><br></br>
        The array is split into a {colorInline('lightGreen', 'sorted')} and an {colorInline('lightBlue', 'unsorted')} subarray. 
        Selection Sort finds the {colorInline('darkGreen', 'smallest value')} in the unsorted subarray and inserts it at the end of the sorted subarray until all the elements are sorted. 
    </div>
)

export const code = ( 
    <pre className = 'code'> 
        for (i = 0; i &#60; arr.length; i++) &#123;
        <br></br>
        {tab}min = i 
        <br></br>
        {tab}for (j = i+1; j &#60; arr.length; j++) &#123;
        <br></br>
        {tab}{tab}if ({colorInline('darkBlue', 'arr[j]')} &#60; {colorInline('darkGreen', 'arr[min]')}) 
        <br></br>
        {tab}{tab}{tab}min = j 
        <br></br>
        {tab}&#125;
        <br></br>
        {tab}temp = {colorInline('lightBlue', 'arr[i]')} 
        <br></br>
        {tab}{colorInline('lightBlue', 'arr[i]')} = {colorInline('darkGreen', 'arr[min]')}
        <br></br>
        {tab}{colorInline('darkGreen', 'arr[min]')} = temp
        <br></br>
        &#125;
    </pre>
)

export const sort = async (data)  => { 
    let steps = [] 
    let sortedIndices = [...Array(data.length).keys()]
    for (let i = 0; i < data.length; i ++) { 
        let min = data[sortedIndices[i]] 
        let minIndex = i
        steps.push([
            { 
                func: changeColor, 
                args: [sortedIndices[i], darkGreen] 
            }, 
            { 
                func: changeColor, 
                args: [sortedIndices[data.length - 1], lightBlue]
            },
        ])
        for (let j = i + 1; j < data.length; j ++) { 
            const step = [] 
            if (j-1 !== minIndex)  
                step.push({ 
                    func: changeColor, 
                    args: [sortedIndices[j-1], lightBlue]
                })
            if (data[sortedIndices[j]] < min) { 
                step.push({ 
                    func: changeColor, 
                    args: [sortedIndices[j], darkGreen] 
                }) 
                step.push({ 
                    func: changeColor, 
                    args: [sortedIndices[minIndex], lightBlue]
                })
                min = data[sortedIndices[j]] 
                minIndex = j 
            }
            else { 
                step.push({ 
                    func: changeColor, 
                    args: [sortedIndices[j], darkBlue]
                }) 
            }
            steps.push(step) 
        }
        steps.push([
            { 
                func: swap, 
                args: [sortedIndices[minIndex], sortedIndices[i]], 
            }, 
            { 
                func: changeColor, 
                args: [sortedIndices[data.length - 1], lightBlue]
            },
            { 
                func: changeColor, 
                args: [sortedIndices[minIndex], lightGreen]
            }, 
        ]) 
        const tmp = sortedIndices[minIndex] 
        sortedIndices[minIndex] = sortedIndices[i] 
        sortedIndices[i] = tmp 
    }
    return steps 
} 