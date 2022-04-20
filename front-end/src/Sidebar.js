import './Sidebar.css' 

const Sidebar = props => { 
    return (
        <main className = "sidebar"> 
            <header>
                <i>ALGORITHMS</i>
            </header>
            <nav id = "sidebar-algorithms">
                <div className = "sidebar-link"> 
                    <u className = "sidebar-plus">+</u> 
                    <p>QUICK SORT</p>
                </div>
                <div className = "sidebar-link"> 
                    <u>+</u> 
                    <p>INSERTION SORT</p>
                </div>
                <div className = "sidebar-link"> 
                    <u>+</u> 
                    <p>MERGE SORT</p>
                </div>
                <div className = "sidebar-link"> 
                    <u>+</u> 
                    <p>BUBBLE SORT</p>
                </div>
                <div className = "sidebar-link"> 
                    <u>+</u> 
                    <p>SELECTION SORT</p>
                </div>
                <div className = "sidebar-link"> 
                    <u>+</u> 
                    <p>HEAP SORT</p>
                </div>
            </nav>
        </main>
    )
}

export default Sidebar 