import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import PostTitle from './components/PostTitle';
import PostTitleContainer from './components/PostTitleContainer';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentIndex: 0,
      selectedUserId: 0
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/blog')
      .then(data => data.json(data))
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
    if (!this.state.posts) {
      return <div>Loading...</div>
    }
    return (
      <Router>
      <div className="App">
          <h1 className="App-title">React Blog Post Editor</h1>
          <div className="body-container">
            <PostTitleContainer
              postData={this.state.posts}
              titleContainerClick={this._handleTitleContainerClick}
              selectedUserId={this.state.selectedUserId}
            />
            <Content
              postContent={this.state.posts[this.state.currentIndex].content}
              postTitle={this.state.posts[this.state.currentIndex].title}
              postId={this.state.posts[this.state.currentIndex].id}
              handlePostEdit={this._handlePostEdit}
              userData={this.state.users}
              handleUserFilter={this._handleUserFilter}
              selectedUserId={this.state.selectedUserId}
            />
          </div>
        
      </div>
      </Router>
    );
  }

  _handleTitleContainerClick = (i) => {
    this.setState({
      currentIndex: i
    })
  }

  _handlePostEdit = (value) => {
    this.setState(oldState => {
      let newState = oldState;
      return newState.posts[oldState.currentIndex].content = value;
    })
  }

  _handleUserFilter = (selectedUserId) => {
    this.setState({ 
      selectedUserId
    });
  }

}


export default App;
