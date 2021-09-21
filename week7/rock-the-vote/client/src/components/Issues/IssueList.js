import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import Issues from './Issues';


export default function IssueList(props){
    const { getIssues } = props
    const [issues, setIssues] = useState([[]])
    
    const { user: { username }, getUsername} = useContext(UserContext)
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



    return (
        <div id="issueList">
            <br></br>

            {issues[0].map(issue => { 
                
                return (<div key={issue._id}>
                    <Issues {...issue} />
                </div>)
            })}

            <h2>{header}</h2>
            <p>{details}</p>
            <h5>@{username}</h5>
        </div>
    )
}