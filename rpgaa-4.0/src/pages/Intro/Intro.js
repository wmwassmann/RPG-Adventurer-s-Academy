
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
// import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
// import Modal from '../../components/Modals/Modal'
import LowerModal from '../../components/Modals/LowerModal'
import { useHistory } from 'react-router-dom'
import AnswerDropdown from '../../components/Gameplay/AnswerButtons/AnswerDropdown'
// import AnswerItem from '../../components/Gameplay/AnswerButtons/AnswerItem.js';
// import AnswerNavbar from '../../components/Gameplay/AnswerButtons/AnswerNav.js';

import './css/intro-style.css'

const Intro = () => {


    const narrationBlock = useSelector((state) => state.narration)
    const [narrationCount, setNarrationCount] = useState(0);
    const [blockCount, setBlockCount] = useState(0)
    const history = useHistory()
    const backdrop = document.getElementById('intro-backdrop')
    const addButton = document.getElementById('intro-button-container')


    let currentNarration = narrationBlock.result[blockCount].lines


    useEffect(() => {
        let currentNarration = narrationBlock.result[blockCount].lines
        const parsedNarrationCount = Number(localStorage.getItem('narration') || 0)
        const parsedBlockCount = Number(localStorage.getItem('narrationBlock') || 0)


        if (parsedNarrationCount === currentNarration.length) {
            setNarrationCount(currentNarration.length)
            addButton.classList.remove('hidden')


            // } else {
            //     setNarrationCount(parsedNarrationCount)

        }

        if (parsedNarrationCount === 2 && parsedBlockCount === 0) {
            backdrop.classList.add('intro-backdrop-two')
            setTimeout(() => {
                backdrop.classList.remove('intro-backdrop')
            }, 1500)
        }


        if (parsedNarrationCount === 4 && parsedBlockCount === 0) {
            backdrop.classList.add('intro-backdrop-three')
            setTimeout(() => {
                backdrop.classList.remove('intro-backdrop-two')
            }, 1500)
        }

        
        if (parsedNarrationCount === 6 && parsedBlockCount === 0) {
            backdrop.classList.add('intro-backdrop-four')
            setTimeout(() => {
                backdrop.classList.remove('intro-backdrop-three')
            }, 1500)
        }

        if (parsedNarrationCount === 1 && parsedBlockCount === 1) {
            backdrop.classList.add('intro-backdrop-five')
            setTimeout(() => {
                backdrop.classList.remove('intro-backdrop-four')
            }, 1500)
        }


        const counter = setInterval(() => {
            setNarrationCount(narrationCount + 1)
        }, 1000)
        return () => clearInterval(counter)


    })



    useEffect(() => {
        localStorage.setItem('narration', narrationCount)
        localStorage.setItem('narrationBlock', blockCount)
    }, [blockCount, narrationCount])




    console.log(currentNarration)


    const cycleDialog = (e) => {
 
        e.preventDefault()
        const parsedNarrationCount = Number(localStorage.getItem('narration') || 0)
        const parsedBlockCount = Number(localStorage.getItem('narrationBlock') || 0)
        addButton.classList.add('hidden')

        if (parsedNarrationCount === 6 && parsedBlockCount === 2) {
            backdrop.classList.remove('intro-backdrop-five')
            history.push('/gameplay')
        }

        setNarrationCount(0)
        setBlockCount(blockCount + 1)
        localStorage.setItem('narration', 0)
        localStorage.setItem('narrationBlock', 1)
    }



    return (
        <div className='intro-backdrop' id='intro-backdrop'>
            <div className='snow snow-1'></div>
            <div className='snow snow-2'></div>
            <div className='snow snow-3'></div>


            <LowerModal open={true}>
                <div id='intro-button-container' className='hidden'>
                    <button className='intro-button' onClick={cycleDialog}>
                        <AnswerDropdown />
                    </button>

                </div>

                <div className='narration'>
                    {currentNarration[narrationCount]}
                </div>


            </LowerModal>
        </div>
    )
}

export default Intro
