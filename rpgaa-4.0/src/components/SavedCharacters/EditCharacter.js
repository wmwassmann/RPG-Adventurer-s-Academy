import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'




export default class EditCharacter extends Component {
    constructor(props) {
        super(props);

        this.handleResponseOne = this.handleResponseOne.bind(this);
        this.handleResponseTwo = this.handleResponseTwo.bind(this);



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
                    chaotic: response.data.chaotic,

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

    componentDidUpdate() {


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
            chaotic: this.state.chaotic,

        }

        axios.post('http://localhost:5000/characters/update/' + this.props.match.params.id, character)
            .then(res => console.log(res.data));
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
            chaotic: this.state.chaotic,

        }

        console.log(character);
        console.log(this.state, 'this.state')

        const alignGood = this.state.good + 3
        const alignEvil = this.state.evil
        const alignLawful = this.state.lawful + 4
        const alignChaotic = this.state.chaotic

        localStorage.setItem('good', alignGood)
        localStorage.setItem('evil', alignEvil)
        localStorage.setItem('lawful', alignLawful)
        localStorage.setItem('chaotic', alignChaotic)

        const goodTrend = localStorage.getItem('good')
        const evilTrend = localStorage.getItem('evil')
        const lawfulTrend = localStorage.getItem('lawful')
        const chaoticTrend = localStorage.getItem('chaotic')

        const trendingAlignment = localStorage.getItem('Trending Alignment')

        localStorage.setItem('Trending Alignment', '')

        if ((lawfulTrend > chaoticTrend) && (goodTrend > evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Lawful Good')
            console.log('Lawful Good')
        } else if ((lawfulTrend === chaoticTrend) && (goodTrend > evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Neutral Good')
            console.log('Neutral Good')
        } else if ((chaoticTrend > lawfulTrend) && (goodTrend > evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Chaotic Good')
            console.log('Chaotic Good')
        } else if ((lawfulTrend > chaoticTrend) && (goodTrend === evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Lawful Neutral')
            console.log('Lawful Neutral')
        } else if ((lawfulTrend === chaoticTrend) && (goodTrend === evilTrend)) {
            localStorage.setItem('Trending Alignment', 'True Neutral')
            console.log('True Neutral')
        } else if ((chaoticTrend > lawfulTrend) && (goodTrend === evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Chaotic Neutral')
            console.log('Chaotic Neutral')
        } else if ((lawfulTrend > chaoticTrend) && (evilTrend > goodTrend)) {
            localStorage.setItem('Trending Alignment', 'Lawful Evil')
            console.log('Lawful Evil')
        } else if ((lawfulTrend === chaoticTrend) && (evilTrend > goodTrend)) {
            localStorage.setItem('Trending Alignment', 'Neutral Evil')
            console.log('Neutral Evil')
        } else if ((chaoticTrend > lawfulTrend) && (evilTrend > goodTrend)) {
            localStorage.setItem('Trending Alignment', 'Chaotic Evil')
            console.log('Chaotic Evil')
        }

        this.setState({
            username: this.state.username,
            characterName: this.state.characterName,
            gender: this.state.gender,
            alignment: trendingAlignment,
            race: this.state.race,
            charClass: this.state.charClass,
            good: alignGood,
            evil: alignEvil,
            lawful: alignLawful,
            chaotic: alignChaotic
        });
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
            chaotic: this.state.chaotic,

        }

        console.log(character);
        console.log(this.state, 'this.state')

        const alignGood = this.state.good
        const alignEvil = this.state.evil + 2
        const alignLawful = this.state.lawful
        const alignChaotic = this.state.chaotic + 2


        localStorage.setItem('good', alignGood)
        localStorage.setItem('evil', alignEvil)
        localStorage.setItem('lawful', alignLawful)
        localStorage.setItem('chaotic', alignChaotic)


        const goodTrend = localStorage.getItem('good')
        const evilTrend = localStorage.getItem('evil')
        const lawfulTrend = localStorage.getItem('lawful')
        const chaoticTrend = localStorage.getItem('chaotic')
        const trendingAlignment = localStorage.getItem('Trending Alignment')

        localStorage.setItem('Trending Alignment', '')

        if ((lawfulTrend > chaoticTrend) && (goodTrend > evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Lawful Good')
            console.log('Lawful Good')
        } else if ((lawfulTrend === chaoticTrend) && (goodTrend > evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Neutral Good')
            console.log('Neutral Good')
        } else if ((chaoticTrend > lawfulTrend) && (goodTrend > evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Chaotic Good')
            console.log('Chaotic Good')
        } else if ((lawfulTrend > chaoticTrend) && (goodTrend === evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Lawful Neutral')
            console.log('Lawful Neutral')
        } else if ((lawfulTrend === chaoticTrend) && (goodTrend === evilTrend)) {
            localStorage.setItem('Trending Alignment', 'True Neutral')
            console.log('True Neutral')
        } else if ((chaoticTrend > lawfulTrend) && (goodTrend === evilTrend)) {
            localStorage.setItem('Trending Alignment', 'Chaotic Neutral')
            console.log('Chaotic Neutral')
        } else if ((lawfulTrend > chaoticTrend) && (evilTrend > goodTrend)) {
            localStorage.setItem('Trending Alignment', 'Lawful Evil')
            console.log('Lawful Evil')
        } else if ((lawfulTrend === chaoticTrend) && (evilTrend > goodTrend)) {
            localStorage.setItem('Trending Alignment', 'Neutral Evil')
            console.log('Neutral Evil')
        } else if ((chaoticTrend > lawfulTrend) && (evilTrend > goodTrend)) {
            localStorage.setItem('Trending Alignment', 'Chaotic Evil')
            console.log('Chaotic Evil')
        }

        this.setState({
            username: this.state.username,
            characterName: this.state.characterName,
            gender: this.state.gender,
            alignment: trendingAlignment,
            race: this.state.race,
            charClass: this.state.charClass,
            good: alignGood,
            evil: alignEvil,
            lawful: alignLawful,
            chaotic: alignChaotic

        });
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
                        Lawful Good
                    </button>
                </div>
                <div className='form-group'>

                    <button
                        className='data-base-btn'
                        onClick={this.handleResponseTwo}>
                        Chaotic Evil
                    </button>
                </div>

                <div>
                    Good: {this.state.good}
                </div>
                <div>
                    Evil: {this.state.evil}
                </div>
                <div>
                    Lawful: {this.state.lawful}
                </div>
                <div>
                    Chaotic: {this.state.chaotic}
                </div>



                <div className='form-group'>
                    <label>Class: </label>
                    {this.state.charClass}
                </div>
            </div>
        )
    }
}
