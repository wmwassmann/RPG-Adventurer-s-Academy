import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Tavern() {
    return (
        <div>

             <NavLink className="nav-link border-pop" to='/practice' exact>Back</NavLink>
            
            {/* In the tavern - the player will practice role playing, purchasing items, getting quests, learning about people, 
            using investigation, performance, persuasion, slight of hand, and deception */}

            <h1>Tavern</h1>
            
        </div>
    )
}
