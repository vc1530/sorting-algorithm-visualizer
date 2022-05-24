import './Header.css' 
import { Link } from 'react-router-dom' 
import { useEffect } from 'react'

const Header = props => { 

    useEffect(() => { 
        if (props.sort) { 
            const links = document.getElementsByClassName('header-link')
            for (let i = 0; i < links.length; i ++)  
                links[i].style.borderStyle = "none" 
            const current = document.getElementById(props.sort)
            current.style.borderStyle = "none none solid none"
        } 
    })

    return ( 
        <nav className = "header"> 
            <Link 
                to = '/' 
                id = 'InsertionSort' 
                className = "header-link"
                onClick = {()=>props.setSort('InsertionSort')}
            >
                INSERTION SORT
            </Link>
            <p>|</p>
            <Link 
                to = '/' 
                id = "SelectionSort" 
                className = "header-link"
                onClick = {()=>props.setSort('SelectionSort')}
            > 
                SELECTION SORT
            </Link> 
            <p>|</p>
            <Link 
                to = '/' 
                id = "BubbleSort" 
                className = "header-link"
                onClick = {()=>props.setSort('BubbleSort')}
            > 
                BUBBLE SORT
            </Link> 
            <p>|</p>
            <Link 
                to = '/' 
                id = "MergeSort" 
                className = "header-link"
                onClick = {()=>props.setSort('MergeSort')}
            > 
                MERGE SORT
            </Link> 
            <p>|</p>
            <Link 
                to = '/' 
                id = "QuickSort" 
                className = "header-link"
                onClick = {()=>props.setSort('QuickSort')}
            > 
                QUICK SORT
            </Link> 
        </nav>
    )
}

export default Header 