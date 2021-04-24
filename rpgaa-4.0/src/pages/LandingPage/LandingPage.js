import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LandingPage() {

    
    return (
        <div>
           <h1>Landing Page</h1> 
           <li>
            <NavLink className="nav-link border-pop" to='/' exact>Enter RPGAA</NavLink>   
           </li>       
        </div>
    )
}
