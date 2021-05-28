import React, { Component } from 'react'

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
        <td>{props.users.character.charClass.trendingSchool.divinity}</td>
        <td>{props.users.character.charClass.trendingSchool.arcane}</td>
        <td>{props.users.character.charClass.trendingSchool.nature}</td>
        <td>{props.users.character.charClass.trendingSchool.vocation}</td>
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

        this.state = {
            character: {
                characterName: '',
                gender: '',
                race: '',

                alignment: {
                    trendingAlignment: '',
                    trendingAlignmentStats: {
                        good: 0,
                        evil: 0,
                        lawful: 0,
                        chaotic: 0,
                    }
                },

                charClass: {
                    selectedSchool: '',
                    trendingSchool: {
                        divinity: 0,
                        nature: 0,
                        arcane: 0,
                        vocation: 0,
                    },
                    divinity: {
                        majorPaladin: 0,
                        majorCleric: 0,
                        majorMonk: 0,
                    },
                    nature: {
                        majorWizard: 0,
                        majorBard: 0,
                        majorWarlock: 0,
                    },
                    arcane: {
                        majorRanger: 0,
                        majorBarbarian: 0,
                        majorDruid: 0,
                    },
                    vocation: {
                        majorFighter: 0,
                        majorSorcerer: 0,
                        majorRogue: 0,
                    },
                },
            },
            users: []
        }
    }


    componentDidMount() {      
            
       

                // const charName = this.state.character.characterName
                // const gender = this.state.character.gender
                // const race = this.state.character.race
                // const trendingAlignment = this.state.character.alignment.trendingAlignment
                // const trendingAlignmentStatsG = this.state.character.alignment.trendingAlignmentStats.good
                // const trendingAlignmentStatsE = this.state.character.alignment.trendingAlignmentStats.evil
                // const trendingAlignmentStatsL = this.state.character.alignment.trendingAlignmentStats.lawful
                // const trendingAlignmentStatsC = this.state.character.alignment.trendingAlignmentStats.chaotic
               

                // localStorage.setItem('Character', charName)
                // localStorage.setItem('Gender', gender)
                // localStorage.setItem('Race', race)
                // localStorage.setItem('Trending Alignment', trendingAlignment)
                // localStorage.setItem('Good', trendingAlignmentStatsG)
                // localStorage.setItem('Evil', trendingAlignmentStatsE)
                // localStorage.setItem('Lawful', trendingAlignmentStatsL)
                // localStorage.setItem('Chaotic', trendingAlignmentStatsC)


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
