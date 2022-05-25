import './Sidebar.css'
import { BiCodeBlock } from 'react-icons/bi'
import { lightBlue } from '../Helper'
import { useEffect } from 'react'

const Sidebar = props => { 

    useEffect(() => { 
        const parent = document.getElementById('Sidebar-container') 
        const child = parent.firstChild
        parent.removeChild(child)
        parent.appendChild(child) 
    })

    return ( 
        <main className = 'Sidebar'>
            <header>
                <BiCodeBlock size = "25px" color = {lightBlue} />
                &ensp;{props.title}
            </header>
            <div id = "Sidebar-container"> 
                <div id = 'Sidebar-info'>
                    {props.info && props.code ? 
                        <>
                            {props.info} 
                            {props.code}
                        </>: 
                        <>Select an algorithm above to get started!</> 
                    }
                </div>
            </div>
        </main>
    )
}

export default Sidebar