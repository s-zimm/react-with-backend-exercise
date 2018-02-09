import React from 'react';

const PostTitle = (props) => {
    return (
        <div onClick={() => props.titleContainerClick(props.id)}>
            <h2>{props.title}</h2>
            {/* <p>{props.content}</p> */}
        </div>
    )
}

export default PostTitle;