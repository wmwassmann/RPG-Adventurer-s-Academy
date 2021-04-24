import React from 'react'
import { NavLink } from 'react-router-dom'

export default function GadgetShop() {
    return (
        <div>
            <h1>Gadget Shop</h1>

                {/* This practice room will test primarily rogue, bard, and some ranger skills - Find a better name for it*/}


                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Back</NavLink>
                </li>
        </div>
    )
}
