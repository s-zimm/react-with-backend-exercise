import React, { Component } from 'react';

import UserSelect from './UserSelect';
import PostTitleContainer from './PostTitleContainer';
import ContentEditor from './ContentEditor';


class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPostId: 0
        }
    }

    _handleTitleContainerClick = (i) => {
        this.setState({
          selectedPostId: Number(i)
        })
      }

    // if (!props.postContent || !props.userData) {
    //     return <div>Loading...</div>
    // }

    render() {
        return (
            <div className="view-user-content">
                <ContentEditor 
                    selectedUserPost={this.props.allSelectedUserPosts.find(post => Number(post.id) === this.state.selectedPostId)}
                    handlePostEdit={this.props.handlePostEdit}
                />
                <PostTitleContainer 
                    allSelectedUserPosts={this.props.allSelectedUserPosts}
                    titleContainerClick={this._handleTitleContainerClick}
                    selectedUserId={this.props.selectedUserId}
                />
            </div>
        );
    }
}

export default Content;

// TODO::::::::::
// ADD CLICK HANDLER FOR POST TITLE INSIDE CONTAINER THAT CHANGES VALUE OF CONTENT EDITOR