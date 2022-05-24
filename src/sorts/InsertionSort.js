import { darkBlue, lightGreen, changeColor } from '../Helper'
import { insertBefore, insertIBeforeJ, colorInline, tab } from '../Helper'

export const title = 'INSERTION SORT' 

export const info = (
    <div>
        Insertion Sort is an iterative sorting algorithm with O(N<sup>2</sup>) runtime. 
        <br></br><br></br>
        The array is split into a {colorInline('lightGreen', 'sorted')} and an {colorInline('lightBlue', 'unsorted')} subarray. 
        For each element {colorInline('darkBlue', 'arr[i]')} in the unsorted subarray, {colorInline('darkGreen', 'arr[j]')} is swapped with elements in the sorted subarray until it reaches its correct position in the array. 
    </div>
)

export const code = ( 
    <pre className = 'code'> 
        for (i = 1; i &#60; arr.length; i++) &#123;
        <br></br>
        {tab}j = i-1
        <br></br>
        {tab}while (j &#62; -1 &amp;&amp; {colorInline('darkBlue', 'arr[j+1]')} &#60; {colorInline('lightGreen', 'arr[i]')}) &#123;
        <br></br>
        {tab}{tab}temp = {colorInline('darkBlue', 'arr[j+1]')}
        <br></br>
        {tab}{tab}{colorInline('darkBlue', 'arr[j+1]')} = {colorInline('lightGreen', 'arr[j]')}
        <br></br>
        {tab}{tab}{colorInline('lightGreen', 'arr[j]')} = temp 
        <br></br>
        {tab}{tab}j-- 
        <br></br>
        {tab}&#125;
        <br></br>
        &#125;
    </pre>
)

export const sort = async (data)  => { 
    let steps = [] 
    let sortedIndices = [...Array(data.length).keys()]
    for (let i = 0; i < data.length; i++) { 
        steps.push([ 
            { 
                func: changeColor, 
                args: [sortedIndices[i], darkBlue],  
            }
        ])
        const current = data[sortedIndices[i]]
        let j = i-1
        while ((j>-1) && (current < data[sortedIndices[j]])) { 
            steps.push([ 
                { 
                    func: insertBefore, 
                    args: [sortedIndices[j+1], sortedIndices[j]]
                }, 
            ])
            sortedIndices = insertIBeforeJ(sortedIndices,j+1,j) 
            j--
        } 
        steps.push([ 
            { 
                func: changeColor, 
                args: [sortedIndices[j+1], lightGreen], 
            }, 
        ])
    }
    return steps 
}