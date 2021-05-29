
import React, { useState } from 'react'
import Modal from '../Modals/Modal'
import useStyle from './css/Style.js'
import { useDispatch, useSelector } from 'react-redux';
import Dialog from './Dialog/LandingDialog'


const Textbox = () => { 
  
    const dialogBlock = useSelector((state) => state.dialogs)

    const [isOpen, setIsOpen] = useState(false)
    const classes = useStyle()
    const dispatch = useDispatch()

    console.log(dialogBlock)



   


    const handleModal = () => {
        setIsOpen(true)        
    }

    

    const handleTimbers = (e) => {
        // localStorage.setItem('currentNpc', '/argus') 
        // const newNpc = localStorage.getItem('currentNpc')   
      
        e.preventDefault() 
        handleModal()
    
       
        
        // dispatch(dialog())
    
    }



    return (
        <div>
            <Modal open={isOpen}>    
            
               
                <Dialog/>
               
            </Modal>
            <button className={classes.textButton} onClick={handleTimbers}>Play</button>
        </div>
    )
}

export default Textbox
