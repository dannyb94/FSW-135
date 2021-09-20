import React from "react";

export default function Comments(props){
    const {_id, username } = props
    console.log(props)
    return (
        <div key={_id} id={_id} className='comment'>
            <p className='userCommented'>@{username}: </p> {props.newComment}
        </div>
    )
}