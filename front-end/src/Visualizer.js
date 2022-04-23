import './Visualizer.css' 
import { useState, useEffect} from 'react' 

const Visualizer = props => { 

    const [sort, setSort] = useState('') 
    const [input, setInput] = useState('') 

    useEffect(() => { 
        setSort(props.sort) 
    }, [props.sort])

    console.log(sort) 

    const insertionSort = () => { 
        const title = document.getElementById('Visualizer-title') 
        if (sort === 'insertion') { 
            title.style.marginLeft = "0px" 
        }
    }

    insertionSort()

    const visualizer = document.getElementById("visualizer") 

    const swap = (id1, id2) => { 
        const e1 = document.getElementById(`e${id1}`) 
        const e2 = document.getElementById(`e${id2}`)
        e1.lastChild.style.backgroundColor = "#58b9ff"
        e2.lastChild.style.backgroundColor = "#58b9ff" 

        e1.style.animation = ""; 
        e2.style.animation = ""; 
        visualizer.insertBefore(e2, e1.nextSibling) 
        visualizer.insertBefore(e1, e2.nextSibling) 
    }

    const handleSave = e => { 
        e.preventDefault() 

        while (visualizer.firstChild) 
            visualizer.removeChild(visualizer.firstChild) 

        const finalInput = input.split(',') 
        finalInput.forEach((element, i) => { 
            finalInput[i] = parseInt(element) 
        })
        const max = Math.max(...finalInput)
        
        finalInput.forEach((element, i) => { 

            const barComp = document.createElement("div")
            barComp.className = "barComp"         
            barComp.id = `e${i}`
            barComp.style.marginLeft = "5px" 
            barComp.style.marginRIght = "5px"
            barComp.style.width = "15px"

            const num = document.createElement("p") 
            num.innerHTML = element; 

            const bar = document.createElement("div") 
            bar.className = "bar" 
            bar.style.height = `${element/max * 300}px`
             
            barComp.style.height = `${element/max * 300 + 10}px`
            barComp.appendChild(num) 
            barComp.appendChild(bar) 
            barComp.style.animation = "grow 1s forwards"

            visualizer.appendChild(barComp) 
        })
    }

    const handleClick = () => { 
        swap(1,2) 
    }

    return ( 
        <main className = "Visualizer">
            <header>
                VISUALIZER&nbsp;
                <div>
                    <header id = "Visualizer-title">
                        /&nbsp;<span>INSERTION SORT</span>
                    </header>
                </div>
            </header>
            <div className = "Visualizer-main">
                <div id = "visualizer"> 
                </div>
                <form onSubmit = {handleSave} > 
                    <input
                        type = "text" 
                        placeholder = "Please enter values separated by commas. (Ex. 4,10,7,3,2,9,8,1,6)" 
                        value = {input} 
                        onChange = {e => setInput(e.target.value)} 
                    /> 
                    <button> Save </button>
                </form>
                <button onClick = {handleClick}> Swap </button>
            </div>
        </main>
    )
}

export default Visualizer 