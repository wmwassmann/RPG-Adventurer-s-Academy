import React from 'react'

import './css/answer-style.css'
// import { CSSTransition } from 'react-transition-group';


const AnswerDropdown = () => {

    const divinity = 'divinity'
    const arcane = 'arcane'
    const nature = 'nature'
    const vocation = 'vocation'

    const DropdownItem = (props) => {



        const handleAnswer = (e) => {
            e.preventDefault()
            // console.log(props.school)
            const school = JSON.parse(localStorage.getItem(`${props.school}`))


            localStorage.setItem(`${props.school}`, (school + 1))
            console.log(school)
        
        }


        return (
            <button href='#' className='menu-item' onClick={handleAnswer}>
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

                    <DropdownItem school={divinity}>Leadership and enlightment</DropdownItem>
                    <DropdownItem school={arcane}>Thrill of magical studies</DropdownItem>
                    <DropdownItem school={nature}>Wonders of the natural world</DropdownItem>
                    <DropdownItem school={vocation}>Hands on experience</DropdownItem>
                </div>
            {/* </CSSTransition> */}
        </div>

    )
}

export default AnswerDropdown
