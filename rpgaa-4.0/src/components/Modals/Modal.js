import React from 'react'
import ReactDom from 'react-dom'
import './css/modal-style.css'



export default function Modal({ open, children }) {
    if (!open) return null
 




    return ReactDom.createPortal(

        <>
            <div className='modal-overlay' />
            <div className='modal-container'>          

            {children}
        
           
            </div>
        </>,
        document.getElementById('portal')
    )
}
