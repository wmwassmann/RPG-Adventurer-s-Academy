// import React, { Component } from 'react'
// import axios from 'axios'




// export default class TextAdventure extends Component {

//     constructor(props) {
//         super(props)
//         this.onChangeCharClass = this.onChangeCharClass.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             username: '',
//             characterName: '',
//             gender: '',
//             alignment: '',
//             race: '',
//             charClass: '',        
        
//             users: [],
//             characters: []
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/characters/'+this.props.match.params.id)
//             .then(response => {
//                 this.setState({
//                     username: response.data.username,  
//                     characterName: response.data.characterName,            
//                     gender: response.data.gender,
//                     alignment: response.data.alignment,
//                     race: response.data.race,
//                     charClass: response.data.charClass,
//                 })
//             })
//             .catch(function (error) {
//                 console.log(error)
//             })


//         axios.get('http://localhost:5000/characters')
//             .then(response => {
//                 if (response.data.length > 0) {
//                     this.setState({
//                         //   gets specifically the indivual user's username - we can get anything with this method.
//                         characters: response.data.map(character => character.characterName),
//                     })
//                 }
//             })
//     }


//     onChangeCharClass(e) {
       
//         this.setState({
//             charClass: e.target.value
//         });
//         console.log('success')
      
//     }

//     onSubmit(e) {
//         e.preventDefault();

//         const character = {
//             username: this.state.username,
//             characterName: this.state.characterName,
//             gender: this.state.gender,
//             alignment: this.state.alignment,
//             race: this.state.race,
//             charClass: this.state.charClass
//         }

//         console.log(character);

//         axios.post('http://localhost:5000/characters/update/' + this.props.match.params.id, character)
//             .then(res => console.log(res.data));


//         window.location = '/landing';
//     }



//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.onSubmit}>
//                     <div className='form-group'>
//                         <label>Character: </label>
//                         <select ref='userInput'
//                             required
//                             className='form-control'
//                             value={this.state.characterName}
//                             onChange={this.onChangeCharClass}
//                         >
//                             {
//                                 this.state.characters.map(function (character) {
//                                     return <option
//                                         key={character}
//                                         value={character}>{character}
//                                     </option>;
//                                 })
//                             }
//                         </select>
//                     </div>            
//                     <div className='form-group'>
//                         <label>Gender: </label>
//                         <button 
//                             // required
//                             className='form-control'
//                             value={this.state.gender + 54}                           
//                             onClick={this.onChangeGender}
//                         />
//                     </div>


//                     <div className='form-group'>
//                         <input type='submit' value='Update Character' className='btn btn-primary' />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

