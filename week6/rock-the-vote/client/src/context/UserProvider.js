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
    var credentials = { username: 'test5', password: 'test4'}
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
    }
      //  .then(res => {

      //    setUserState(prevState => ({
      //      ...prevState,
      //      issues: [ res.data] //...prevState.issues,
      //    }))
      //    return userState.issues
      //  })
      //  .catch(err => console.log(err.response.data.errMsg))
    }
    //getIssues()
  

  return (
    <UserContext.Provider value = {{ ...userState, signup, login, logout, addNewPost, getIssues, resetAuthErr }}>
      { props.children }
    </UserContext.Provider>
  )
}