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
    users: [] 
  }

  const [userState, setUserState] = useState(initState)

  function signup(credentials){
    axios.post("/auth/signup", credentials)
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
      .catch(err => console.log(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
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
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      users: []
    })
  }

  function getUserLogin(){
   userAxios.get('/api/users')
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          users: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

 function addNewUser(newUser){
   userAxios.post("/api/todo", newUser)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          users: [...prevState.users, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addNewUser
      }}>
      { props.children }
    </UserContext.Provider>
  )
}