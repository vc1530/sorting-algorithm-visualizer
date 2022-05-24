import './About.css' 
import Header from './Header' 
import { useLocation } from 'react-router-dom' 
import me from '../images/me.png'
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const About = props => {

    const location = useLocation() 
    const { from } = location.state ? location.state : "" 
    const left = 
    `
    .About-main { 
        -webkit-animation: slideLeft 1s forwards;
        -moz-animation: slideLeft 1s forwards;
        animation: slideLeft 1s forwards;
    }
    `
    const right = 
    `
    .About-main { 
        -webkit-animation: slideRight 1s forwards;
        -moz-animation: slideRight 1s forwards;
        animation: slideRight 1s forwards;
    }
    `

    const handleClick = (link) => { 
        window.location = link
    }

    return (
        <main className = "About">
            <style>{from === 'home' ? left : right}</style> 
            <Header 
                from = "about" 
            /> 
            <div className = "About-main"> 
                <header><i> ABOUT</i></header>
                <div className = "About-info"> 
                    <div className = "About-sidebar"> 
                        <img src = {me} alt = "me"/> 
                        <nav> 
                            <div onClick = {() => handleClick("mailto: vc1530@nyu.edu")} className = "About-socials"> 
                                <MdOutlineAlternateEmail size = "25px" /> 
                                <p>email</p>
                            </div>
                            <div onClick = {() => handleClick("https://www.linkedin.com/in/vanessaschen/")} className = "About-socials">
                                <AiOutlineLinkedin size = "25px" />
                                <p>linkedin</p>
                            </div>
                            <div onClick = {() => handleClick("https://github.com/vc1530")} id = "github" className = "About-socials">
                                <AiFillGithub size = "25px"/> 
                                <p>github</p>
                            </div> 
                        </nav>
                    </div> 
                    <div className = "About-bio"> 
                        <h2>Loreum ipsum</h2>
                        <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div> 
            </div>
        </main>
    )   
}

export default About 