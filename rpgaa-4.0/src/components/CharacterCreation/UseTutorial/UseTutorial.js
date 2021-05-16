import React, { Component } from 'react'
import axios from 'axios';


export default class UseTutorial extends Component {
    constructor(props) {
        super(props);
        // this binds ".this" to each method within each method.
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeCharacter = this.onChangeCharacter.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);        
        this.onChangeGood = this.onChangeGood.bind(this);
        this.onChangeEvil = this.onChangeEvil.bind(this);
        this.onChangeLawful = this.onChangeLawful.bind(this);
        this.onChangeChaotic = this.onChangeChaotic.bind(this);
        this.onChangeRace = this.onChangeRace.bind(this);
        this.onChangeCharClass = this.onChangeCharClass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            characterName: '',
            gender: '',
            alignment: '',
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
      axios.get('http://localhost:5000/users')
      .then(response => {
          if (response.data.length > 0) {
              this.setState({
                //   gets specifically the indivual user's username - we can get anything with this method.
                  users: response.data.map(user => user.username),
                  username: response.data[0].username
              })
          }
      })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeCharacter(e) {
        this.setState({
            characterName: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeGood(e) {
        this.setState({
            good: e.target.value
        });
    }

    onChangeEvil(e) {
        this.setState({
            evil: e.target.value
        });
    }

    onChangeLawful(e) {
        this.setState({
            lawful: e.target.value
        });
    }

    onChangeChaotic(e) {
        this.setState({
            chaotic: e.target.value
        });
    }

    onChangeRace(e) {
        this.setState({
            race: e.target.value
        });
    }

    onChangeCharClass(e) {
        this.setState({
            charClass: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

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

        console.log(character);

        axios.post('http://localhost:5000/characters/add', character)
        .then(res => console.log(res.data));
     

        window.location = '/';
    }



    render() {

        return (

            <div>
                <h3> Create New Character</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <select ref='userInput'
                            required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Character Name: </label>
                        <input type='text'
                            // required
                            className='form-control'
                            value={this.state.characterName}
                            onChange={this.onChangeCharacter}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Gender: </label>
                        <input type='text'
                            // required
                            className='form-control'
                            value={this.state.gender}
                            onChange={this.onChangeGender}
                        />
                    </div>   
                    <div className='form-group'>
                        <label>Good: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.good}
                            onChange={this.onChangeGood}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Evil: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.evil}
                            onChange={this.onChangeEvil}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Lawful: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.lawful}
                            onChange={this.onChangeLawful}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Chaotic: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.chaotic}
                            onChange={this.onChangeChaotic}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Race: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.race}
                            onChange={this.onChangeRace}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Class: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.charClass}
                            onChange={this.onChangeCharClass}
                        />
                    </div>


                    <div className='form-group'>
                        <input type='submit' value='Create Character' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}
