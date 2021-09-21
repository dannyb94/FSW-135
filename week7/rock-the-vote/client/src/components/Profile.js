import React, { useContext } from 'react';
import IssuesForm from './Issues/IssuesForm';
import IssueList from './Issues/IssueList';
import { UserContext } from '../context/UserProvider';

export default function Profile(){
    const {user: {username}, addNewPost, userIssues, getUserIssues} = useContext(UserContext)
    console.log('profile', userIssues)
    return (
        <div>
            <h1>Welcome @{username}</h1>
            <IssuesForm addNewPost= {addNewPost} /> {/* */}
            <IssueList getIssues = {getUserIssues} issues = {userIssues} /> {/* */}
        </div>
    )
}

//All week 6