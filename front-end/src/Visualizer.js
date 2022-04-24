import './Visualizer.css' 
import { useState, useEffect} from 'react' 

export const lightBlue = "#ABDAFC"
export const darkBlue = "#58b9ff"
export const green = "#78C091"
export const changeColor = (i, color) => { 
    const e = document.getElementById(`e${i}`)
    e.lastChild.style.backgroundColor = color
}
export const delay = () => {
    return new Promise(resolve => setTimeout(() => {
      resolve();
    }, 100)); 
}

const Visualizer = props => { 

    const [input, setInput] = useState('')  
    const [data, setData] = useState([]) 
    const [sort, setSort] = useState(() => () => {})
    const getData = (input) => { 
        const data = input.split(',') 
        data.forEach((element, i) => { 
            data[i] = parseInt(element) 
        })
        setData(data) 
    }

    useEffect(() => { 
        if (props.sort) { 
            import(`./sorts/${props.sort}`)
            .then(async (Sort)=> { 
                slideTitle(Sort.title) 
                await setSort(() => Sort.sort) 
            })
        } 
    }, [props.sort])

    const slideTitle = (title) => { 
        const titleBar = document.getElementById('Visualizer-title') 
        const titleParent = titleBar.parentNode 
        titleParent.removeChild(titleBar)  
        titleBar.lastChild.innerHTML = title
        titleBar.style.marginLeft = "0px" 
        titleParent.appendChild(titleBar) 
    }

    const handleSave = e => { 
        e.preventDefault() 

        const visualizer = document.getElementById("visualizer") 
        while (visualizer.firstChild) 
            visualizer.removeChild(visualizer.firstChild) 

        const max = Math.max(...data)
        
        data.forEach((element, i) => { 

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

    const handleClick = async () => { 
        await sort(data)
        endSort()
    }

    const endSort = () => { 
        for (let i = 0; i < data.length; i ++) { 
            const e = document.getElementById(`e${i}`) 
            e.lastChild.style.backgroundColor = lightBlue
        }
    }

    return ( 
        <main className = "Visualizer">
            <header>
                VISUALIZER&nbsp;
                <div>
                    <header id = "Visualizer-title">
                        /&nbsp;<span></span>
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
                        onChange = {e => { 
                            setInput(e.target.value)
                            getData(e.target.value) 
                        }} 
                    /> 
                    <button> Save </button>
                </form>
                <button onClick = {handleClick}> Sort </button>
            </div>
        </main>
    )
}

export default Visualizer 