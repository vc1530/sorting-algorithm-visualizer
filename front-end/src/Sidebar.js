import './Sidebar.css' 

const Sidebar = props => { 

    const plusDegrees = [0, 0, 0, 0, 0, 0] 

    const pluses = document.getElementsByClassName("sidebar-plus")
    const dropdowns = document.getElementsByClassName("sort-info")

    const handlePlusClick = i => { 
        
        pluses[i].style.transition = "all .5s" 
        
        if (plusDegrees[i] === 135) { 
            pluses[i].style.transform = "rotate(0deg)" 
            plusDegrees[i] = 0 
            dropdowns[i].style.display = "none"
        } 
        else { 
            pluses[i].style.transform = "rotate(135deg)" 
            plusDegrees[i] = 135
            dropdowns[i].style.display = "block"
        } 
    }

    return (
        <main className = "sidebar"> 
            <header>
                ALGORITHMS
            </header>
            <nav id = "sidebar-algorithms">

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(0)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown"> 
                        <p onClick = {()=>props.getSort('QuickSort')}>QUICK SORT</p>
                        <div className = "sort-info"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(1)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown"> 
                        <p onClick = {()=>props.getSort('InsertionSort')}>INSERTION SORT</p>
                        <div className = "sort-info"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(2)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown">
                        <p onClick = {()=>props.getSort('MergeSort')}>MERGE SORT</p>
                        <div className = "sort-info"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(3)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown">
                        <p onClick = {()=>props.getSort('BubbleSort')}>BUBBLE SORT</p>
                        <div className = "sort-info"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(4)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown">
                        <p onClick = {()=>props.getSort('SelectionSort')}>SELECTION SORT</p>
                        <div className = "sort-info"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(5)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown">
                        <p onClick = {()=>props.getSort('HeapSort')}>HEAP SORT</p>
                        <div className = "sort-info"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>

            </nav>
        </main>
    )
}

export default Sidebar 