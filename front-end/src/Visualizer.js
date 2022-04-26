import './Visualizer.css' 
import { useState, useEffect} from 'react' 

export const lightBlue = "#ABDAFC"
export const darkBlue = "#58b9ff"
export const green = "#78C091"
export const changeColor = (i, color) => { 
    const e = document.getElementById(`e${i}`)
    e.lastChild.style.backgroundColor = color
}
export const delay = speed => {
    return new Promise(resolve => setTimeout(() => {
      resolve();
    }, speed * 2.5)); 
}

const Visualizer = props => { 

    let i = 0
    let steps = []
    let play = false 
    let speed 
    //const [showSpeed, setShowSpeed] = useState(50) 
    const [input, setInput] = useState('')  
    const [data, setData] = useState([]) 
    const [sort, setSort] = useState(() => () => {})
    const getData = input => { 
        const data = input.split(',') 
        data.forEach((element, j) => { 
            data[j] = parseInt(element) 
        })
        setData(data) 
    }

    useEffect(() => {  

        // endSort() 
        disableBtn('pause-play') 
        disableBtn('next') 

        if (props.sort) { 
            import(`./sorts/${props.sort}`)
            .then(async (Sort)=> { 
                //setShowSpeed(50) 
                await setUp()
                document.querySelector('#slider').value = speed
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
        play = false
        steps = [] 
        i=0 
        if (props.sort && data.length > 0) {
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
            bar.style.height = `${element/max * 300}px`
            bar.style.backgroundColor = lightBlue

            barComp.style.height = `${element/max * 300 + 10}px`
            barComp.appendChild(num) 
            barComp.appendChild(bar) 
            barComp.style.animation = "grow 1s forwards"

            visualizer.appendChild(barComp) 
        })
    }

    // const handleSetUp = async () => { 
        // play = false 
        // steps = [] 
        // i = 0 
        // if (props.sort && data.length > 0) {
        //     enableBtn('pause-play') 
        //     enableBtn('next') 
        //     document.querySelector(`#pause-play`).innerHTML = "Sort"
        // } 
    //     setUp() 
    // }

    // const handleSave = async e => { 
    //     e.preventDefault() 
        //steps = await sort(data) 
        // if (props.sort) {
        //     enableBtn('pause-play') 
        //     document.querySelector(`#pause-play`).innerHTML = "Sort"
        //     enableBtn('next') 
        // } 
        // play = false
        // i = 0 
        // setUp() 
    //     await setUp() 
    // }

    const Sort = async () => { 
        if (steps.length === 0) steps = await sort(data) 
        if (play) { 
            await sortStep() 
            if (!speed) speed = 50
            setTimeout(Sort, (100-speed) * 5) 
        } 
    }

    const sortStep = async () => {
        console.log(i) 
        if ((!steps) || i >= steps.length) { 
            endSort() 
            return 
        } 
        const step = steps[i] 
        step.func(step.args[0], step.args[1]) 
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