import React from 'react';

const PostTitle = (props) => {
    return (
        <div onClick={props.titleContainerClick}>
            <h2>{props.title}</h2>
            {/* <p>{props.content}</p> */}
        </div>
    )
}

export default PostTitle;