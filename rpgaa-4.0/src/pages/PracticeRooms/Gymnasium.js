import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Gymnasium() {
    return (
        <div>
            <h1>Gymnasium</h1>

                {/* This will test acrobatics vs athletics, perception, survival maybe?  */}

                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Back</NavLink>
                </li>
        </div>
    )
}
