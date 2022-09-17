import React, { FC } from 'react'
import { inputPropType } from '../../type'

const Input1: FC<Partial<inputPropType>> = (props) => {
    const {label, collect, placeholder, message} = props

    return (
        <div className="form-group">
            <label htmlFor="Input">{label}</label>
            <input type="text" className="form-control " 
                id="Input" placeholder={`${placeholder ? placeholder :""}`}
                onChange={(e)=>{{collect && collect(e.target.value)}}}/>
            <small id="emailHelp" className="form-text text-muted">{message}</small>
        </div>
    )
}

export default Input1
