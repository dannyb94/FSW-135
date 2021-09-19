import React, { useContext } from 'react';
import IssuesForm from './IssuesForm';
import Issues from './Issues';
import { UserContext } from '../context/UserProvider';

export default function Profile(){
    const {user: {username}, addNewPost, issues, getIssues} = useContext(UserContext)
    console.log('profile', issues)
    return (
        <div>
            <h1>Welcome @{username}</h1>
            <IssuesForm addNewPost= {addNewPost} /> {/* */}
            <Issues getIssues = {getIssues} issues = {issues} /> {/* */}
        </div>
    )
}

//All week 6