import React, { Component } from 'react';

import UserSelect from './UserSelect';
import PostTitleContainer from './PostTitleContainer';
import ContentEditor from './ContentEditor';


class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postIndex: 0
        }
    }

    // if (!props.postContent || !props.userData) {
    //     return <div>Loading...</div>
    // }

    render() {
        return (
            <div className="view-user-content">
                <ContentEditor 

                />
                <PostTitleContainer 
                    allSelectedUserPosts={this.props.allSelectedUserPosts}
                    titleContainerClick={this.props.handleTitleContainerClick}
                    selectedUserId={this.props.selectedUserId}
                />
            </div>
        );
    }
}

export default Content;

// TODO::::::::::
// ADD CLICK HANDLER FOR POST TITLE INSIDE CONTAINER THAT CHANGES VALUE OF CONTENT EDITOR