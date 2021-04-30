import React, { Component } from 'react'
import './css/textad-style.css'



export default class TextAdventure extends Component {

    constructor() {
        super()       
        this.state = {
            character: [
                {
                    id: 'class',
                    path: ''

                },
                {
                    
                },
                {

                }
            ],                 

            
            textNodes: [
                {
                    id: 1,
                    text: 'Allow my to introduce myself.  My name is Argus Timbers and I shall be your student councilor! Now, it is my duty to assess all prosepctive students and guide them towards whatever adventurous calling ingites their heroic spark - The Academy\'s universal symbol of an adventurer.',
                    options: [
                        {
                            text: 'Continue',   
                            nextText: 2,                      
                        },                
                    ]
            
                },
                {
                    id: 2,
                    text: 'From the instance you set foot within these halls, your actions have been monitored, and every future action will count towards igniting your heroic spark.',
                    options: [
                        {
                            text: 'Continue',
                            nextText: 3                           
                        },                        
                    ]
                },
                {
                    id: 3,
                    text: 'But of course there are many methods one may utilize in acquiring their heroic spark.',
                    options: [
                        {
                            text: 'Continue',
                            nextText: 4                           
                        }
                        
                    ]
                },
                {
                    id: 4,
                    text: 'For example, does your heart yearn for daring adventure, the thrill of combat, and protecting those in need?',
                    options: [
                        {
                            text: 'Continue',
                            nextText: 5,                       
                        }
                        
                    ]
                },
                {
                    id: 5,
                    text: 'Or are you more interested in the subtler aspects of the adventurer\'s path such as complex social interactions, or perhaps a wide set of skills or character traits to accomplish your goals through less violent means?',
                    options: [
                        {
                            text: 'Continue',
                            nextText: 6                           
                        }
                        
                    ]
                },
                {
                    id: 6,
                    text: 'Choose a Path',
                    options: [
                        {
                            text: 'Might',
                            nextText: 7.1,
                            setState: { path: 'Might' }                           
                        },
                        {
                            text: "Magic",
                            nextText: 7.2,
                            setState: { path: 'Magic' }
                        }
                        
                    ]
                },
                {
                    id: 7.1,
                    text: 'You have chosen School of Might! Now choose a weapon',
                    options: [
                        {
                            text: 'Choose Sword',
                            nextText: 8.11                           
                        },
                        {
                            text: "Choose Bow",
                            nextText: 8.12
                        }
                        
                    ]
                },
                {
                    id: 7.2,
                    text: 'You have chosen School of Magic! Now, choose a focus',
                    options: [
                        {
                            text: 'Choose Offensive',
                            nextText: 8.21                           
                        },
                        {
                            text: "Choose Supportive",
                            nextText: 8.22
                        }
                        
                    ]
                },
                {
                    id: 8.11,
                    text: 'Excellent, you will now learn to wield a long sword!',
                    options: [
                        {
                            text: 'Continue',
                            nextText: 1                           
                        }                        
                    ]
                },
                {
                    id: 8.12,
                    text: 'Excellent, you will now learn to wield a hunting bow!',
                    options: [
                        {
                            text: 'Continue',
                            nextText: 1                           
                        }                        
                    ]
                },
                {
                    id: 8.21,
                    text: 'Excellent! We shall make a fine wizard out of you yet!',
                    options: [
                        {
                            text: 'Continue',
                            nextText: 1                         
                        }
                        
                    ]
                },
                {
                    id: 8.22,
                    text: 'Ahhh wonderful, a cleric - you will do much good in this world',
                    options: [
                        {
                            text: 'Continue',
                            nextText: 1                           
                        }                        
                    ]
                },
            ]
        }
    }

    startGame = () => {     
        this.setState({ path: 'Magic' })
        this.showTextNode(1);        
    }

    showTextNode = (textNodeIndex) => {  

        const textElement = document.getElementById('text')
        const answerElement = document.getElementById('option-btns')

        const textNode = this.state.textNodes.find(textNode => textNode.id ===
            textNodeIndex)
            
            textElement.innerText = textNode.text
        
        while (answerElement.firstChild) {
            answerElement.removeChild(answerElement.firstChild)
        }

        textNode.options.forEach(option => {
            if (this.showOption(option)) {
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('welcome-text-btn')
                button.addEventListener('click', ()=> this.selectOption(option))
                answerElement.appendChild(button)
            }
        })
    }

    showOption = (option) => {
        return option.requiredState == null || option.requiredState(this.state)
    }

    selectOption = (option) => {               
        const nextTextNodeId = option.nextText  

        this.setState({ path: 'Might' })
        this.showTextNode(nextTextNodeId)
        this.checkState()

    }

    checkState =()=> {
        const path = this.state.path
        if (path === 'Magic') {
            console.log('success')
        } else {
            console.log('fail')
        }        
    }    

    render() {
        return (
            <div>
                <div id='text' className='display-text'>
                    Ahhh Greetings, and welcome to The RPG: Adventurer's Academy! Come in! Come in!
                </div>
                <div id='option-btns' className='btn-grid'>
                    <button className='welcome-text-btn' onClick={this.startGame}>Start</button>
                    <button className='welcome-text-btn'>Check State</button>
                    <button className='welcome-text-btn'>Answer 3</button>
                    <button className='welcome-text-btn'>Answer 4</button>
                </div>
            </div>
        )
    }
}


