import { delay, darkBlue, green, lightBlue, lightGreen, changeColor } from '../Visualizer'

export const title = 'INSERTION SORT' 

const insertBefore = (i,j) => { 
    const visualizer = document.getElementById("visualizer") 
    const ei = document.getElementById(`e${i}`)
    const ej = document.getElementById(`e${j}`)
    ei.style.animation = ""
    ej.style.animation = "" 
    visualizer.insertBefore(ei, ej) 
}

const insertIBeforeJ = (sortedIndices, i, j) => { 
    const tmp = sortedIndices[i] 
    const removeI = sortedIndices.slice(0, i).concat(sortedIndices.slice(i+1))
    const beforeJ = removeI.slice(0, j) 
    beforeJ.push(tmp) 
    return beforeJ.concat(removeI.slice(j)) 
} 

export const sort = async (data)  => { 
    let steps = [] 
    let sortedIndices = [...Array(data.length).keys()]
    for (let i = 0; i < data.length; i++) { 
        //changeColor(i, green) 

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

            // steps.push({ 
            //     func: changeColor, 
            //     args: [sortedIndices[j], darkBlue] 
            // })

            //changeColor(sortedIndices[j], darkBlue) 
            //await delay() 
            //changeColor(sortedIndices[j], lightBlue) 

            // steps.push({ 
            //     func: changeColor, 
            //     args: [sortedIndices[j], lightBlue] 
            // })
            // const step = [{
            //     func: changeColor, 
            //     args: [sortedIndices[j], darkBlue], 
            // }]
            // if (j !== i - 1) { 
            //     step.unshift({ 
            //         func: changeColor, 
            //         args: [sortedIndices[j+1], green]
            //     })
            // }
            //console.log(step) 
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

                // { 
                //     func: changeColor, 
                //     args: [sortedIndices[j+1], green]
                // }, 
                // { 
                //     func: changeColor, 
                //     args: [sortedIndices[j], darkBlue], 
                // }, 

                // {
                //     func: delay, 
                //     args: null, 
                // }, 
                // { 
                //     func: changeColor, 
                //     args: [sortedIndices[j], green], 
                // }, 

            )

            j--
        } 
        j++ 
        //insertBefore(i, sortedIndices[j])
        // steps.push({ 
        //     func: insertBefore, 
        //     args: [i, sortedIndices[j]] 
        // })

        //changeColor(i, lightBlue)   
        // steps.push({ 
        //     func: changeColor, 
        //     args: [i, lightBlue] 
        // })
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
        // steps.push([
        //     { 
        //         func: insertBefore, 
        //         args: [i, sortedIndices[j]], 
        //     },
        // ])

        sortedIndices = insertIBeforeJ(sortedIndices,i,j) 
    }
    return steps 
}