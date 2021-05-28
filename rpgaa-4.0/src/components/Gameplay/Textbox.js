
import React, { useState } from 'react'
import Modal from '../Modals/Modal'
import useStyle from './css/Style.js'
import { useDispatch, useSelector } from 'react-redux';
import Dialog from './Dialog/LandingDialog'
import { Typography } from '@material-ui/core'
import { dialog } from '../../actions/auth'


const initialNpc = { 
    currentNpc: ''
}

const Textbox = () => { 
    const [dialogs, setDialogs] = useState({
        characterName: '', playerAlignment: '', LineOne: '', LineTwo: ''
    })
    const dialogBlock = useSelector((state) => state.dialogs)
    const [npc, setNpc] = useState(initialNpc);
    const [isOpen, setIsOpen] = useState(false)
    const classes = useStyle()
    const dispatch = useDispatch()

    console.log(dialogBlock)

   
    const handleDialog = (e, npc) => {
        // Axios here
        e.preventDefault()    
        dispatch(dialog(npc))
    }

   


    const handleModal = () => {
        setIsOpen(true)        
    }

    

    const handleTimbers = (e) => {
        // localStorage.setItem('currentNpc', '/argus') 
        // const newNpc = localStorage.getItem('currentNpc')   
      
        e.preventDefault() 
        handleModal()
        setNpc({ ...npc, currentNpc: '/argus'})      
       
        
        // dispatch(dialog())
    
    }



    return (
        <div>
            <Modal open={isOpen}>    
                <Dialog/>
                <button onClick={handleDialog}>Next</button>
             

            </Modal>
            <button className={classes.textButton} onClick={handleTimbers}>Play</button>
        </div>
    )
}

export default Textbox
