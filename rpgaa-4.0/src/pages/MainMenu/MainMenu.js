import React from 'react'
import { NavLink } from 'react-router-dom'



export default function MainMenu() {


    return (
        <div>          
            <h1>RPG: Adventurer's Academy</h1>
         
                    <NavLink className="nav-link border-pop" to='/gameplay' exact>Play</NavLink>
              
                    <NavLink className="nav-link border-pop" to='/practice' exact>Practice Rooms</NavLink>
          
        </div>
    )
}
