export const lightBlue = "#ABDAFC"
export const darkBlue = "#58b9ff"
export const darkerBlue = "#129bfd"
export const lightGreen = "#a0e9aa"
export const darkGreen = "#43b051"

export const changeColor = (i, color) => { 
    const e = document.getElementById(`e${i}`)
    e.lastChild.style.backgroundColor = color
}

export const tab = (<span>&emsp;&emsp;</span>)

export const colorInline = (color, body) => { 
    return (<span className = {color}>{body}</span>)
}

export const delay = speed => {
    return new Promise(resolve => setTimeout(() => {
      resolve();
    }, 100)); 
}

export const swap = (i,j) => { 
    const visualizer = document.getElementById("visualizer") 
    const ei = document.getElementById(`e${i}`)
    const ej = document.getElementById(`e${j}`)
    const sibi = ei.nextSibling 
    const sibj = ej.nextSibling  
    ei.style.animation = ""
    ej.style.animation = "" 
    visualizer.insertBefore(ej, sibi) 
    visualizer.insertBefore(ei, sibj) 
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

//for recursive algorithms 
export const unpackSteps = (steps) => { 
    let newSteps = [] 
    for (let i = 0; i < steps.length; i ++) { 
        let currentLevel = mergeArrays(steps[i])
        for (let j = 0; j < currentLevel.length; j ++) 
            newSteps.push(currentLevel[j]) 
    }
    return newSteps
}

export const mergeArrays = (arr) => { 
    if (arr.length === 1) 
        return arr[0]

    let newArr = []  
    let m = Math.floor(arr.length/2) 
    let left = mergeArrays(arr.splice(0, m)) 
    let right = mergeArrays(arr) 

    while (left.length && right.length) { 
        let step = [] 
        let a = left.shift() 
        let b = right.shift() 
        for (let i = 0; i < a.length; i ++) 
            step.push(a[i]) 
        for (let j = 0; j < b.length; j ++) 
            step.push(b[j]) 
        newArr.push(step) 
    }

    while (left.length) 
        newArr.push(left.shift()) 
    while (right.length)
        newArr.push(right.shift()) 

    return newArr 
}