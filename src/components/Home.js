import './Home.css'
import Header from './Header'
import Sidebar from './Sidebar' 
import Visualizer from './Visualizer' 
import { useState } from 'react'

const Home = props => {

    const [sort, setSort] = useState('') 
    const [info, setInfo] = useState('') 
    const [code, setCode] = useState('')

    return ( 
        <main className = "Home">
            <Header 
                from = "home"
                sort = {sort} 
                setSort = {setSort}
            /> 
            <div className = "Home-main">
                <Sidebar 
                    title = "ALGORITHM" 
                    info = {info} 
                    code = {code} 
                />
                <Visualizer 
                    sort = {sort}
                    setInfo = {setInfo} 
                    setCode = {setCode} 
                /> 
            </div>
        </main>
    )
}

export default Home 