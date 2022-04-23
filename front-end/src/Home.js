import './Home.css'
import Header from './Header'
import Sidebar from './Sidebar' 
import Visualizer from './Visualizer' 
import { useState } from 'react'

const Home = props => {

    const [sort, setSort] = useState('') 

    const getSort = e => { 
        setSort(e) 
    }

    return ( 
        <main className = "Home">
            <Header 
                from = "home" 
            /> 
            <div className = "Home-main">
                <Sidebar getSort = {getSort}/> 
                <Visualizer sort = {sort}/> 
            </div>
        </main>
    )
}

export default Home 