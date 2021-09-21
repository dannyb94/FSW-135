import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserProvider'

export default function CommentsForm(props){
    const initInputs = {newComment: ''}
    const [inputs, setInputs] = useState(initInputs)
    const { postComment } = useContext(UserContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(props.issueId, inputs)
        setInputs(initInputs)
        //props.toggleComms()
    }

    const { newComment } = inputs

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='commsInput' type="text" name="newComment" value={newComment} placeholder="Start Your Comment" onChange={handleChange} />
                <button className="commsBtn">Submit</button>
                {/* <button onClick={props.toggleComms} className="commsBtn">Cancel</button> */}
            </form>
            
        </div>
    )
}