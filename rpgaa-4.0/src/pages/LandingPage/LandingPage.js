import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


import './css/landing-style.css'


export default function LandingPage() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='landing-container'>       
            <li>
                <NavLink className="nav-link border-pop" to='/' exact>Enter RPGAA</NavLink>
            </li>
        </div>
    )
}
