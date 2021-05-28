import React from 'react'
import { NavLink } from 'react-router-dom'



export default function MainMenu() {


    return (
        <div>          
            <h1>RPG: Adventurer's Academy</h1>
            <ul>
                <li>
                    <NavLink className="nav-link border-pop" to='/play' exact>Play</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Practice Rooms</NavLink>
                </li>
            </ul>
        </div>
    )
}
