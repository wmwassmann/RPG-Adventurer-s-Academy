import React from 'react'
import { NavLink } from 'react-router-dom'
import Characters from '../../components/SavedCharacters/SavedCharacters'

export default function SavedCharacters() {




    return (
        <div>

            <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>
           
            {/* Consider One character - rethink 'Continue' vs multiple options */}
            <h1>Saved Characters</h1>
            <ul>
                <li>
                    <NavLink className="nav-link border-pop" to='/sheet' exact>Character Sheet - Demo</NavLink>
                </li>                     
            </ul>
            <Characters />

          
        </div>
    )
}
