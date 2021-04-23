import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PracticeRooms() {



    return (
        <div>
            <h1>Practice Rooms</h1>
            <ul>
            <li>
                    <NavLink className="nav-link border-pop" to='/tavern' exact>The Tavern - Role Playing</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/arena' exact>Sparing Arena - Direct Combat</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/library' exact>The Library - Spells</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/gadget' exact>The Gadget Shop - Puzzle Solving</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/gym' exact>The Gymnasium - Skill Checks</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>
                </li>
            </ul>

        </div>
    )
}
