import React, { Component } from 'react'
import axios from 'axios';

export default class Datapull extends Component {


    constructor(props) {
        super(props);
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
        axios.get('http://localhost:5000/characters/60a160937a63023a2c391cac/')
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

                const alignGood = this.state.good
                const alignEvil = this.state.evil
                const alignLawful = this.state.lawful
                const alignChaotic = this.state.chaotic

                localStorage.setItem('good', alignGood)
                localStorage.setItem('evil', alignEvil)
                localStorage.setItem('lawful', alignLawful)
                localStorage.setItem('chaotic', alignChaotic)

                const goodTrend = localStorage.getItem('good')
                const evilTrend = localStorage.getItem('evil')
                const lawfulTrend = localStorage.getItem('lawful')
                const chaoticTrend = localStorage.getItem('chaotic')

                if (goodTrend === evilTrend) {
                    console.log('Neutral')
                    return

                } else if (lawfulTrend > chaoticTrend && goodTrend > evilTrend) {
                    localStorage.setItem('Trending Alignment', 'Lawful Good')
                    console.log('Lawful Good')                    
                } else if (lawfulTrend < chaoticTrend && goodTrend > evilTrend) {
                    localStorage.setItem('Trending Alignment', 'Chaotic Good')
                    console.log('Chaotic Good')
                } else if (lawfulTrend > chaoticTrend && goodTrend < evilTrend) {
                    localStorage.setItem('Trending Alignment', 'Lawful Evil')
                    console.log('Lawful Evil')
                } else if (lawfulTrend < chaoticTrend && goodTrend < evilTrend) {
                    localStorage.setItem('Trending Alignment', 'Chaotic Evil')
                    console.log('Chaotic Evil')
                } 


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
                Pull
            </div>
        )
    }
}
