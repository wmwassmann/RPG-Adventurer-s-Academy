
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Gameplay = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const location = useLocation();


    useEffect(() => {
        // const token = user?.token;
    



        setUser(JSON.parse(localStorage.getItem('profile')))
     

    }, [location])




    const { characterName, gender, race } = user.result.character
    const { trendingAlignment } = user.result.character.alignment
    const { good, evil, lawful, chaotic } = user.result.character.alignment.trendingAlignmentStats
    const trendingSchool = user.result.character.charClass.selectedSchool
    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = user.result.character.abilityScores

    localStorage.setItem('characterName', characterName)
    localStorage.setItem('gender', gender)
    localStorage.setItem('race', race)
    localStorage.setItem('trendingAlignment', trendingAlignment)
    localStorage.setItem('good', good)
    localStorage.setItem('evil', evil)
    localStorage.setItem('lawful', lawful)
    localStorage.setItem('chaotic', chaotic)
    localStorage.setItem('trendingSchool', trendingSchool)


    localStorage.setItem('strength', strength)
    localStorage.setItem('dexterity', dexterity)
    localStorage.setItem('constitution', constitution)
    localStorage.setItem('intelligence', intelligence)
    localStorage.setItem('wisdom', wisdom)
    localStorage.setItem('charisma', charisma)

    
    return (
        <div>
        </div>
    )
}

export default Gameplay
