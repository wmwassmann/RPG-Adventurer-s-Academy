import React, { Component } from 'react'
import axios from 'axios';

export default class Datapull extends Component {


    constructor(props) {
        super(props);
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
            neutral: 0,
            users: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/characters/60a46d712f0d0949d0154b8f')
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
                    neutral: response.data.neutral,
                })

                const alignGood = this.state.good
                const alignEvil = this.state.evil
                const alignLawful = this.state.lawful
                const alignChaotic = this.state.chaotic
                const alignNeutral = this.state.neutral

                localStorage.setItem('good', alignGood)
                localStorage.setItem('evil', alignEvil)
                localStorage.setItem('lawful', alignLawful)
                localStorage.setItem('chaotic', alignChaotic)
                localStorage.setItem('neutral', alignNeutral)

                const trendingAlignment = localStorage.getItem('Trending Alignment')

                localStorage.setItem('Trending Alignment', '')




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
                    neutral: this.state.neutral
                }

                this.setState({
                    username: this.state.username,
                    characterName: this.state.characterName,
                    gender: this.state.gender,
                    alignment: trendingAlignment,
                    race: this.state.race,
                    charClass: this.state.charClass,
                    good: this.state.good,
                    evil: this.state.evil,
                    lawful: this.state.lawful,
                    chaotic: this.state.chaotic,
                    neutral: this.state.neutral
                });

                axios.post('http://localhost:5000/characters/update/' + this.props.match.params.id, character)
                    .then(res => console.log(res.data));



                console.log(response.data, 'this')
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(this.state)

    }


    render() {
        return (
            <div>

            </div>
        )
    }
}
