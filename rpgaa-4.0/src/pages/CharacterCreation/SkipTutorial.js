import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SkipTutorial() {

    
    return (
        <div>
           <h1>Skip Tutorial Page</h1>    
            {/* Give the player the ability to go straight to a simple character creator */}

           <li>
            <NavLink className="nav-link border-pop" to='/creator' exact>Back</NavLink>   
           </li>       
        </div>
    )
}
