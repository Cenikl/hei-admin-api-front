import React, { useState } from 'react'
import Button from '../../components/button/Button'
import PageEvent from './PageEvent'
import Hackathon from '../../Hackathon.png'
import Modal from '../../components/modal/Modal'
import Input1 from '../../components/input/Input1'
import Select from '../../components/select/Select'
import './Event.css'
import Search from '../landing/component/Search';
import { useDataProvider } from '../../context/ApiContext'
import { event } from '../../type/TypeUtils';

interface Props {}

function Event(props: Props) {
    const { client, userRole } = useDataProvider();
    const [eventFind, setEventFind] = useState<event[] | null>(null)
    const [createEvent, setCreateEvent] = useState<boolean>(false);
    const [supervisor, setSupervisor] = useState<string>("Enseignant")
    const [eventStatus, setEventStatus] = useState<string>("Expected")
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


     const handleCreateEvent = () => {
        setCreateEvent(!createEvent)
    }
    const searchEvent = (value: string) => {
        client!.get(`/event/${value}`).then((response)=>(
            setEventFind(response.data)
        ))
    }
    const resetSearch = () =>{
        setEventFind(null)
    }

    return (
        <>
            <Modal isActive={createEvent}
                handleModal={handleCreateEvent}
                title="Veuillez remplir le formulaire de créaction">
                    <Input1 label="Description de l'événement"/>
                    <Select label="Lieu de deroulement"/>
                    <Select label='Responsable' 
                        available={["Enseignant","Administrateur"]}
                        defaultValue={supervisor}
                        collect={setSupervisor}
                    />
                    <Select label='Status'
                        available={["Expected","Cancelled","End"]}
                        defaultValue={eventStatus}
                        collect={setEventStatus}/>
                    <Button title='Confirmer' bgColor='green'/>
            </Modal>
            
            <div className='option__event'>
               
                {(userRole!.toLocaleLowerCase() == 'manager'|| userRole!.toLocaleLowerCase() == 'teacher')  &&
                    <button className='ici' onClick={handleCreateEvent}>
                      Créer un événement
                    </button>
                }
                <Search search={searchEvent} resetSearch={resetSearch}/>
            </div>
            {eventFind &&
                <PageEvent type='Resultat du recherche' element={eventFind}/>
            }
            <PageEvent type='cours' element={mock}/>
            <PageEvent type='Examen' element={mock}/>
        </>
    )
}

export default Event
