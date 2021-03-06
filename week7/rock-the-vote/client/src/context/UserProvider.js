import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem('user')) || {}, 
    token: localStorage.getItem('token') || "", 
    users: [],
    issues: [],
    errMsg: ''       //Week6 
  }

  const [userState, setUserState] = useState(initState)

  function handleAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prevState => ({
      ...prevState,
      errMsg: ''
    }))
  }

  function signup(credentials){
    axios.post("http://localhost:2000/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))  //Week6 //.response.data.errMsg
  }

  function login(credentials){
    //var credentials = { username: 'test5', password: 'test4'}
    axios.post("http://localhost:2000/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserLogin()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
        getIssues()
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))   //Week6
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issues: [],
      users: []
    })
  }

  function getUserLogin(){
   userAxios.get('http://localhost:2000/api/users')
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          users: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

 function addNewPost(newPost){
   userAxios.post("http://localhost:2000/api/issues", newPost)
      .then(res => {
        console.log(res)
        setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const getIssueComments = async(issueId) => {
    let response;
    try{
      console.log('IssueID', issueId)
      response = await userAxios.get(`http://localhost:2000/api/comments/${issueId}`)
      console.log(response)
      setUserState(prevState => ({
        ...prevState,
        issueComments: [ response.data] //...prevState.comment,
      }))
      return response
    }
    catch(err){
      console.log(err.response.data.errMsg)
    }
  }

  const getIssues = async() => {
    let response;
    try{
      response = await userAxios.get("http://localhost:2000/api/issues")
      setUserState(prevState => ({
        ...prevState,
        issues: [ response.data] //...prevState.issues,
      }))
      return response
    }
    catch(err){
      console.log(err.response.data.errMsg)
    }}

    const getUserIssues = async() => {
      let response;
      try{
        response = await userAxios.get(`http://localhost:2000/api/issues/${userState.user._id}`)
        setUserState(prevState => ({
          ...prevState,
          userIssues: [ response.data] //...prevState.issues,
        }))
        return response
      }
      catch(err){
        console.log(err.response.data.errMsg)
      }
      
    }
    //getIssues()


    const postComment = async(_id, newComment) => {
      let response;
      try{
        console.log('POST ID', _id)
        response = await userAxios.post(`http://localhost:2000/api/comments/${_id}`, newComment)
        // setUserState(prevState => ({
        //   ...prevState,
        //   issueComments: [ response.data] //...prevState.comment,
        // }))
        getIssueComments(_id)
        return response
      }
      catch(err){
        console.log(err.response.data.errMsg)
      }
     }
  

  return (
    <UserContext.Provider value = {{ ...userState, signup, login, logout, addNewPost, postComment, getIssues, getUserIssues, getIssueComments, resetAuthErr }}>
      { props.children }
    </UserContext.Provider>
  )
}