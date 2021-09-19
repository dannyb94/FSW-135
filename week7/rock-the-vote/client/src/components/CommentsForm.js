import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'

export default function CommentsForm(){
    const initInputs = {comment: ''}
    const [inputs, setInputs] = useState(initInputs)
    const { createComment } = useContext(UserContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createComment(event, inputs)
        setInputs(initInputs)
        //props.toggleComms()
    }

    const { comment } = inputs

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="comment" value={comment} placeholder="Start Your Comment" onChange={handleChange} />
                <button className="commsBtn">Submit</button>
                {/* <button onClick={props.toggleComms} className="commsBtn">Cancel</button> */}
            </form>
            
        </div>
    )
}