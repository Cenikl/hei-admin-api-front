import React, { useState, useEffect } from 'react'
import Button from '../../components/button/Button'
import PageEvent from './PageEvent'
import Hackathon from '../../Hackathon.png'
import Modal from '../../components/modal/Modal'
import Input1 from '../../components/input/Input1'
import Select from '../../components/select/Select'
import './Event.css'
import Search from '../landing/component/Search';
import { useDataProvider } from '../../context/ApiContext'
import { event, placeType } from '../../type/TypeUtils';

function Event() {
    const { client, userRole } = useDataProvider();
    const [placeList, setPlaceList] = useState<placeType[] | null>(null)
    const [page, setPage] = useState<number>(1)
    const [description, setDescription] = useState<string>('')
    const [eventPage, setEventPage] = useState<event[]>();
    const [eventFind, setEventFind] = useState<event[] | null>(null)    
    const [placeName, setPlaceName] = useState<string>('')
    const [postPlaceName, setPostPlaceName] = useState<string>('')
    const [startDate, setStartDate] = useState<string>('')
    const [endDate, setEndDate] = useState<string>('')
    const [createEvent, setCreateEvent] = useState<boolean>(false);
    const [newPlace, setNewPlace] = useState<boolean>(false);
    const [supervisor, setSupervisor] = useState<string>("Enseignant")
    const [eventStatus, setEventStatus] = useState<string>("Expected")
    const maxPage = 2;
   
    const mock = [{title:"Hackathon", description: "ok pour hackathon", idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon},
     {title:"Hackathon", description: "ok pour hackathon",idEvent:"EVT",
     place:"HEI Ivandry", start_event_datetime:"31 Août 2022", end_event_datetime:"08:00 - 17:00", supervisor: "toky", status:"Missing",image:Hackathon}]


     const handleCreateEvent = () => {
        setCreateEvent(!createEvent)
    }
    const getEvent = () =>{
        client!.get(`/event/${page}`)
            .then((response)=>{
                setEventPage(response.data)
            })
    }
    const searchEvent = (value: string) => {
        client!.get(`/event/${value}`).then((response)=>(
            setEventFind(response.data)
        ))
    }
    const resetSearch = () =>{
        setEventFind(null)
    }
    const createPlace = () =>{
        client!.post("/place", {
            place_name: placeName
        }).then((response)=>{
            setPlaceList(response.data)
        })
    }
    const getPlace = () =>{
        client!.post("/place")
        .then((response)=>{
            getPlace()
        })
    }

    const postEvent = () => {
        client!.post("/event", {
            description: description,
            place_name: postPlaceName,
            start_event_datetime: startDate,
            end_event_datetime: endDate,
            supervisor: supervisor
        }).catch(()=>{
        })
    }
    

    const nextPage = () => {
        {page < maxPage! &&
            setPage(page + 1)
        }
    }

    const previousPage = () => {
        {page > 1 &&
            setPage(page - 1)
        }
    }

    return (
        <>
            <Modal isActive={createEvent}
                handleModal={handleCreateEvent}
                title="Veuillez remplir le formulaire de créaction">
                    <Input1 label="Description de l'événement" collect={setDescription}/>
                        <div className='create__place'>
                                <select  className='place__champ' onChange={(e)=>{setPostPlaceName(e.target.value)}}>
                                    {placeList! && placeList.map((place)=>(
                                        <option value={place.place_name}>{place.place_name}</option>
                                    ))}
                                </select>
                            <button onClick={()=>setNewPlace(!newPlace)}
                                className="newPlace__button">Nouveau</button>
                        </div>
                        <div className={`create__newPlace ${newPlace && 'active__newPlace'}`}>
                            <input type='text' placeholder='Nouveau lieu' 
                                onChange={(e)=>{setPlaceName(e.target.value)}}/>
                            <button onClick={()=>{createPlace()}} className='newPlace__button'>Créer</button>
                        </div>                   
                    <div className='date__end'>
                        <label htmlFor='start'>Début</label>
                        <input type='datetime-local' onChange={(e)=>{setStartDate(e.target.value)}}/>
                    </div>
                    <div className='date__start'>
                        <label htmlFor='end' >Fin</label>
                        <input type='datetime-local' id='end' onChange={(e)=>{setEndDate(e.target.value)}}/>
                    </div>
                    <Select label='Responsable' 
                        available={["Enseignant","Administrateur"]}
                        defaultValue={supervisor}
                        collect={setSupervisor}
                            />                    
                    <Select label='Status'
                        available={["Expected","Cancelled","End"]}
                        defaultValue={eventStatus}
                        collect={setEventStatus}/>
                    <Button title='Confirmer' bgColor='green' onClickButton={postEvent}/>
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
            <PageEvent element={mock}/>
            {/** */}
            <div className='pagination__container'>
            <button className='pagination__element'
                    onClick={()=>previousPage()}>
                <i className='fa fa-arrow-left'/>
            </button>
            <div className='pagination__element'>
                {page}
            </div>
            <button className='pagination__element' 
                    onClick={()=>nextPage()}>
                <i className='fa fa-arrow-right'/>
            </button>
        </div>
        </>
    )
}

export default Event
