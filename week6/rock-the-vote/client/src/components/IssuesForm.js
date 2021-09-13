import React, { useState } from 'react';

const initInputs = { newIssue: '' }

export default function IssuesForm(props){
    const { addNewPost } = props

    const [inputs, setInputs] = useState(initInputs)
    //const [toggle, setToggle] = useState(false)

    //const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)  //Week6 additions

    function handleChange(e){
    const {name, value} = e.target 
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addNewPost(inputs)
        setInputs(initInputs)
    }

    return (
        <div>
            <input className =''
        type = 'text' 
        value = { inputs.newIssue } 
        name = 'newIssue' 
        onChange = { handleChange } 
        placeholder = 'text'/>
        <button onClick={handleSubmit}>Post</button>
        </div>
    )
}