import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import WelcomeModal from '../../components/Modals/WelcomeModal'
// import TextAdventure from '../../components/TextAdventure/TextAdventure'
import EditCharacter from '../../components/SavedCharacters/EditCharacter'
import './css/landing-style.css'


export default function LandingPage() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='landing-container'>


            <div className='welcome-modal'>

                <button className='start-btn' onClick={() => setIsOpen(true)}>Start</button>


                <WelcomeModal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}>       
                </WelcomeModal>
            </div>
        {/* <TextAdventure /> */}
        {/* <EditCharacter />  */}
            <li>
                <NavLink className="nav-link border-pop" to='/' exact>Enter RPGAA</NavLink>
            </li>
        </div>
    )
}
