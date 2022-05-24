import { lightBlue, darkBlue, lightGreen, darkGreen, changeColor } from '../Helper'
import { insertBefore, colorInline, tab } from '../Helper'

export const title = "BUBBLE SORT" 

export const info = (
    <div>
        Bubble Sort is an iterative sorting algorithm with O(N<sup>2</sup>) runtime. 
        <br></br><br></br>
        On each pass through the array, for each element {colorInline('darkGreen', 'arr[j]')}, if {colorInline('darkGreen', 'arr[j]')} is greater than {colorInline('darkBlue', 'arr[j+1]')}, then the two elements are swapped. 
        If no swaps are made, then the array is sorted. 
    </div>
)

export const code = ( 
    <pre className = 'code'> 
        for (i = 0; i &#60; arr.length; i++) &#123;
        <br></br>
        {tab}swapped = false 
        <br></br>
        {tab}for (j=0; j &#60; arr.length-i-1; j++) &#123;
        <br></br>
        {tab}{tab}if ({colorInline('darkGreen', 'arr[j]')} &#62; {colorInline('darkBlue', 'arr[j+1]')}) &#123;
        <br></br>
        {tab}{tab}{tab}temp = {colorInline('darkGreen', 'arr[j]')}
        <br></br>
        {tab}{tab}{tab}{colorInline('darkGreen', 'arr[j]')} = {colorInline('darkBlue', 'arr[j+1]')}
        <br></br>
        {tab}{tab}{tab}{colorInline('darkBlue', 'arr[j+1]')} = temp 
        <br></br>
        {tab}{tab}{tab}swapped = true 
        <br></br>
        {tab}{tab}&#125;
        <br></br>
        {tab}&#125;
        <br></br>
        {tab}if (!swapped) break 
        <br></br>
        &#125;
    </pre>
)

export const sort = async (data)  => { 
    let steps = [] 
    let sortedIndices = [...Array(data.length).keys()]
    
    for (let i = 0; i < data.length; i ++) { 
        let swapped = false;

        if (i !== 0) 
            steps.push([
                {
                    func: changeColor, 
                    args: [sortedIndices[data.length-i], lightGreen]
                }, 
                { 
                    func: changeColor, 
                    args: [sortedIndices[data.length-i-1], lightBlue]
                },
            ])

        for (let j = 0; j < data.length - i - 1; j ++) { 
            const step = [] 
            step.push( 
                {
                    func: changeColor, 
                    args: [sortedIndices[j], darkGreen]
                }
            )
            if (j !== 0) { 
                step.push({ 
                    func: changeColor, 
                    args: [sortedIndices[j-1], lightBlue]
                })
            }
            if (data[sortedIndices[j]] > data[sortedIndices[j+1]]) { 
                step.push({ 
                    func: changeColor,
                    args: [sortedIndices[j+1], darkBlue]
                })
                step.push({ 
                    func: insertBefore, 
                    args: [sortedIndices[j+1], sortedIndices[j]]
                })
                const tmp = sortedIndices[j]
                sortedIndices[j] = sortedIndices[j+1] 
                sortedIndices[j+1] = tmp
                swapped = true 
            }  
            steps.push(step) 
        }

        if (!swapped) break 
    }

    return steps 
} 