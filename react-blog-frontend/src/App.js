import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import PostTitle from './components/PostTitle';
import PostTitleContainer from './components/PostTitleContainer';
import Content from './components/Content';
import UserSelect from './components/UserSelect';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentPostId: 0,
      selectedUserId: 0
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/blog')
      .then(data => data.json())
      .then(data => this.setState({
        posts: data
      }));

    fetch('http://localhost:3000/user')
      .then(users => users.json())
      .then(users => this.setState({ 
        users: users
      }));
  }

  render() {
    if (!this.state.posts || !this.state.users) {
      return <div>Loading...</div>
    }
    return (
      <Router>
      <div className="App">
          <h1 className="App-title">React Blog Post Editor</h1>
          <div className="body-container">
            <UserSelect 
                userData={this.state.users}
                handleUserFilter={this._handleUserFilter}
            />
            <Content
              allSelectedUserPosts={this.state.posts.filter(post => {
                return post.userId === this.state.selectedUserId})}
              selectedUser={this.state.users.find(user => user.id === this.state.selectedUserId)}
              selectedUserId={this.state.selectedUserId}
              handleTitleContainerClick={this._handleTitleContainerClick}
              handlePostEdit={this._handlePostEdit}
            />
          </div>
        
      </div>
      </Router>
    );
  }

  _handlePostEdit = (value, id) => {
    this.setState({
      currentPostId: id
    }, () => {
      this.setState(oldState => {
        let newState = oldState;
        let alteringPost = newState.posts.find(post => post.id === this.state.currentPostId)
        return alteringPost.content = value;
      })
    }) 
  }

  _handleUserFilter = (selectedUserId) => {
    this.setState({ 
      selectedUserId: Number(selectedUserId)
    });
  }

}


export default App;
