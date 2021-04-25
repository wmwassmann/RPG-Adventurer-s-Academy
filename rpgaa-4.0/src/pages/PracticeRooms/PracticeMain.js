import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PracticeRooms() {



    return (
        <div>
            <h1>Practice Rooms</h1>

            {/* The purpose of this page is to route the user to various practice rooms. 
            May look into simple animation to add to the transitional experience */}

        


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

                <br>
                </br>

                <li>
                    <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>
                </li>
            </ul>

        </div>
    )
}
