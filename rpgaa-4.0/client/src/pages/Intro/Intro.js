
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Modal from '../../components/Modals/Modal'
import { useHistory } from 'react-router-dom'


const Intro = () => {


    const narrationBlock = useSelector((state) => state.narration)
    const [narrationCount, setNarrationCount] = useState(0);
    const [blockCount, setBlockCount] = useState(0)
    const history = useHistory()



    let currentNarration = narrationBlock.result[blockCount].lines


    useEffect(() => {
        const parsedNarrationCount = Number(localStorage.getItem('narration') || 0)
        const parsedBlockCount = Number(localStorage.getItem('narractionBlock') || 0)
        if ('narration' === currentNarration.length) {
            setNarrationCount(0)
        } else {
            setNarrationCount(parsedNarrationCount)
        }

        if ('narrationBlock' === currentNarration.length - 1) {
            setBlockCount(0)
            setNarrationCount(0)
        } else {
            setBlockCount(parsedBlockCount)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('narration', narrationCount)
        localStorage.setItem('narrationBlock', blockCount)
    }, [blockCount, narrationCount])







    const cycleDialog = (e) => {
        e.preventDefault()

        console.log(narrationCount)
        console.log(blockCount)
        if (blockCount === 2 && narrationCount === currentNarration.length) {
            setNarrationCount(0)
            setBlockCount(0)
            localStorage.setItem('narration', 0)
            localStorage.setItem('narrationBlock', 0)
            history.push('/gameplay')


        } else {
            if (narrationCount === currentNarration.length) {
                setNarrationCount(0)
                setBlockCount(blockCount + 1)
                // AXIOS CALL HERE FOR AN UPDATE BASED ON ANSWER
                // Ask for an answer

            } else {
                setNarrationCount(narrationCount + 1)
            }

        }



    }



    return (
        <div>
            <Modal open={true}>
                <button onClick={cycleDialog}>Click</button>
                {currentNarration[narrationCount]}
            </Modal>
        </div>
    )
}

export default Intro
