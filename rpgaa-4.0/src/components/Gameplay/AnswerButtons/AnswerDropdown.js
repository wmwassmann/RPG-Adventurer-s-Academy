import React, { useState } from 'react'

import './css/answer-style.css'
// import { CSSTransition } from 'react-transition-group';


const AnswerDropdown = () => {

    // const [activeMenu, setActiveMenu] = useState('main')

    const DropdownItem = (props) => {
        return (
            <button href='#' className='menu-item'>
                {props.children}
            </button>
        )
    }

    return (

        <div className='dropdown'>
            {/* <CSSTransition
                className='menu-dropdown'
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
            > */}
                <div className='menu'>

                    <DropdownItem>Answer One</DropdownItem>
                    <DropdownItem>Answer Two</DropdownItem>
                    <DropdownItem>Answer Three</DropdownItem>
                    <DropdownItem>Answer Four</DropdownItem>
                </div>
            {/* </CSSTransition> */}
        </div>

    )
}

export default AnswerDropdown
