import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import Comments from './Comments'
import CommentsForm from './CommentsForm';
//import axios from 'axios'

// const userAxios = axios.create()

// userAxios.interceptors.request.use(config => {
//   const token = localStorage.getItem('token')
//   config.headers.Authorization = `Bearer ${token}`
//   return config
// })

export default function Issues(props){
    const { getIssues } = props
    const [issues, setIssues] = useState([[]])
    const [startComms, setComms] = useState(false)
    
    const { user: { username }, getIssueComments, issueComments, getUsername} = useContext(UserContext)
    const [showComms, setShowComms] = useState({id:"", bool:false})
    const { header, details, _id } = props


    
    useEffect(function(){
        //if(props.issues.length === 0){
           //console.log(getIssues())
           const getReq = async() => {
            let response;
            try{
              response = await getIssues()
              console.log(response.data)
              setIssues(prevState => (
               
                 [ response.data] //...prevState.issues,
              ))
              return response
            }
            catch(err){
              console.log(err)  //.response.data.errMsg
            }
        } 
        getReq()
        // function getIssues(){
        //     userAxios.get("http://localhost:2000/api/issues")
        //        .then(res => {
        
        //          setUserState(prevState => ({
        //            ...prevState,
        //            issues: [ res.data] //...prevState.issues,
        //          }))
        //        })
        //        .catch(err => console.log(err.response.data.errMsg))
        // }
    }, [])
    console.log('issues' ,issues)

    const toggleComms = (id) => {
        setComms(prevState => ({id:id, bool: !prevState.bool}))
    }

    const seeComms = () => {
        setShowComms(prevState => !prevState)
        if(!showComms){
            getIssueComments(_id)
        }
    }

    return (
        <div>
            <h1>Issues Page</h1>

            {issues[0].map(issue => { 
                console.log('map', issueComments)
                return (<div>{issue.issue}
            {showComms.bool 
            // && issueComments && issueComments[0].length && issueComments[0][0].issue === _id 
            ? 
             (issueComments && issueComments.length ?
           
                issueComments[0].map(comment => <Comments {...comment} key={comment._id} getUsername={getUsername} />) 
                :"")
                : (<button className="commsBtn" onClick={seeComms}>Show Comments</button>)
            
            
        }    
            

            {showComms.bool ? <button className='commsBtn' onClick={seeComms}>Hide Comments</button> : ''}

            {startComms ? <CommentsForm toggleComms = {() => toggleComms(_id)} /> : <button className="commsBtn" onClick={toggleComms}>Post A Comment</button>}

        </div>)
            })}{/* */}        {/* ComName {...issue} key = {issue._id} />) */}

            <h2>{header}</h2>
            <p>{details}</p>
            <h5>@{username}</h5>

            

            
            
        </div>
    )
}

//All week 6