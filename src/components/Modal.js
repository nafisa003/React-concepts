import React, { useEffect } from 'react';

const Modal = (props) => {
    const modalContent=props.modalContent;
    const closeModal=props.closeModal;
    useEffect(()=>{
        setTimeout(()=>{
            closeModal();
        },3000)
    })
    return (
        <div>
            <h1>{modalContent}</h1>
        </div>
    );
};

export default Modal;