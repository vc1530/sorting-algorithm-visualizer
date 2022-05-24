import './Home.css'
import Header from './Header'
import Sidebar from './Sidebar' 
import Visualizer from './Visualizer' 
import { useState } from 'react'

const Home = props => {

    const [sort, setSort] = useState('') 
    const [info, setInfo] = useState('') 
    const [code, setCode] = useState('')

    const getSort = e => { 
        setSort(e) 
    }

    const getInfo = e => { 
        setInfo(e) 
    }

    const getCode = e => { 
        setCode(e) 
    }

    return ( 
        <main className = "Home">
            <Header 
                from = "home"
                sort = {sort} 
                getSort = {getSort}
            /> 
            <div className = "Home-main">
                <Sidebar 
                    title = "ALGORITHM" 
                    info = {info} 
                    code = {code} 
                />
                <Visualizer 
                    sort = {sort}
                    getInfo = {getInfo} 
                    getCode = {getCode} 
                /> 
            </div>
        </main>
    )
}

export default Home 