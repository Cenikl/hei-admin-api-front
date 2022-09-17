import React, { useState } from 'react';
import './Landing.css';
import Event from '../event/Event';
import { useNavigate } from 'react-router-dom';
import { useDataProvider } from '../../context/ApiContext';


function Landing() {
    const { userRole } = useDataProvider();
    const [active, setActive] = useState<string>("event")
    const navigate = useNavigate()

    return (
        <>
            <div className='navbar__container'>
                <div className={`nav__event ${active == "event" && "nav__active"}`}
                    onClick={()=>setActive("event")}>
                    Evénement
                </div>
                <button className='nav__logout'>Se déconnecter</button>
            </div>
            <Event/>
        </>
    )
}

export default Landing
