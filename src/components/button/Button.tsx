import React, { useRef, useEffect } from 'react';
import './Button.css'
import gsap from 'gsap'
import { buttonPropType } from '../../type';


const Button: React.FC<Partial<buttonPropType>> = (props) => {
    const buttonRef = useRef<HTMLDivElement>(null)
    const { onClickButton, title, types, bgColor } = props;

    const change = (colors: string) => {
        gsap.to(buttonRef.current, {
            backgroundColor: colors
        })
    }

    useEffect(()=>{
        {bgColor && change(bgColor);}
    }, [])

    return (
        <div className={`${types ? types : 'button'}`} 
            onClick={()=>{{onClickButton && onClickButton()}}}
            ref={buttonRef}>
            {title}
        </div>
    )
}

export default Button;