import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/gameplay-style.css'

export default function Gameplay() {
    return (
        <div>
            <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>
       

            <div>
                Gameplay
            </div>
        </div>
    )
}
