import React from 'react'

import StanceSelector from '../../components/CharacterSheet/StanceSelector'
import SetLocalStorage from '../../components/Gameplay/SetLocalStorage'
import TextBox from '../../components/Gameplay/Textbox'

import useStyles from './css/Style.js';


const Gameplay = () => {

   const classes = useStyles()


    return (
        <div>
            <SetLocalStorage /> 


            <div className={classes.playScreen}>
                <TextBox />             
            </div>
            <div className={classes.charToolbar}>
                <StanceSelector/>
            </div>
        </div>
    )
}

export default Gameplay