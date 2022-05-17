export const lightBlue = "#ABDAFC"
export const darkBlue = "#58b9ff"
export const green = "#78C091"
export const lightGreen = "#C5EFCB"

export const changeColor = (i, color) => { 
    const e = document.getElementById(`e${i}`)
    e.lastChild.style.backgroundColor = color
}

export const delay = speed => {
    return new Promise(resolve => setTimeout(() => {
      resolve();
    }, 100)); 
}

export const insertBefore = (i,j) => { 
    const visualizer = document.getElementById("visualizer") 
    const ei = document.getElementById(`e${i}`)
    const ej = document.getElementById(`e${j}`)
    ei.style.animation = ""
    ej.style.animation = "" 
    visualizer.insertBefore(ei, ej) 
}

export const insertIBeforeJ = (sortedIndices, i, j) => { 
    const tmp = sortedIndices[i] 
    const removeI = sortedIndices.slice(0, i).concat(sortedIndices.slice(i+1))
    const beforeJ = removeI.slice(0, j) 
    beforeJ.push(tmp) 
    return beforeJ.concat(removeI.slice(j)) 
} 

