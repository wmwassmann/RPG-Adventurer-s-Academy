import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import SavedCharacters from './SavedCharacters';



export default class EditCharacter extends Component {
    constructor(props) {
        super(props);

        this.handleResponseOne = this.handleResponseOne.bind(this);
        this.handleResponseTwo = this.handleResponseTwo.bind(this);

        this.state = {
            username: '',
            characterName: '',
            gender: '',
            alignment: 0,
            race: '',
            charClass: '',
            good: 0,
            evil: 0,
            lawful: 0,
            chaotic: 0,
            users: []
        }
    }



    componentDidMount() {
        axios.get('http://localhost:5000/characters/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    //   gets specifically the indivual user's username - we can get anything with this method.   
                    username: response.data.username,
                    characterName: response.data.characterName,
                    gender: response.data.gender,
                    alignment: response.data.alignment,
                    race: response.data.race,
                    charClass: response.data.charClass,
                    good: response.data.good,
                    evil: response.data.evil,
                    lawful: response.data.lawful,
                    chaotic: response.data.chaotic
                })

                console.log(response.data, 'this')
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(this.state)

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }



    handleResponseOne() {

        const character = {
            username: this.state.username,
            characterName: this.state.characterName,
            gender: this.state.gender,
            alignment: this.state.alignment,
            race: this.state.race,
            charClass: this.state.charClass,
            good: this.state.good,
            evil: this.state.evil,
            lawful: this.state.lawful,
            chaotic: this.state.chaotic
        }


        this.setState({
            username: this.state.username,
            characterName: this.state.characterName,
            gender: this.state.gender,
            alignment: this.state.alignment,
            race: this.state.race,
            charClass: this.state.charClass,
            good: this.state.good + 3,
            evil: this.state.evil + 0,
            lawful: this.state.lawful + 4,
            chaotic: this.state.chaotic + 0
        });

        console.log(character);
        console.log(this.state, 'this.state')

        axios.post('http://localhost:5000/characters/update/' + this.props.match.params.id, character)
            .then(res => console.log(res.data));

    }

    handleResponseTwo() {

        const character = {
            username: this.state.username,
            characterName: this.state.characterName,
            gender: this.state.gender,
            alignment: this.state.alignment,
            race: this.state.race,
            charClass: this.state.charClass,
            good: this.state.good,
            evil: this.state.evil,
            lawful: this.state.lawful,
            chaotic: this.state.chaotic
        }


        this.setState({
            username: this.state.username,
            characterName: this.state.characterName,
            gender: this.state.gender,
            alignment: this.state.alignment,
            race: this.state.race,
            charClass: this.state.charClass,
            good: this.state.good + 0,
            evil: this.state.evil + 2,
            lawful: this.state.lawful + 2,
            chaotic: this.state.chaotic + 0
        });

        console.log(character);
        console.log(this.state, 'this.state')

        axios.post('http://localhost:5000/characters/update/' + this.props.match.params.id, character)
            .then(res => console.log(res.data));

    }



    render() {

        return (

            <div>
                <NavLink className="nav-link border-pop back" to='/landing' exact>Back</NavLink>
                <h3> Update Character</h3>

                <div className='form-group'>
                    <label>Character Name: </label>
                    {this.state.characterName}
                </div>
                <div className='form-group'>

                    <button
                        className='data-base-btn'
                        onClick={this.handleResponseOne}>
                        Response One</button>



                </div>
                <div>
                    {this.state.good}
                </div>
                <div>
                    {this.state.evil}
                </div>
                <div>
                    {this.state.lawful}
                </div>
                <div>
                    {this.state.chaotic}
                </div>
                <div className='form-group'>

                    <button
                        className='data-base-btn'
                        onClick={this.handleResponseTwo}>
                        Response Two</button>



                </div>


                <div className='form-group'>
                    <label>Class: </label>
                    {this.state.charClass}
                </div>


                <SavedCharacters />
            </div>
        )
    }
}
