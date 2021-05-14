import React from 'react'
import ReactDom from 'react-dom'
import './css/modal-style.css'
import TextAdventure from '../TextAdventure/TextAdventure'
import EditCharacter from '../SavedCharacters/EditCharacter'

export default function WelcomeModal({ open, children }) {
    if (!open) return null






    return ReactDom.createPortal(

        <>
            <div className='modal-overlay' />
            <div className='modal-container'>
               
{/*                 
            <TextAdventure /> */}
            <EditCharacter />
        
           
            </div>
        </>,
        document.getElementById('portal')
    )
}
