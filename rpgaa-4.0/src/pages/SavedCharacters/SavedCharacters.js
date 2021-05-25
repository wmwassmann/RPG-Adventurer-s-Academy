import React from 'react'
import { NavLink } from 'react-router-dom'
import Characters from '../../components/SavedCharacters/SavedCharacters'


export default function SavedCharacters() {


    return (
        <div>
            <div>
                <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>
                <NavLink className="nav-link border-pop" to='/gameplay' exact>Play</NavLink>
            </div>
            <Characters />

        </div>
    )
}
