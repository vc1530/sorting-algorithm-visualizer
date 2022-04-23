import './Contact.css' 
import Header from './Header'
import { useState, useEffect } from 'react'
//import axios from 'axios'  

const Contact = props => { 

    const red = "rgb(255, 110, 110)"
    const gray = "rgb(231, 231, 231)"

    const [firstName, setFirstName] = useState('') 
    const [lastName, setLastName] = useState('') 
    const [email, setEmail] = useState('') 
    const [subject, setSubject] = useState('') 
    const [message, setMessage] = useState('') 

    useEffect(() => { 
        const astericks = document.getElementsByClassName("asterick")
        Array.from(astericks).forEach(asterick=>{ 
            asterick.style.color = "red"; 
        })
    })

    const setBorderColor = (name, color) => { 
        const box = document.getElementsByName(name)  
        box[0].style.borderColor = color
    }

    const handleSubmit = e => { 
        e.preventDefault() 
        if (!firstName) setBorderColor("firstName", red) 
        if (!lastName) setBorderColor("lastName", red)
        if (!email) setBorderColor("email", red) 
        if (!subject) setBorderColor("subject", red) 
        if(!message) setBorderColor("message", red) 
        //axios stuff here 
        setFirstName('') 
        setLastName('') 
        setEmail('') 
        setSubject('') 
        setMessage('') 
    }

    return ( 
        <main className = "Contact">
            <Header 
                from = "contact" 
            /> 
            <div className = "Contact-main"> 
                <header><i>CONTACT</i></header>
                <div className = "Contact-info"> 
                    <form onSubmit = {handleSubmit}> 
                        <div id = "Contact-names"> 
                            <div className = "Contact-formSection"> 
                                <label htmlFor = "firstName">
                                    First Name
                                    <span className = "asterick"> *</span>
                                </label>
                                <input 
                                    name = "firstName" 
                                    placeholder = "First Name"
                                    type = "text"
                                    value = {firstName} 
                                    onChange = {e => { 
                                        setFirstName(e.target.value)
                                        setBorderColor("firstName", gray) 
                                    }} 
                                /> 
                            </div>
                            <div className = "Contact-formSection"> 
                                <label htmlFor = "lastName">
                                    Last Name 
                                    <span className = "asterick"> *</span>
                                </label>
                                <input 
                                    name = "lastName" 
                                    placeholder = "Last Name"
                                    type = "text"
                                    value = {lastName} 
                                    onChange = {e => { 
                                        setLastName(e.target.value)
                                        setBorderColor("lastName", gray) 
                                    }} 
                                /> 
                            </div>
                        </div>
                        <div className = "Contact-formSection"> 
                            <label htmlFor = "email"> 
                                Email 
                                <span className = "asterick"> *</span>
                            </label>
                            <input 
                                name = "email" 
                                placeholder = "Email" 
                                type = "email"
                                value = {email} 
                                onChange = {e => { 
                                    setEmail(e.target.value)
                                    setBorderColor("email", gray) 
                                }} 
                            /> 
                        </div> 
                        <div className = "Contact-formSection"> 
                            <label htmlFor = "subject">
                                Subject
                                <span className = "asterick"> *</span>
                            </label>
                            <input 
                                name = "subject" 
                                placeholder = "Subject" 
                                type = "text" 
                                value = {subject} 
                                onChange = {e => { 
                                    setSubject(e.target.value)
                                    setBorderColor("subject", gray) 
                                }} 
                            />
                        </div> 
                        <div className = "Contact-formSection"> 
                            <label htmlFor = "message"> 
                                Message
                                <span className = "asterick"> *</span>
                            </label>
                            <textarea 
                                name = "message" 
                                placeholder = "Enter a message"
                                maxLength = "500"
                                value = {message} 
                                onChange = {e => { 
                                    setMessage(e.target.value)
                                    setBorderColor("message", gray) 
                                }}
                            /> 
                        </div> 
                        <div className = "btn submit-button"> 
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact 