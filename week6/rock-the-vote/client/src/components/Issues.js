import React, { useState, useEffect } from 'react';
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
        <div>
            <h1>Issues Page</h1>
            {issues[0].map(issue => {
                console.log('map', issue)
                return (<div>test {issue.newIssue}</div>)})}{/* ComName {...issue} key = {issue._id} />) */}
        </div>
    )
}

//All week 6