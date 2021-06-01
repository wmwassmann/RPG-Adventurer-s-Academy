import React, { useState, useEffect } from 'react'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import { useSelector } from 'react-redux';
import useStyles from '../css/Style.js'
import AnswerDropdown from '../AnswerButtons/AnswerDropdown.js';

import AnswerItem from '../AnswerButtons/AnswerItem.js';
import AnswerNavbar from '../AnswerButtons/AnswerNav.js';




const Dialog = () => {
    const dialogBlock = useSelector((state) => state.dialogs)
    const [lineCount, setLineCount] = useState(0);
    // const [argusBlock, setArgusBlock] = useState(localStorage.getItem('argusBlock'))
    const classes = useStyles()

    const user = JSON.parse(localStorage.getItem('profile'))
    let currentNpc = JSON.parse(localStorage.getItem('profile'))

    let currentBlock = dialogBlock.result[0].lines
    currentNpc = user?.result.character.currentNpc.argusTimbers

    localStorage.setItem('currentNpc', currentNpc)

    useEffect(() => {
        const parsedLineCount = Number(localStorage.getItem('lineCount') || 0)       
        if ('lineCount' === currentBlock.length) {
            setLineCount(0)
        } else {
            setLineCount(parsedLineCount)
        }

    }, [currentBlock])

    useEffect(() => {
        localStorage.setItem('lineCount', lineCount)       
    }, [lineCount])



    const cycleDialog = (e) => {

        if (lineCount === currentBlock.length) {
            setLineCount(0)
            // AXIOS CALL HERE FOR AN UPDATE BASED ON ANSWER
            // Ask for an answer

        } else {
            setLineCount(lineCount + 1)
        }

        e.preventDefault()
    }






    return (
        <div className={classes.container}>
            <div className={classes.dialogBox}>
                {currentBlock[lineCount]}
            </div>
            <div className={classes.nextButton}>
                <button onClick={cycleDialog}>next</button>
            </div>

            <AnswerNavbar>
                <AnswerItem icon={<ArrowDropDownCircleIcon/> }>
                    <AnswerDropdown />
                </AnswerItem>
            </AnswerNavbar>
        </div>
    )
}

export default Dialog

