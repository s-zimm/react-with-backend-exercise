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
                                            key={i}
                                            index={i}
                                            titleContainerClick={() => titleContainerClick(i)}
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