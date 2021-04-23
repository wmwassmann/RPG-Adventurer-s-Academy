import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Library() {
    return (
        <div>
            <h1>Library</h1>
                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Back</NavLink>
                </li>
        </div>
    )
}
