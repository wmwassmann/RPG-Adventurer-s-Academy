import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CharacterCreation() {

    
    return (
        <div>
           <h1>Character Creation Page</h1> 
           <li>
            <NavLink className="nav-link border-pop" to='/tutorial' exact>Tutorial</NavLink>   
           </li>    
           <li>
            <NavLink className="nav-link border-pop" to='/skip' exact>Skip Tutorial</NavLink>   
           </li>    
           <br>
           </br>


           <li>
            <NavLink className="nav-link border-pop" to='/' exact>Back</NavLink>   
           </li>       
        </div>
    )
}