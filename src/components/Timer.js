import './Timer.css'
import { lightBlue } from './../Helper'
import { useState, useEffect} from 'react' 
import { BsStopwatch } from 'react-icons/bs'

const Timer = props => { 

    let play = false 
    let startTime = 0
    let elapsedTime = 0 
    let deleteTime = 0
    let pauseTime = 0 
    const [mil, setMil] = useState('00')
    const [sec, setSec] = useState('00')
    const [min, setMin] = useState('00')

    useEffect(() => { 
        props.setResetTimer(() => resetTimer)
        props.setStartTimer(() => startTimer)
        props.setStopTimer(() => stopTimer) 
        //eslint-disable-next-line
    }, [])

    const resetTimer = () => { 
        play = false
        startTime = Date.now() 
        pauseTime = Date.now() 
        deleteTime = 0 
        elapsedTime = 0 
        getDisplayTime(elapsedTime)
    }

    const startTimer = () => { 
        play = true 
        deleteTime = (Date.now() - pauseTime) + deleteTime
        runTimer()  
    }

    const stopTimer = () => {
        play = false
        pauseTime = Date.now() 
    }

    const runTimer = () => { 
        if (!play) return
        timerStep() 
        setTimeout(runTimer, 10) 
    }

    const timerStep = () => { 
        if (!play) return   
        elapsedTime = Date.now() - startTime - deleteTime 
        getDisplayTime(elapsedTime)
    }

    const getDisplayTime = (time) => { 
        let milliseconds = time % 1000 
        let seconds = (time - milliseconds)/1000
        milliseconds = (milliseconds - (milliseconds % 10))/10 
        let minutes = Math.floor(seconds/60) 
        seconds = seconds - (minutes * 60) 

        if (milliseconds === 0) setMil('00')
        else if (milliseconds < 10) setMil('0' + milliseconds.toString())
        else setMil(milliseconds.toString()) 

        if (seconds === 0) setSec('00')
        else if (seconds < 10) setSec('0' + seconds.toString())
        else setSec(seconds.toString()) 

        if (minutes === 0) setMin('00')
        else if (minutes < 10) setMin('0' + minutes.toString()) 
        else setMin(minutes.toString()) 
    }

    return ( 
        <div className = "Timer">
            <BsStopwatch size = "25px" color = {lightBlue} />
            &ensp;
            <span className = "digits">{min}</span>:
            <span className = "digits">{sec}</span>:
            <span className = "digits">{mil}</span>
        </div>
    )

}

export default Timer 