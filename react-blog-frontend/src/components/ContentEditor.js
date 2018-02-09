import React from 'react';

const ContentEditor = (props) => {

    return (<div className ="content-editor">
        <textarea className="content-textbox" value={props.postContent} onChange={(event)=> props.handlePostEdit(event.target.value)} />
        <button className="save-button" onClick={_handleSaveButton}>Save</button>
    </div>)

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
}
    
export default ContentEditor;