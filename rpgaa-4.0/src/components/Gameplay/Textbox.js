
import React, { useState } from 'react'
import Modal from '../Modals/Modal'
// import useStyle from './css/Style.js'
// import { useDispatch } from 'react-redux';
import Dialog from './Dialog/LandingDialog'
// import argusTimbers from './img/dwarf-mage-3.png'
import './css/dialog-style.css'


const Textbox = () => {

    // const dialogBlock = useSelector((state) => state.dialogs)

    const [isOpen, setIsOpen] = useState(false)
    // const classes = useStyle()
    // const dispatch = useDispatch()

    // console.log(dialogBlock)






    const handleModal = () => {
        setIsOpen(!isOpen)
    }



    const handleTimbers = (e) => {
        // localStorage.setItem('currentNpc', '/argus') 
        // const newNpc = localStorage.getItem('currentNpc')   

        e.preventDefault()
        handleModal()

        // console.log(dialogBlock)

        // dispatch(dialog())

    }



    return (
        <div>
            <Modal open={isOpen} close={!isOpen}>


                <Dialog />

            </Modal>
    
            
                <button className='argusTimbers' onClick={handleTimbers}></button>

           
        </div>
    )
}

export default Textbox
