import React from 'react'
import { NavLink } from 'react-router-dom'


export default function CharacterSheet() {
    return (
        <div>
            <h1>Character Sheet</h1>

            {/* Split into 4 sub-pages */}
            {/* Offensive */}
            {/* Defensive */}
            {/* Utility */}
            {/* Role Play */}

            <li>
                <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>
            </li>

        </div>
    )
}
