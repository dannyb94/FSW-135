import React from 'react';

export default function AuthForm(props){
  const {
    handleChange, handleSubmit, btnText, errMsg,
    inputs: {
      username, password
    } 
  } = props

// week5 addition --------------
  // const { addNewPost } = props

  // function handleSubmit(e){
  //   e.preventDefault()
  //   addNewPost(inputs)
  //   setInputs(initInputs)
  // }

// week5 addition end --------------
  
  return (
    <form className='formCntnr' onSubmit = { handleSubmit }>
      <label>Username: </label>
      <input id="bigUp1" className ='signUp'
        type = 'text' 
        value = { username }
        name = 'username' 
        onChange = { handleChange } 
        placeholder = 'Username'/><br></br>

      <label>Password: </label>
      <input id="bigUp2" className ='signUp'
        type = 'text' 
        value = { password }
        name = 'password' 
        onChange = { handleChange } 
        placeholder = 'Password'/><br></br>
      <button id='auth-btn'> { btnText } </button>
      <p style= {{backgroundColor: '#c00000', color: '#ffffff', textAlign: 'center'}}> { errMsg } </p>
    </form>
  )
}