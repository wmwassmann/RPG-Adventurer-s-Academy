import React from 'react'
import { NavLink } from 'react-router-dom'



export default function MainMenu() {


    return (
        <div>
            <NavLink className="nav-link border-pop back" to='/landing' exact>Back</NavLink>
            <h1>RPG: Adventurer's Academy</h1>
            <ul>
                <li>
                    <NavLink className="nav-link border-pop back" to='/gameplay' exact>Play</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/user' exact>Character New User</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/creator' exact>Character Creator</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/saved' exact>Saved Characters</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Practice Rooms</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/auth' exact>Auth</NavLink>
                </li>
            </ul>
        </div>
    )
}
