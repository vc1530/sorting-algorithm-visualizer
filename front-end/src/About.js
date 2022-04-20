// import './About.css' 
import Header from './Header' 
import { useLocation } from 'react-router-dom' 
import me from './me.jpeg'
import { AiOutlineInstagram } from 'react-icons/ai'

const About = props => {

    const location = useLocation() 
    const { from } = location.state ? location.state : ""

    if (from === "home") 
        import('./AboutLeft.css')
    if (from === "contact") 
        import('./AboutRight.css')

    import('./About.css')

    return (
        <main className = "About"> 
            <Header 
                from = "about" 
            /> 
            <div className = "About-main"> 
                <header><i> ABOUT </i></header>
                <div className = "About-info"> 
                    <div className = "About-sidebar"> 
                        <img src = {me} alt = "me"/> 
                        <nav> 
                            <div className = "About-socials"> 
                                <AiOutlineInstagram size = "25px" /> 
                                <a href = "https://instagram.com/vnsachn"> instagram</a>
                            </div>
                            <a href = "https://www.linkedin.com/in/vanessaschen/">linkedin</a>
                            <a href = "https://github.com/vc1530">github</a>
                        </nav>
                    </div> 
                </div> 
            </div>
        </main>
    )   
}

export default About 