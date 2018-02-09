import React, { Component } from 'react';

class UserSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        }
    }

    

    render() {
        let usersList = this.props.userData.map(user => {
            if (user.id === this.state.selected) {
                return (
                    <option key={user.id} value={user.id} selected>{user.firstName}</option>
                )
            } else {
                return (
                    <option key={user.id} value={user.id}>{user.firstName}</option>
                )
            }
            
        });

        return (
        <div className="user-select">
            <p>Select posts of user:</p>
            <select name="users" id="users" onChange={(event) => {this._handleUserFilter(event.target.value)}}>
                {usersList}   
            </select>
        </div>
        )
    }

    _handleUserFilter = value => {
        this.setState({
            selected: value
        }, () => this.props.handleUserFilter(value));
        
    }
}

export default UserSelect;