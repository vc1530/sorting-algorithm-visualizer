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
                            We had a great day. Even though we forgot to eat. 
                            And you had a bad dream. And we got no sleep. 
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(1)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown"> 
                        <p onClick = {()=>props.getSort('InsertionSort')}>INSERTION SORT</p>
                        <div className = "sort-info"> 
                            Cause we were kissing. I had a fever. 
                            Until I met you. Now you make me cool. 
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(2)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown">
                        <p onClick = {()=>props.getSort('MergeSort')}>MERGE SORT</p>
                        <div className = "sort-info"> 
                            Sometimes I still do. Something embarassing. 
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(3)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown">
                        <p onClick = {()=>props.getSort('BubbleSort')}>BUBBLE SORT</p>
                        <div className = "sort-info"> 
                            I never said I'd be alright. Just thought I could hold myself together. 
                            But I couldn't breathe, I went outside. Don't know why I thought it'd be any better. 
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(4)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown">
                        <p onClick = {()=>props.getSort('SelectionSort')}>SELECTION SORT</p>
                        <div className = "sort-info"> 
                            I'm fine now, it doesn't matter. 
                            I didn't wanna be this guy. I cried at your show with the teenagers. 
                            Tell your friend I'll be alright. In the morning, it won't matter. 
                        </div>
                    </div>
                </div>

                <div className = "sidebar-link"> 
                    <u onClick = {() => handlePlusClick(5)} className = "sidebar-plus">+</u> 
                    <div className = "sort-dropdown">
                        <p onClick = {()=>props.getSort('HeapSort')}>HEAP SORT</p>
                        <div className = "sort-info"> 
                            I wanna be emaciated. I wanna hear one song without thinking of you. 
                            I wish I was on a space ship, just me and my dog and an impossible view. 
                        </div>
                    </div>
                </div>

            </nav>
        </main>
    )
}

export default Sidebar 