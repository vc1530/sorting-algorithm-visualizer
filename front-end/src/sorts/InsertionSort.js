import { darkBlue, green, lightBlue, changeColor } from '../Visualizer'

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
        steps.push({ 
            func: changeColor, 
            args: [i, green],  
        })
        const current = data[i]
        let j = i-1
        while ((j>-1) && (current < data[sortedIndices[j]])) { 
            steps.push({ 
                func: changeColor, 
                args: [sortedIndices[j], darkBlue] 
            })
            //changeColor(sortedIndices[j], darkBlue) 
            //await delay() 
            //changeColor(sortedIndices[j], lightBlue) 
            steps.push({ 
                func: changeColor, 
                args: [sortedIndices[j], lightBlue] 
            })
            j--
        } 
        j++ 
        //insertBefore(i, sortedIndices[j])
        steps.push({ 
            func: insertBefore, 
            args: [i, sortedIndices[j]] 
        })
        //changeColor(i, lightBlue)   
        steps.push({ 
            func: changeColor, 
            args: [i, lightBlue] 
        })
        sortedIndices = insertIBeforeJ(sortedIndices,i,j) 
    }
    return steps 
}