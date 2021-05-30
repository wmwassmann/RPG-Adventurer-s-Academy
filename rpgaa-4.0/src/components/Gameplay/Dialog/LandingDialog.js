import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux';
import useStyles from '../css/Style.js'
import AnswerButtons from '../AnswerButtons/AnswerButtons.js';




const Dialog = () => {
    const dialogBlock = useSelector((state) => state.dialogs)
    const [lineCount, setLineCount] = useState(0);
    // const [currentBlock, setCurrentBlock] = useState(0)
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
        
    }, [])

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

            <AnswerButtons />
  
        </div>
    )
}

export default Dialog

