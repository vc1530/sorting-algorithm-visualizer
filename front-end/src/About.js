// import './About.css' 
import Header from './Header' 
import { useLocation } from 'react-router-dom' 
import me from './me.jpeg'
import { AiOutlineInstagram, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'

const About = props => {

    const location = useLocation() 
    const { from } = location.state ? location.state : ""

    if (from === "home") { 
        console.log("sliding left") 
        import('./AboutLeft.css')
    } 
    if (from === "contact") 
        import('./AboutRight.css')

    import('./About.css')

    const handleClick = (link) => { 
        window.location = link
    }

    return (
        <main className = "About"> 
            <Header 
                from = "about" 
            /> 
            <div className = "About-main"> 
                <header><i> ABOUT</i></header>
                <div className = "About-info"> 
                    <div className = "About-sidebar"> 
                        <img src = {me} alt = "me"/> 
                        <nav> 
                            <div onClick = {() => handleClick("https://instagram.com/vnsachn")} className = "About-socials"> 
                                <AiOutlineInstagram size = "25px" /> 
                                <p>instagram</p>
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
                        <h2>What is Sorting Algorithm Visualizer?</h2>
                        <p> 
                            If you were a teacher, I would
                            Fail your class
                            Take it over and over, until you noticed me
                            If you were a waiting room, I would
                            Never see a doctor, I would
                            Sit there with my first aid kit and bleed
                            I want to be the power ballad that lifts you up and holds you down
                            I want to be the broken love song that feeds your misery
                            And I can wish all that I want
                            But it won't bring us together
                            Plus, I know whatever happens to me
                            I know it's for the better
                            And when broken bodies are
                            Washed ashore
                            Who am I to ask for more, more, more?
                            But you're breathing in my
                            Open mouth, you're the
                            Gun in my lips that will blow my brains out
                            I want to make you drive all night
                            Just because I said
                            Maybe you should come over
                            Want to make you fall in love
                            As hard as my poor, parent's teenage daughter
                            She'll be the best you ever had if you let her
                            I know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                            Know it's for the better
                        </p>
                    </div>
                </div> 
            </div>
        </main>
    )   
}

export default About 