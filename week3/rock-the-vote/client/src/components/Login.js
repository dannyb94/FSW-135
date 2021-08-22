import React from 'react';

export default function Login(){

    return (
        <>
        {/* LOGIN */}
            <div>
                <label for='userName'>User Name</label>
                <input type='text' id='userName' name='name' required></input>
            </div>
            <div>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' required></input>
            </div>

        {/* SIGN UP */}
            <div>
                <label for='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' required></input>
            </div>
            <div>
                <label for='lastName'>Last Name</label>
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
        </>
    )
}