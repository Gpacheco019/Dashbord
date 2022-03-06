import React, { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    padding: '0',    
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const ModalComponent = ({children, modalIsOpen, closeModal}) => {  

  return(    
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}

    </Modal>    
  )
}


export default ModalComponent