import { darkBlue, green, lightBlue, changeColor } from '../Helper'
import { insertBefore } from '../Helper'

export const title = "BUBBLE SORT" 

export const sort = async (data)  => { 
    let steps = [] 
    let sortedIndices = [...Array(data.length).keys()]
    
    for (let i = 0; i < data.length; i ++) { 
        let swapped = false;

        if (i !== 0) 
            steps.push([
                {
                    func: changeColor, 
                    args: [sortedIndices[data.length-i], lightBlue]
                }, 
                { 
                    func: changeColor, 
                    args: [sortedIndices[data.length-i-1], lightBlue]
                }
            ])

        for (let j = 0; j < data.length - i - 1; j ++) { 
            const step = [] 
            step.push( 
                {
                    func: changeColor, 
                    args: [sortedIndices[j], green]
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