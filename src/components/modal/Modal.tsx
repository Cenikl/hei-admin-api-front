import React, { FC, useState } from "react";
import './Modal.css';
import { useDataProvider } from "../../context/ApiContext";
import { modalPropType } from "../../type";
import Button from "../button/Button";


const Modal: FC <Partial<modalPropType>>= (props) => {
    const {children, isActive, handleModal, title} = props;
    const { userRole } = useDataProvider()
   
    return (
	<section className={`${isActive ? 'modal__container':'close'}`}>
        <button className="modal__controller" 
            onClick={()=>{handleModal && handleModal()}}>
            <i className="modal__close fa fa-close"/>
        </button>
        <div className={`modal__body${isActive && '__active'}`}>
            <div className={`modal__content${isActive ? '__active' : ''}`}>	
                <div className="modal__header">
                    {title}
                </div>
                {children}	          		
            </div>	
        </div>
    </section>
    )
}

export default Modal;