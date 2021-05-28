
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Gameplay = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const location = useLocation();


    useEffect(() => {
        // const token = user?.token;
    



        setUser(JSON.parse(localStorage.getItem('profile')))
     

    }, [location])

    const characterName = user?.result.character.characterName
    const gender = user?.result.character.gender
    const race = user?.result.character.race
    const trendingAlignment = user?.result.character.alignment.trendingAlignment
    const alignmentGood = user?.result.character.alignment.trendingAlignmentStats.good
    const alignmentEvil = user?.result.character.alignment.trendingAlignmentStats.evil
    const alignmentLawful = user?.result.character.alignment.trendingAlignmentStats.lawful
    const alignmentChaotic = user?.result.character.alignment.trendingAlignmentStats.chaotic
    const trendingSchool = user?.result.character.charClass.selectedSchool
    const str = user?.result.character.abilityScores.strength
    const dex = user?.result.character.abilityScores.dexterity
    const con = user?.result.character.abilityScores.constitution
    const int = user?.result.character.abilityScores.intelligence
    const wis = user?.result.character.abilityScores.wisdom
    const cha = user?.result.character.abilityScores.charisma




    localStorage.setItem('characterName', characterName)
    localStorage.setItem('gender', gender)
    localStorage.setItem('race', race)
    localStorage.setItem('trendingAlignment', trendingAlignment)
    localStorage.setItem('good', alignmentGood)
    localStorage.setItem('evil', alignmentEvil)
    localStorage.setItem('lawful', alignmentLawful)
    localStorage.setItem('chaotic', alignmentChaotic)
    localStorage.setItem('trendingSchool', trendingSchool)


    localStorage.setItem('strength', str)
    localStorage.setItem('dexterity', dex)
    localStorage.setItem('constitution', con)
    localStorage.setItem('intelligence', int)
    localStorage.setItem('wisdom', wis)
    localStorage.setItem('charisma', cha)

    
    return (
        <div>
        </div>
    )
}

export default Gameplay
