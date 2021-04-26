import React from 'react'
import { NavLink } from 'react-router-dom'
import CharSheet from '../../components/CharacterSheet/CharacterSheet'


export default function CharacterSheet() {


    return (
        <div>
             
            <NavLink className="nav-link border-pop back" to='/' exact>Back</NavLink>
         
            <h1>Character Sheet</h1>

            {/* Split into 4 sub-pages */}
            {/* Offensive */}
            {/* Defensive */}
            {/* Utility */}
            {/* Role Play */}
         
            <CharSheet />
            <br>
            </br>

           

        </div>
    )
}
