import React from 'react'
import './css/answer-style.css'




const AnswerNav = (props) => {
    return (
        <nav className='answer-navbar'> 
            <ul className='answer-nav'>
                {/* change the content for this accessing the database */}
                { props.children }
            </ul>
        </nav>

        
    )
}

export default AnswerNav
