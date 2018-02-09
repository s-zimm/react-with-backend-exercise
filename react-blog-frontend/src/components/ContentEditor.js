import React from 'react';

const ContentEditor = (props) => {

    let _handleSaveButton = () => {
        fetch('http://localhost:3000/blog', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId: props.selectedUserPost.id,
                title: props.selectedUserPost.title,
                content: props.selectedUserPost.content,
                userId: props.selectedUserId
            
            })
        })
        .then(() => console.log(`${props.selectedUserPost.title} updated!`))
    }

    if (props.selectedUserPost) {
        return (<div className ="content-editor">
        <textarea className="content-textbox" value={props.selectedUserPost.content} onChange={(event)=> props.handlePostEdit(event.target.value, props.selectedUserPost.id)} />
        <button className="save-button" onClick={_handleSaveButton}>Save</button>
        </div>)
    } else {
        return (
            <div className ="content-editor">
                <textarea className="content-textbox" value='' onChange={(event)=> props.handlePostEdit(event.target.value, props.selectedUserPost.id)} />
                <button className="save-button" onClick={_handleSaveButton}>Save</button>
            </div>
        )
    }
}
    
export default ContentEditor;