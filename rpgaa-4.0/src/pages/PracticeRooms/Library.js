import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Library() {
    return (
        <div>
            <NavLink className="nav-link border-pop" to='/practice' exact>Back</NavLink>

            <h1>Library</h1>

                {/* The Library will teach you how to cast, prepare, and learn spells, as well as what spellslots are. 
                It will also help you practice Arcana checks, Religion, Magic, and Medicine*/}

        </div>
    )
}
