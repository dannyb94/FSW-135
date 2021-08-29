import React from 'react';
var token = "";

export default function Login(){

    return (
        <>
        {/* LOGIN */}
            <div>
                <label>User Name</label>
                <input type='text' id='userName' name='name' required></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' id='password' name='password' required></input>
            </div>
            <div>
                <button>Log In</button>
            </div>
            <div>
                <button>New User</button>
            </div>

        {/* SIGN UP */}
            <div>
                <label>First Name</label>
                <input type='text' id='firstName' name='firstName' required></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' id='lastName' name='lastName' required></input>
            </div>
            <div>
                <label for='email'>E-mail</label>
                <input type='email' id='email' name='email' required></input>
            </div>
            <div>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' required></input>
            </div>
            <div>
                <button>Sign Up</button>
            </div>
        </>
    )
}