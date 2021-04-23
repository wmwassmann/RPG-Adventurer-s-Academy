import React from 'react'
import { NavLink } from 'react-router-dom'

export default function GadgetShop() {
    return (
        <div>
            <h1>Gadget Shop</h1>
                <li>
                    <NavLink className="nav-link border-pop" to='/practice' exact>Back</NavLink>
                </li>
        </div>
    )
}
