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
      <input className ='signUp'
        type = 'text' 
        value = { username }  //username
        name = 'username' 
        onChange = { handleChange } 
        placeholder = 'Username'/><br></br>
      <input className ='signUp'
        type = 'text' 
        value = { password } //password
        name = 'password' 
        onChange = { handleChange } 
        placeholder = 'Password'/><br></br>
      <button id='auth-btn'> { btnText } </button>
      <p style= {{backgroundColor: '#c00000', color: '#ffffff', textAlign: 'center'}}> { errMsg } </p>           {/* Week6 */}
    </form>
  )
}