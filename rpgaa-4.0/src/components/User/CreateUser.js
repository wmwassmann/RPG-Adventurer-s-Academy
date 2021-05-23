import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'

// import { useAuth } from '../../contexts/AuthContext'


export default class CreateUser extends Component {

    constructor(props) {
        super(props);
        // this binds ".this" to each method within each method.
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirmation= this.onChangePasswordConfirmation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''

        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangePasswordConfirmation(e) {
        this.setState({
            passwordConfirm: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
          
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        // this.setState({
        //     username: '',
        //     email: '',
        //     password: '',
        //     passwordConfirm: ''

        // })
    }


    render() {
        return (
            <div>
                <NavLink className="nav-link border-pop back" to='/' exact>Back</NavLink>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <input type="text"
                            required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email: </label>
                        <input type="text"
                            required
                            className='form-control'
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input type="text"
                            required
                            className='form-control'
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password Confirmation: </label>
                        <input type="text"
                            required
                            className='form-control'
                            value={this.state.passwordConfirm}
                            onChange={this.onChangePasswordConfirmation}
                        />
                    </div>
               
                    <div className='form-group'>
                        <input type='submit' value='Sign up!' className='btn btn-primary' />
                    </div>
                </form>

  
            </div>
        )
    }
}
