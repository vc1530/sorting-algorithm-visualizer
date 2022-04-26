import './Header.css' 
import { Link } from 'react-router-dom' 
import { useEffect } from 'react'

const Header = props => { 

    useEffect(() => { 
        const current = document.getElementById(props.from)
        current.style.borderStyle = "none none solid none"
        current.style.borderImage = "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);"
    })

    return ( 
        <main className = "header"> 
            <div className = "header-link" > 
                <Link to = '/' id = "home" state = {{ from: props.from}}> HOME </Link> 
            </div> 
            <p>|</p>
            <div className = "header-link"> 
                <Link to = '/about' id = "about" state = {{ from: props.from}}> ABOUT </Link> 
            </div>
            <p>|</p>
            <div className= "header-link">
                <Link to = '/contact' id = "contact" state = {{from : props.from}}> CONTACT </Link> 
            </div>
        </main>
    )
}

export default Header 