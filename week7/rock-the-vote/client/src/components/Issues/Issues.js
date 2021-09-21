import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import Comments from '../Comments/Comments'
import CommentsForm from '../Comments/CommentsForm';

export default function Issues(props){
    const [startComms, setComms] = useState(false)
    const [showComms, setShowComms] = useState(false)
    const { getIssueComments, issueComments } = useContext(UserContext)
    
    const { newIssue, _id } = props



    const toggleComms = (id) => {
        setComms (prevState => (!prevState))
    }

    const seeComms = () => {
        setShowComms(prevState => !prevState)
        if(!showComms){
            getIssueComments(_id)
        }
    }

    return (
        <div id="listIssues">
            {newIssue}
            {showComms
                ? 
                (issueComments && issueComments.length
                ?
                issueComments[0].map(comment => <Comments {...comment} key={comment._id} />) : "")
                : 
                (<button className="commsBtn" onClick={seeComms}>Show Comments</button>)
            }    
            
            {showComms ? <button className='commsBtn' onClick={seeComms}>Hide Comments</button> : ''}

            {startComms ? <CommentsForm toggleComms = {() => toggleComms()} issueId = {_id} /> : <button className="commsBtn" onClick={toggleComms}>Post A Comment</button>}

        </div>)
    
}