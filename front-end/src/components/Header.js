import './Header.css' 
import { Link } from 'react-router-dom' 
import { useEffect } from 'react'
import { MdPersonOutline } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'

const Header = props => { 

    useEffect(() => { 
        if (props.sort) { 
            const links = document.getElementsByClassName('header-link')
            for (let i = 0; i < links.length; i ++) { 
                links[i].firstChild.style.borderStyle = "none" 
            }
            const current = document.getElementById(props.sort)
            current.style.borderStyle = "none none solid none"
        } 
        if (props.from) { 
            if (props.from === 'about') { 
                const about = document.getElementById('about') 
                about.style.borderStyle = 'none none solid none'
            }
            if (props.from === 'contact') { 
                const contact = document.getElementById('contact') 
                contact.style.borderStyle = 'none none solid none'
            }
        }
    })

    return ( 
        <main className = "header"> 

            <div id = "header-sorts"> 
                <div className = "header-link" > 
                    <Link to = '/' id = 'InsertionSort' onClick = {()=>props.getSort('InsertionSort')}>INSERTION SORT</Link>
                </div>
                <p>|</p>
                <div className= "header-link">
                    <Link to = '/' id = "SelectionSort" onClick = {()=>props.getSort('SelectionSort')}> SELECTION SORT </Link> 
                </div>
                <p>|</p>
                <div className= "header-link">
                    <Link to = '/' id = "BubbleSort" onClick = {()=>props.getSort('BubbleSort')}> BUBBLE SORT </Link> 
                </div>
                <p>|</p>
                <div className= "header-link">
                    <Link to = '/' id = "MergeSort" onClick = {()=>props.getSort('MergeSort')}> MERGE SORT </Link> 
                </div>
                <p>|</p>
                <div className= "header-link">
                    <Link to = '/' id = "QuickSort" onClick = {()=>props.getSort('QuickSort')}> QUICK SORT </Link> 
                </div>
            </div>

            <div id = "header-other"> 
                <div className= "other-link">
                    <Link to = '/about' id = "about" state = {{from : props.from}}> <MdPersonOutline size = "25px"/> </Link> 
                </div>
                <div className= "other-link">
                    <Link to = '/contact' id = "contact" state = {{from : props.from}}> <FiMail size = "25px" /> </Link> 
                </div>
            </div>

        </main>
    )
}

export default Header 