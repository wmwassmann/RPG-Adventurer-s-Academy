import React, { useState } from 'react'
import './css/answer-style.css'



const AnswerItem = (props) => {

    const [open, setOpen] = useState(false)
  

    
    const openNav = (e) => {
        e.preventDefault()
        setOpen(!open)

       
    }


    return (
        <div>

            <div className='nav-item'>

                <div className='icon-button' onClick={openNav}>
                    {props.icon}
                </div>       

                <div className='nav-scroll' id='nav-scroll'>
                    {open && props.children}
                </div>
              
            </div>

        </div>
    )
}

export default AnswerItem
