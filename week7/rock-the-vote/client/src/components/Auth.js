import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm';
import { UserContext } from '../context/UserProvider';

const initInputs = { username: "", password: "" }

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)  //Week6 additions

    function handleChange(e){
    const {name, value} = e.target 
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return (
        <div id="auth-cntnr">
            <div id='title'>
                <span style = {{color:'red', fontFamily: 'Rampart One', marginRight: '5px'}}>Rock</span>
                <span style = {{color:'black', fontFamily: 'Rampart One', marginRight: '5px'}}>The</span>
                <span style = {{color:'#0d2e9b', fontFamily: 'Rampart One'}}>Vote</span>
            </div>
            { !toggle ?
            <>
                <div className='formCntnr'>
                    <form>
                        <input type='text' id='firstName' className='signUp' name='firstName' placeholder= 'First Name' required></input><br></br>
                        <input type='text' id='lastName' className='signUp' name='lastName' placeholder= 'Last Name' required></input><br></br>
                        <input type='email' id='email' className='signUp' name='email' placeholder= 'E-Mail' required></input><br></br>
                    </form>
                    <AuthForm handleChange = {handleChange} handleSubmit = {handleSignup} inputs = {inputs} btnText = 'Sign Up' errMsg = {errMsg} />
                    <p onClick = {() => toggleForm()}> Already a member? </p>  {/* Week 6 toggle change */}
                </div>
            </>
            :
            <>
                <div className='formCntnr'>
                    <AuthForm handleChange = {handleChange} handleSubmit = {handleLogin} inputs = {inputs} btnText = 'Log In' errMsg = {errMsg} />
                    <p onClick = {() => toggleForm()}> Not a member? </p>  {/* Week 6 toggle change */}
                </div>
            </>
            }
        </div>
    )
}