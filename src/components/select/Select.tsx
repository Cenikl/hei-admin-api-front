import React from 'react';
import { FC, ChangeEvent } from 'react';
import { selectPropType } from "../../type";
import './Select.css'

const Input: FC<Partial<selectPropType>> = (props) => {
    const {available, defaultValue, collect, label} = props;

    return (
        <>
            <div>
                <div className='select__label'>{label}</div>
                <select onChange={(e)=>{{collect && collect(e.target.value)}}} 
                    className="select__element"
                    >
                    {available && 
                        available.map((element)=>(
                            <option value={element} 
                                    key={element}
                                    selected={(defaultValue === element && true)}
                                    >
                                {element}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}


export default Input