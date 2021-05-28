import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
// import moment from 'moment';
// import { useHistory } from 'react-router-dom';

const Dialog = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    let currentNpc = JSON.parse(localStorage.getItem('profile'))    


    currentNpc = user?.result.character.currentNpc.argusTimbers

    localStorage.setItem('currentNpc', currentNpc)
    return (
        <div>
            Hi
        </div>
    )
}

export default Dialog
