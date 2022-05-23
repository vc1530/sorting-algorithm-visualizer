import './Visualizer.css' 
import { useState, useEffect} from 'react' 
import { lightBlue } from './Helper'

const Visualizer = props => { 

    let i = 0
    let steps = []
    let play = false 
    let speed 
    const [input, setInput] = useState('')  
    const [data, setData] = useState([]) 
    const [sort, setSort] = useState(() => async () => {})
    const getData = input => { 
        const data = input.split(',') 
        data.forEach((element, j) => { 
            data[j] = parseInt(element) 
        })
        setData(data) 
    }

    useEffect(() => {  

        disableBtn('pause-play') 
        disableBtn('next') 

        if (props.sort) {  
            import(`./sorts/${props.sort}`)
            .then(async (Sort)=> {  
                await setUp()
                props.getInfo(Sort.info) 
                props.getCode(Sort.code) 
                slideTitle(Sort.title) 
                setSort(() => Sort.sort)  
            })
        }
        //eslint-disable-next-line
    }, [props.sort])

    const disableBtn = (id) => { 
        const btn = document.getElementById(id) 
        btn.style.backgroundImage = "linear-gradient(to right, rgba(153,153,153,1) 0%, rgba(187,187,187,1) 51%, rgba(216,216,216,1) 100%)"
        btn.disabled = true
    }

    const enableBtn = (id) => { 
        const btn = document.getElementById(id) 
        btn.style.backgroundImage = "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)" 
        btn.disabled = false 
    }

    const slideTitle = (title) => { 
        const titleBar = document.getElementById('Visualizer-title') 
        const titleParent = titleBar.parentNode 
        titleParent.removeChild(titleBar)  
        titleBar.lastChild.innerHTML = title
        titleBar.style.marginLeft = "0px" 
        titleParent.appendChild(titleBar) 
    }

    const setUp = async () => { 

        document.querySelector('#slider').value = speed
        play = false
        steps = [] 
        i=0 
        
        if (props.sort && (data.length > 0)) {
            enableBtn('pause-play') 
            enableBtn('next') 
            document.querySelector(`#pause-play`).innerHTML = "Sort"
        } 

        const visualizer = document.getElementById("visualizer") 

        while (visualizer.firstChild) 
            visualizer.removeChild(visualizer.firstChild)

        const max = Math.max(...data)
        data.forEach((element, i) => { 
            const barComp = document.createElement("div")
            barComp.className = "barComp"         
            barComp.id = `e${i}`
            barComp.style.width = "15px"

            const num = document.createElement("p") 
            num.innerHTML = element; 

            const bar = document.createElement("div") 
            bar.className = "bar" 
            bar.style.height = `${element/max * 350}px`
            bar.style.backgroundColor = lightBlue

            barComp.style.height = `${element/max * 350 + 10}px`
            barComp.appendChild(num) 
            barComp.appendChild(bar) 
            barComp.style.animation = "grow 1s forwards"

            visualizer.appendChild(barComp) 
        })
    }

    const Sort = async () => { 
        if (steps.length === 0) steps = await sort(data) 
        if (play) { 
            await sortStep() 
            if (!speed) speed = 50
            setTimeout(Sort, (100-speed) * 5) 
        } 
    }

    const sortStep = async () => {
        if (steps.length === 0) steps = await sort(data) 
        if ((!steps) || i >= steps.length) { 
            endSort() 
            return 
        } 
        const step = steps[i]
        for (let j = 0; j < step.length; j ++) 
            step[j].func(step[j].args[0], step[j].args[1]) 
        i++
    }

    const endSort = () => { 
        disableBtn('pause-play') 
        disableBtn('next') 
        document.querySelector(`#pause-play`).innerHTML = "Sort"
        play = false 
        i = 0
        steps = [] 
        for (let j = 0; j < data.length; j ++) { 
            const e = document.getElementById(`e${j}`) 
            e.lastChild.style.backgroundColor = lightBlue
        }
    }

    return ( 
        <main className = "Visualizer">
            <header>
            <link rel="shortcut icon" href="/../favicon.ico" type="image/x-icon" />
                VISUALIZER&nbsp;
                <div>
                    <header id = "Visualizer-title">
                        /&nbsp;<span></span>
                    </header>
                </div>
            </header>
            <div className = "Visualizer-main">
                <div className = "Visualizer-form"> 
                    <div id = "visualizer"> 
                    </div>
                    <form onSubmit = {
                        async e => {
                            e.preventDefault() 
                            await setUp() 
                        }} > 
                        <input
                            id = "dataInput" 
                            type = "text" 
                            placeholder = "Please enter values separated by commas. (Ex. 4,10,7,3,2,9,8,1,6)" 
                            value = {input} 
                            onChange = {
                                e => { 
                                    setInput(e.target.value) 
                                    getData(e.target.value)
                            }}
                        /> 
                        <button> Save </button>
                    </form>
                </div>
                <div className = 'Visualizer-controls'> 
                    <div className="slidecontainer">
                        <input 
                            type="range" 
                            min="0" 
                            max="99" 
                            defaultValue = "50" 
                            value={speed} 
                            onChange = {e => speed = e.target.value} 
                            id="slider"
                        />
                    </div>
                    <div id = 'sort-next-btns'> 
                        <button onClick = {
                            () => { 
                                play = !play 
                                if (play === true) { 
                                    disableBtn('next') 
                                    document.querySelector(`#pause-play`).innerHTML = "Pause"
                                    Sort() 
                                }
                                else { 
                                    enableBtn('next') 
                                    document.querySelector(`#pause-play`).innerHTML = "Play"
                                }
                            }}
                            id = "pause-play"
                        >Sort</button>
                        <button id = 'next' onClick = {sortStep}> Next </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Visualizer 