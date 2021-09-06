import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm';
import Issues from './Issues';
import { UserContext } from '../context/UserProvider';

export default function Profile(){
    const {user: {username}, addNewPost, issues} = useContext(UserContext)

    return (
        <div>
            <h1>Welcome @{username}</h1>
            <AuthForm addNewPost= {addNewPost} />
            {/* <Issues issues = {issues} /> */}
        </div>
    )
}

//All week 6