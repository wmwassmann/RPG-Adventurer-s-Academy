import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SavedCharacters() {



    
    return (
        <div>
            <h1>Saved Characters</h1>
            <li>
            <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>   
           </li>     
        </div>
    )
}
