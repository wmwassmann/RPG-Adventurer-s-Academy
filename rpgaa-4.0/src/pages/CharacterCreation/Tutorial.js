import React from 'react'
import { NavLink } from 'react-router-dom'
import UseTutorial from '../../components/CharacterCreation/UseTutorial/UseTutorial'

export default function Tutorial() {

    
    return (
        <div>
            <NavLink className="nav-link border-pop" to='/creator' exact>Back</NavLink>   

           <h1>Tutorial Page</h1>    

           {/* To-Do              
                    - Lead in dialog - ex("You are about to embark on your first steps on the path of an Adventurer.")
                    - Select Pronoun (He/Him, She/Her, Them/They) (Them/They gives access to both male and female character portraits) Explain this does not affect gameplay
                    - Select Race through a series of questions.
                        - "Now, naturally you are a human which is typically seen as a generalist race. They can do just about anything, but might not excel at much. 
                        However, here at the Adventurer's Academy, we can put you in the shoes of whatever race you wish! 
                        But since you may be unfamiliar with our selection of species, their strengths and weaknesses. Would you like to remain Human? Or would you like to 
                        try a more specialized race?"
                            - If Yes ex(
                                        "Would you describe yourself as elegant and fair, rugged and rough?"
                                        "Do you prefer brains, brawn, or charm?"
                                        "Are you a shadowy soul, surrounded by an air of mystery?"
                                        )
                        - "Ahh, so you've chosen elegant and fair, and a shadowy soul prefering your charm. We would recommend a tiefling might suit your desired playstyle"
                        (Then perhaps give an example of who teiflings are)

                    -Select Class through a similar series of questions 
                        -ex (
                            "Do you solve your problems through physicality? Or mentally?"
                            (If physical, as primarily physical questions with a single promption questions that opens up half-casters such as Paladins, and Clerics)
                            (If Mental, offer questions primarily geared towards different types of spellcasters such as Wizards, Bards, Sorcerers, and maybe Clerics)               

           */}


          
           <UseTutorial />
                  
        </div>
    )
}
