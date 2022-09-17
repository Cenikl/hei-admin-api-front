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
                {(userRole!.toLocaleLowerCase() == 'manager' || userRole!.toLocaleLowerCase() == 'teacher') &&
                    <div className={`nav__presence ${active == "presence" && "nav__active"}`} 
                        onClick={()=>navigate("/presence")}>
                        Présence
                    </div>
                }
                <button className='nav__logout'>Se déconnecter</button>
            </div>
            <Event/>
        </>
    )
}

export default Landing
