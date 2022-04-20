import './Home.css'
import Header from './Header'
import Sidebar from './Sidebar' 

const Home = props => {
    return ( 
        <main className = "Home">
            <Header 
                from = "home" 
            /> 
            <div className = "Home-main">
                <Sidebar /> 
            </div>
        </main>
    )
}

export default Home 