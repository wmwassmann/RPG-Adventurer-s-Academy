import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'

// import { useAuth } from '../../contexts/AuthContext'


export default class LoginUser extends Component {

    constructor(props) {
        super(props);
        // this binds ".this" to each method within each method.

        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           
            email: '',
            password: '',
   

        }
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



    onSubmit(e) {
        e.preventDefault();

        const user = {
           
            email: this.state.email,
            password: this.state.password,     
          
        }

        console.log(user);

        axios.get('http://localhost:5000/users', user)
            .then(res => console.log(res.data))
            .catch(error=> {
                console.log(error)
            });

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
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
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
                <input type='submit' value='Login!' className='btn btn-primary' />
            </div>
        </form>


    </div>
    )
}
}