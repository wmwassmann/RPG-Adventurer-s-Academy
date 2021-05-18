import React from 'react'
import { NavLink } from 'react-router-dom'
import Datapull from '../../components/Datapull/Datapull'
import './css/gameplay-style.css'

export default function Gameplay() {
    return (
        <div>
            <NavLink lclassName="nav-link border-pop" to='/' exact>Back</NavLink>
            <Datapull/>
            <div>
                Gameplay
            </div>
        </div>
    )
}
