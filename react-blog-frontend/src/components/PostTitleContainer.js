import React from 'react';
import PostTitle from './PostTitle';

const PostTitleContainer = (props) => {
    if (!props.postData) {
        return <div>Loading...</div>
    }

    let titleArray = props.postData
                                .map((post, i) => {
                                    return (
                                        <PostTitle 
                                            key={i}
                                            index={i}
                                            titleContainerClick={() => props.titleContainerClick(i)}
                                            title={post.title}
                                            content={post.content}
                                            author={post.userId}
                                        />
                                    )
                                })
                                .filter((comp) => comp.props.author === Number(props.selectedUserId))
                                

    return (
        <div className="post-title-container">
            {titleArray}
        </div>
    )
}

export default PostTitleContainer;