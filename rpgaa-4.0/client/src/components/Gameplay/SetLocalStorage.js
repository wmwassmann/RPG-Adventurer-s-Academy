
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
    const trendingSchool = user.result.character.charClass.selectedSchool
    
    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = user.result.character.abilityScores

    localStorage.setItem('characterName', characterName)
    localStorage.setItem('gender', gender)
    localStorage.setItem('race', race)
    localStorage.setItem('trendingAlignment', trendingAlignment)

    localStorage.setItem('trendingSchool', trendingSchool)
    // localStorage.setItem('divinity', divinity)
    // localStorage.setItem('nature', nature)
    // localStorage.setItem('arcane', arcane)
    // localStorage.setItem('vocation', vocation)
    localStorage.setItem('divinity', 0)
    localStorage.setItem('nature', 0)
    localStorage.setItem('arcane', 0)
    localStorage.setItem('vocation', 0)


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
