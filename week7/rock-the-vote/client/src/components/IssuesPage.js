import React, { useContext } from 'react';
import IssuesForm from './Issues/IssuesForm';
import IssueList from './Issues/IssueList';
import { UserContext } from '../context/UserProvider';

export default function IssuesPage(){
    const {user: {username}, addNewPost, issues, getIssues} = useContext(UserContext)
    console.log('profile', issues)
    return (
        <div>
            <h1 id="welcome">Welcome @{username}</h1>
            <IssuesForm addNewPost= {addNewPost} /> {/* */}
            <IssueList getIssues = {getIssues} issues = {issues} /> {/* */}
        </div>
    )
}