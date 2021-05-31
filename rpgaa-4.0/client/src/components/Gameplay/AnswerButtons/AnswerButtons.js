import React, { useState, useEffect } from 'react'
import useStyles from '../css/Style.js'
import './css/answer-style.css'

const AnswerButtons = () => {
    const [currentGood, setCurrentGood] = useState(0)
    const [currentEvil, setCurrentEvil] = useState(0)
    const [currentLawful, setCurrentLawful] = useState(0)
    const [currentChaotic, setCurrentChaotic] = useState(0)
    const classes = useStyles()



    useEffect(() => {
        const parsedCurrentGood = Number(localStorage.getItem('good') || 0)        
        const parsedCurrentEvil = Number(localStorage.getItem('evil') || 0)        
        const parsedCurrentLawful = Number(localStorage.getItem('lawful') || 0)        
        const parsedCurrentChaotic = Number(localStorage.getItem('chaotic') || 0)        
        setCurrentGood(parsedCurrentGood)        
        setCurrentEvil(parsedCurrentEvil)        
        setCurrentLawful(parsedCurrentLawful)        
        setCurrentChaotic(parsedCurrentChaotic)        
    }, [])

    useEffect(() => {
        localStorage.setItem('good', currentGood) 
        localStorage.setItem('evil', currentEvil) 
        localStorage.setItem('lawful', currentLawful) 
        localStorage.setItem('chaotic', currentChaotic)        
    }, [currentGood, currentEvil, currentLawful, currentChaotic])

    const setAlignment = () => {
    if ((currentLawful > currentChaotic) && (currentGood > currentEvil)) {
        localStorage.setItem('Trending Alignment', 'Lawful Good')
        console.log('Lawful Good')
    } else if ((currentLawful === currentChaotic) && (currentGood > currentEvil)) {
        localStorage.setItem('Trending Alignment', 'Neutral Good')
        console.log('Neutral Good')
    } else if ((currentChaotic > currentLawful) && (currentGood > currentEvil)) {
        localStorage.setItem('Trending Alignment', 'Chaotic Good')
        console.log('Chaotic Good')
    } else if ((currentLawful > currentChaotic) && (currentGood === currentEvil)) {
        localStorage.setItem('Trending Alignment', 'Lawful Neutral')
        console.log('Lawful Neutral')
    } else if ((currentLawful === currentChaotic) && (currentGood === currentEvil)) {
        localStorage.setItem('Trending Alignment', 'True Neutral')
        console.log('True Neutral')
    } else if ((currentChaotic > currentLawful) && (currentGood === currentEvil)) {
        localStorage.setItem('Trending Alignment', 'Chaotic Neutral')
        console.log('Chaotic Neutral')
    } else if ((currentLawful > currentChaotic) && (currentEvil > currentGood)) {
        localStorage.setItem('Trending Alignment', 'Lawful Evil')
        console.log('Lawful Evil')
    } else if ((currentLawful === currentChaotic) && (currentEvil > currentGood)) {
        localStorage.setItem('Trending Alignment', 'Neutral Evil')
        console.log('Neutral Evil')
    } else if ((currentChaotic > currentLawful) && (currentEvil > currentGood)) {
        localStorage.setItem('Trending Alignment', 'Chaotic Evil')
        console.log('Chaotic Evil')
    }
    }


    const answerOne = (e) => {       
        setCurrentGood(currentGood + 1)
        setCurrentLawful(currentLawful + 1)

        setAlignment()

    }
    
    const answerTwo = (e) => {            

        setCurrentEvil(currentEvil + 1)       
        setCurrentChaotic(currentChaotic + 1)
        setAlignment()

    }

    

    

    return (
        <div>            
            <div className={classes.answerBox}>
                <div>
                    <button className='answerButton' onClick={answerOne}>Answer LG</button>
                </div>
                <div>
                    <button className='answerButton' onClick={answerTwo}>Answer CE</button>
                </div>
            </div>
        </div>
    )
}

export default AnswerButtons
