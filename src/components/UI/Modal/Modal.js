import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const Modal = (props) => (
    <>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
            <Button btnType="Danger" clicked={props.purchaseCanceled}> CANCEL </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}> CONTINUE </Button>
        </div>
    </>
);

export default Modal;