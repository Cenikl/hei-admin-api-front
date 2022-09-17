import React, { useState } from 'react'
import Hackathon from '../../Hackathon.png'
import Search from '../landing/component/Search';
import PagePresence from './PagePresence';
import { event } from '../../type/TypeUtils';
import { useDataProvider } from '../../context/ApiContext';


const Presence = () => {
    const { client } = useDataProvider();
    const [eventFind, setEventFind] = useState<event[] | null>(null)
 
    const mock = [{title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon}]

    const searchEvent = (value: string) => {
        client!.get(`/event/${value}`).then((response)=>{
            setEventFind(response.data)
        })
    }
    const resetSearch = () =>{
        setEventFind(null)
    }

    return (
        <>
            <div className='option__event'>
                <Search search={searchEvent} resetSearch={resetSearch}/>
            </div>
            {eventFind && 
                <PagePresence type='Résultat de recherche' element={eventFind}/>
            }
            <PagePresence type='A venir' element={mock}/>
            <PagePresence type='Déjà passer' element={mock}/>
        </>
    )
}

export default Presence
