import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Arena() {
    return (
        <div>
            <h1>Arena</h1>
                {/* This Arena will offer the simple martial weapons and give the play a practice dummy, 
                and/or a sparring partner to test different weapons and see how they match up. 
                For example, you might be given an option for a sword, or bow and arrow against a character with a sword. 
                This will show the player that if they use the bow, they may get a shot off, but the opponent may also close the distance,
                thus putting them at disadvantage. 
                
                Maybe there could even be dialog that says "Be careful when attacking foes with 
                melee weapons with ranged weapons if they are able to get within striking distance."*/}


                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Back</NavLink>
                </li>
        </div>
    )
}
