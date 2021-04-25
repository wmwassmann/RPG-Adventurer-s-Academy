import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SavedCharacters() {




    return (
        <div>
            <h1>Saved Characters</h1>
            <ul>
                <li>
                    <NavLink className="nav-link border-pop" to='/sheet' exact>Character Sheet - Demo</NavLink>
                </li>

                <br>
                </br>

                <li>
                <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>
            </li>
            </ul>

          
        </div>
    )
}
