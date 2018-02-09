import React from 'react';
import PostTitle from './PostTitle';

const PostTitleContainer = ({allSelectedUserPosts, titleContainerClick, selectedUserId}) => {
    if (!allSelectedUserPosts) {
        return <div>Loading...</div>
    }

    let titleArray = allSelectedUserPosts
                                .map((post, i) => {
                                    return (
                                        <PostTitle 
                                            key={post.id}
                                            id={post.id}
                                            titleContainerClick={titleContainerClick}
                                            title={post.title}
                                            content={post.content}
                                            author={post.userId}
                                        />
                                    )
                                })

    return (
        <div className="post-title-container">
            {titleArray}
        </div>
    )
}

export default PostTitleContainer;