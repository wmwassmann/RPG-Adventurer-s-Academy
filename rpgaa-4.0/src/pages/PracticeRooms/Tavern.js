import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Tavern() {
    return (
        <div>
            <h1>Tavern</h1>
                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Back</NavLink>
                </li>
        </div>
    )
}
