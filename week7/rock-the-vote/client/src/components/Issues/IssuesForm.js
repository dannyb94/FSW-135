import React, { useState } from 'react';

const initInputs = { newIssue: '' }

export default function IssuesForm(props){
    const { addNewPost } = props

    const [inputs, setInputs] = useState(initInputs)

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
        <div id="postDiv">
            <input
                id ='postInput'
                type = 'text' 
                value = { inputs.newIssue } 
                name = 'newIssue' 
                size="80"
                onChange = { handleChange } 
                placeholder = 'Add your social issue here.'
            />
            <button id="postBtn" onClick={handleSubmit}>Post</button>
        </div>
    )
}