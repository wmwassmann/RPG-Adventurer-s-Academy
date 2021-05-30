import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/menu-style.css'



export default function MainMenu() {


    return (
    <div className='main-menu-background'>
        <div className='main-menu-container'>              
                <div className='menu-link'>
                    <NavLink className="nav-link border-pop" to='/gameplay' exact>PLAY</NavLink>
                </div>
                <div className='menu-link'>
                    <NavLink className="nav-link border-pop" to='/practice' exact>PRACTICE</NavLink>
                </div>              
                <div className='menu-link'>
                    <NavLink className="nav-link border-pop" to='/practice' exact>EXPLORE</NavLink>
                </div>              
        </div>
    </div>
    )
}
