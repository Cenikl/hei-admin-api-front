import React from "react";
import { ChangeEvent, FC } from "react";
import './Input.css';
import { inputPropType } from "../../type";

const Input: FC<Partial<inputPropType>> = (props) => {
    const {type, label, collect, isImportant} = props;
    const collectValue = (event: ChangeEvent<HTMLInputElement>) => {
        {collect && collect(event.target.value)}
    }

    return (
        <div className="input__container">
            <label>{isImportant && " * "}{label}</label>
            <input type={type} 
                className='input__element'
                onChange={(e)=>collectValue(e)}/>
        </div>
    )
}

