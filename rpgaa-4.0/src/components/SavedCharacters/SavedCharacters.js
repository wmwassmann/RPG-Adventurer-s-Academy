import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const User = props => (
    <tr>
        <td>{props.users.username}</td>
        <td>{props.users.character.characterName}</td>
        <td>{props.users.character.gender}</td>
        <td>{props.users.character.race}</td>
        
    </tr>
)
const SchoolList = props => (
    <tr>
        <td>{props.users.character.alignment.trendingAlignmentStats.good}</td>
        <td>{props.users.character.alignment.trendingAlignmentStats.evil}</td>
        <td>{props.users.character.alignment.trendingAlignmentStats.lawful}</td>
        <td>{props.users.character.alignment.trendingAlignmentStats.chaotic}</td>
    </tr>

)
const AlignmentList = props => (
    <tr>
        <td>{props.users.character.alignment.trendingAlignmentStats.good}</td>
        <td>{props.users.character.alignment.trendingAlignmentStats.evil}</td>
        <td>{props.users.character.alignment.trendingAlignmentStats.lawful}</td>
        <td>{props.users.character.alignment.trendingAlignmentStats.chaotic}</td>
    </tr>

)



export default class Savedusers extends Component {

    constructor(props) {
        super(props)

        this.deleteUser = this.deleteUser.bind(this);

        this.state = { users: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/' + id)
            .then(res => console.log(res.data))
        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    UserList() {
        return this.state.users.map(currentUser => {
            return <User
                users={currentUser}
                deleteUser={this.deleteUser}
                key={currentUser._id}
            />
        })
    }


    schoolList() {
        return this.state.users.map(currentUser => {
            return <SchoolList
                users={currentUser}
                deleteUser={this.deleteUser}
                key={currentUser._id}
            />
        })
    }
    alignmentList() {
        return this.state.users.map(currentUser => {
            return <AlignmentList
                users={currentUser}
                deleteUser={this.deleteUser}
                key={currentUser._id}
            />
        })
    }



    render() {
        return (
            <div>
                <div>
                    <h3>Player users</h3>
                    <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Username</th>
                                <th>Character Name</th>
                                <th>Gender</th>
                                <th>Race</th>
                
                            </tr>
                        </thead>
                        <tbody>
                            {this.UserList()}
                        </tbody>

                    </table>
                </div>
                <div>
                    <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Divinity</th>
                                <th>Arcane</th>
                                <th>Nature</th>
                                <th>Vocation</th>
                     
                            </tr>
                        </thead>
                   
                    <tbody>
                        {this.schoolList()}
                    </tbody>
                    </table>
                </div>
                <div>
                    <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Good</th>
                                <th>Evil</th>
                                <th>Lawful</th>
                                <th>Chaotic</th>
                     
                            </tr>
                        </thead>
                   
                    <tbody>
                        {this.alignmentList()}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
