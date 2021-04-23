import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainMenu() {


    return (
        <div>
            <h1>Main Menu Page</h1>
            <ul>
                <li>
                    <NavLink className="nav-link border-pop" to='/creator' exact>Character Creator</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/saved' exact>Saved Characters</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Practice Rooms</NavLink>
                </li>
            </ul>
        </div>
    )
}
