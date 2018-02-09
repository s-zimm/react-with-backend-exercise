import React, { Component } from 'react';

import UserSelect from './UserSelect';


const Content = props => {
    if (!props.postContent || !props.userData) {
        return <div>Loading...</div>
    }

    let _handleSaveButton = () => {
        fetch('http://localhost:3000/blog', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId: props.postId,
                title: props.postTitle,
                content: props.postContent,
                userId: props.selectedUserId

            })
        })
    }

    return (
        <div className ="content-editor">
            <UserSelect 
                userData={props.userData}
                handleUserFilter={props.handleUserFilter}
            />
            <textarea className="content-textbox" value={props.postContent} onChange={(event)=> props.handlePostEdit(event.target.value)} />
            <button className="save-button" onClick={_handleSaveButton}>Save</button>
        </div>
    )
}

export default Content;