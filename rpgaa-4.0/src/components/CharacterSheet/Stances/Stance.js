
import React, { Component } from 'react'
import './css/stance-style.css'





export default class Stance extends Component {

    constructor(props) {
        super(props);

        // set state - toggling just in case we want to utilize state within the handle_stance function. We can check state and set new states as needed.
        this.state = {
            anyStance: false,
            isToggleOnOffense: false,
            isToggleOnDefense: false,
            isToggleOnUtility: false,
            isToggleOnRolePlay: false,
        }
    }

    // handle_stance checks the selected stance by state, and will display outputs based one whatever is in the stance's respective object. 
    handle_stance = (e) => {

        const stance = (this.props.stance)
     
        e.preventDefault()

        const handleStance = document.getElementById('stance-display-container')

        // Displays a sample output in the DOM of the current selected stance. 
        handleStance.innerHTML = stance

        // imports the selected_stance.  Might not need to have a toggle system in place, but I like to do both?
        this.props.selected_stance(this.props.stance)
    }


    render() {

        // import whatever props such as this.props.tag here to use below
        const stance = (this.props.stance)


        return (
            <div className='stance-container'>

                <div className='stance-display-container' id='stance-display-container'>
                    {/* Stance content is dynamically generated here */}
                </div>
             
                <div className='stance-btn-container'>
                    <button className='stance-btn' id={`${stance}-button`} onClick={this.handle_stance}>
                        {stance}
                    </button>
                </div>

            </div>
        )
    }
}
