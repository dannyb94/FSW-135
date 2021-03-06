import React from 'react';

export default function AuthForm(props){
  const {
    handleChange, handleSubmit, btnText, 
    inputs: {
      username, password
    } 
  } = props
  
  return (
    <form className='formCntnr' onSubmit = { handleSubmit }>
      <input className ='signUp'
        type = 'text' 
        value = { username } 
        name = 'username' 
        onChange = { handleChange } 
        placeholder = 'Username'/><br></br>
      <input className ='signUp'
        type = 'text' 
        value = { password } 
        name = 'password' 
        onChange = { handleChange } 
        placeholder = 'Password'/><br></br>
      <button id='auth-btn'> { btnText } </button>
    </form>
  )
}