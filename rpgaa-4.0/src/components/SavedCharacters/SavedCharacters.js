import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Character = props => (
    <tr>
        <td>{props.characters.username}</td>
        <td>{props.characters.characterName}</td>
        <td>{props.characters.gender}</td>
        <td>{props.characters.alignment}</td>
        <td>{props.characters.race}</td>
        <td>{props.characters.charClass}</td>

        <td>
            <Link to={'/edit/' + props.characters._id}>edit</Link> | <button href='#' onClick={() => { props.deleteCharacter(props.characters._id) }}>delete</button>
        </td>
    </tr>
)

const AlignmentList = props => (
    <tr>
        <td>{props.characters.good}</td>
        <td>{props.characters.evil}</td>
        <td>{props.characters.lawful}</td>
        <td>{props.characters.chaotic}</td>


    </tr>

)



export default class SavedCharacters extends Component {

    constructor(props) {
        super(props)

        this.deleteCharacter = this.deleteCharacter.bind(this);

        this.state = { characters: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/characters/')
            .then(response => {
                this.setState({ characters: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCharacter(id) {
        axios.delete('http://localhost:5000/characters/' + id)
            .then(res => console.log(res.data))
        this.setState({
            characters: this.state.characters.filter(el => el._id !== id)
        })
    }

    characterList() {
        return this.state.characters.map(currentCharacter => {
            return <Character
                characters={currentCharacter}
                deleteCharacter={this.deleteCharacter}
                key={currentCharacter._id}
            />
        })
    }


    alignmentList() {
        return this.state.characters.map(currentCharacter => {
            return <AlignmentList
                characters={currentCharacter}
                deleteCharacter={this.deleteCharacter}
                key={currentCharacter._id}
            />
        })
    }



    render() {
        return (
            <div>
                <div>
                    <h3>Player Characters</h3>
                    <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Username</th>
                                <th>Character</th>
                                <th>Gender</th>
                                <th>Alignment</th>
                                <th>Race</th>
                                <th>Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.characterList()}
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
