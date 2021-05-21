import React from 'react'
import { NavLink } from 'react-router-dom'
// import Datapull from '../../components/Datapull/Datapull'
import EditCharacter from '../../components/SavedCharacters/EditCharacter'
// import SavedCharacters from '../..components/SavedCharacters/SavedCharacters'
import './css/gameplay-style.css'

export default function Gameplay() {
    return (
        <div>
            <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>

            <EditCharacter />
             
       

            <div>
                Gameplay
            </div>
        </div>
    )
}
