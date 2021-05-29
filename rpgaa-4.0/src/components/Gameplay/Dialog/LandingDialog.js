import React, { useState } from 'react'
import Typing from 'react-typing-animation';
import { useSelector } from 'react-redux';
import useStyles from '../css/Style.js'
// import { dialog } from '../../../actions/auth';


const Dialog = () => {
    const dialogBlock = useSelector((state) => state.dialogs)
    const user = JSON.parse(localStorage.getItem('profile'))
    const [lineCount, setLineCount] = useState(0);
    const classes = useStyles()
    let currentNpc = JSON.parse(localStorage.getItem('profile'))

    // console.log(dialogBlock)
    currentNpc = user?.result.character.currentNpc.argusTimbers

    localStorage.setItem('currentNpc', currentNpc)

    let blockOne = dialogBlock.result[0].lines

    const cycleDialog = (e) => {

        if (lineCount === 7) {
            setLineCount(0)
        } else {
            setLineCount(lineCount + 1)
        }
        e.preventDefault()
        console.log(blockOne)
    }





    return (
        <div className={classes.container}>            
            <div className={classes.dialogBox}>
                {blockOne[lineCount]}
               
            </div>
            <div className={classes.nextButton}>
                <button onClick={cycleDialog}>next</button>
            </div>
        </div>
    )
}

export default Dialog
