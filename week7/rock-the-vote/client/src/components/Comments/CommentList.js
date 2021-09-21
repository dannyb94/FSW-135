import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import Comments from './Comments';


export default function CommentList(props){
    //const { getIssueComments } = props
    const [comments, setComments] = useState([[]])
    
    const { getIssueComments, issueComments } = useContext(UserContext)
    const { issueId } = props


    
    useEffect(function(){
        //if(props.issues.length === 0){
           //console.log(getIssues())
           const getReq = async() => {
            let response;
            try{
              response = await getIssueComments(issueId)
              console.log(response.data)
              setComments(prevState => (
               
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
    console.log('comments' ,comments)



    return (
        <div>
            <h1>Comment Section</h1>

            {comments[0].map(comment => { 
                
                return (<div>
                    <Comment {...comment} />
                </div>)
            })}

            {/* <h2>{header}</h2>
            <p>{details}</p>
            <h5>@{username}</h5> */}
            
        </div>
    )
}