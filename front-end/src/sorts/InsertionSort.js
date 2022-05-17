import { darkBlue, green, lightBlue, changeColor } from '../Helper'
import { insertBefore, insertIBeforeJ } from '../Helper'

export const title = 'INSERTION SORT' 

export const sort = async (data)  => { 
    let steps = [] 
    let sortedIndices = [...Array(data.length).keys()]
    for (let i = 0; i < data.length; i++) { 
        const step = [ 
            { 
                func: changeColor, 
                args: [i, green],  
            }
        ]
        if (i !== 0) { 
            step.unshift({ 
                func: changeColor, 
                args: [i - 1, lightBlue], 
            })
        }
        steps.push(step)
        const current = data[i]
        let j = i-1
        while ((j>-1) && (current < data[sortedIndices[j]])) { 
            const step = [ 
                { 
                    func: changeColor, 
                    args: [sortedIndices[j], darkBlue], 
                }, 
            ]
            if (j !== (i-1)) step.unshift( 
                { 
                    func: changeColor, 
                    args: [sortedIndices[j+1], lightBlue]
                }
            )
            steps.push(
                step
            )
            j--
        } 
        j++ 
        steps.push([ 
            { 
                func: changeColor, 
                args: [sortedIndices[j], lightBlue], 
            }, 
            { 
                func: insertBefore, 
                args: [i, sortedIndices[j]], 
            },
        ])
        sortedIndices = insertIBeforeJ(sortedIndices,i,j) 
    }
    return steps 
}