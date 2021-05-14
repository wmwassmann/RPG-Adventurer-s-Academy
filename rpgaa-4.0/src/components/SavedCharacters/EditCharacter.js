import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'


export default class EditCharacter extends Component {
    constructor(props) {
        super(props);

        this.onChangeAlignment = this.onChangeAlignment.bind(this);



        this.state = {
            username: '',
            characterName: '',
            gender: '',
            alignment: 0,
            race: '',
            charClass: '',
            users: []
        }
    }



    componentDidMount() {
        axios.get('http://localhost:5000/characters/' + this.props.match.params.id)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        //   gets specifically the indivual user's username - we can get anything with this method.   
                        username: response.data.username,
                        characterName: response.data.map(character => character.characterName),
                        gender: response.data.gender,
                        aligmnent: response.data.alignment,
                        race: response.data.race,
                        charClass: response.data.charClass
                    })
                }
                console.log(response.data)
            })
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


    onChangeAlignment(e) {
        e.preventDefault()
        const character = {
            username: this.state.username,
            characterName: this.state.characterName,
            gender: this.state.gender,
            alignment: this.state.alignment,
            race: this.state.race,
            charClass: this.state.charClass
        }


        this.setState({
            username: this.state.username,
            characterName: this.state.characterName,
            gender: this.state.gender,
            alignment: this.state.alignment + 2,
            race: this.state.race,
            charClass: this.state.charClass
        });


        console.log(character);

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
                        onClick={this.onChangeAlignment}>
                        Alignment</button>



                </div>
                <div>
                    {this.state.alignment}
                </div>

                <div className='form-group'>
                    <label>Class: </label>
                    {this.state.charClass}
                </div>



            </div>
        )
    }
}
