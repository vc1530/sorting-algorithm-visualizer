import './Sidebar.css'
import { BiCodeBlock } from 'react-icons/bi'
import { lightBlue } from './../Helper'
import { useEffect } from 'react'

const Sidebar = props => { 

    useEffect(() => { 
        const parents = document.getElementsByClassName('Sidebar-info') 
        for (let i = 0; i < parents.length; i++) { 
            const child = parents[i].firstChild
            parents[i].removeChild(child)
            parents[i].appendChild(child) 
        }
    })

    return ( 
        <main className = 'Sidebar'>
            <header>
                <BiCodeBlock size = "25px" color = {lightBlue} />
                &ensp;{props.title}
            </header>
            <div className = "Sidebar-info"> 
                <div id = 'info-about'>
                    {props.info && props.code ? 
                        <span> 
                            {props.info} 
                            {props.code}
                        </span>: 
                        <span>Select an algorithm above to get started!</span> 
                    }
                </div>
            </div>
        </main>
    )
}

export default Sidebar