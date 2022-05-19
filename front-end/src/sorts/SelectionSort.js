import { green, lightBlue, changeColor, darkBlue } from '../Helper'
import { insertBefore, insertIBeforeJ } from '../Helper'

export const title = "SELECTION SORT" 

export const sort = async (data)  => { 
    let steps = [] 
    let sortedIndices = [...Array(data.length).keys()]
    for (let i = 0; i < data.length; i ++) { 
        let min = data[sortedIndices[i]] 
        let minIndex = i
        steps.push([
            { 
                func: changeColor, 
                args: [sortedIndices[i], green] 
            }
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
                    args: [sortedIndices[j], green] 
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
                func: insertBefore, 
                args: [sortedIndices[minIndex], sortedIndices[i]], 
            }, 
            { 
                func: changeColor, 
                args: [sortedIndices[minIndex], lightBlue]
            }, 
            { 
                func: changeColor, 
                args: [sortedIndices[data.length - 1], lightBlue]
            }
        ]) 
        sortedIndices = insertIBeforeJ(sortedIndices, minIndex, i)
    }
    return steps 
} 