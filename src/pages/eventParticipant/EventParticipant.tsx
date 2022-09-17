import React, {useEffect, useState} from 'react'
import './EventParticipant.css'
import Modal from '../../components/modal/Modal'
import Pagination from '../../components/pagination/Pagination'
import Button from '../../components/button/Button';
import { useDataProvider } from '../../context/ApiContext';
import { userType, eventParticipant } from '../../type/TypeUtils';
import { useNavigate } from 'react-router-dom';

interface Props {}

const EventParticipant: React.FC = (props: Props) => {
    const navigate = useNavigate();
    const { client, allUser, idEventChoose } = useDataProvider();
    const [participantList, setParticipantList] = useState<eventParticipant[] | null>([{
        "event":{
            "idEvent":"EVT-1",
            "title":"Hackathon",
            "description": "ok pour hackathon",
            "place":"HEI Ivandry",
            "start_event_datetime":"31 Août 2022", 
            "end_event_datetime":"08:00 - 17:00", 
            "supervisor": "toky", 
            "status":"Missing",
            "image":"Hackathon"
        },
            "participant": {
            "id": "string",
            "ref": "STD000001",
            "first_name": "string",
            "last_name": "string",
            "sex": "M",
            "birth_date": "2022-09-16",
            "address": "string",
            "phone": "string",
            "email": "string",
            "entrance_datetime": "2022-09-16T19:52:40.582Z",
            "status": "ENABLED"
        },
        "status":"Missing"}])
    const [showParticipantDetails, setShowParticipantDetails] = useState<boolean>(false)
    const handleDetails = () => {
        setShowParticipantDetails(!showParticipantDetails)
    }
    const getParticipant = () => {
        client!.get(`/eventparticipants/${idEventChoose}`)
            .then((response)=>{
                setParticipantList(response.data)
            })
    }
    useEffect(()=>{
        getParticipant()
    }, [idEventChoose])

    const returnEvent = () => {
        navigate("/landing")
    }

    return (
        <div className='eventp__container'>
            <Button title='Retour' onClickButton={returnEvent} bgColor="goldenrod"/>
            <Modal title='Détail des participants'
                isActive={showParticipantDetails}
                handleModal={handleDetails}/>
            <div className='participant'>
            <table className='table'>
                <thead>
                    <tr className="bg-light">
                        <th>Invité</th>
                        <th scope='col'>Référence</th>
                        <th scope='col'>Nom</th>
                        <th scope='col'>Prénom</th>
                        <th scope='col'>Evénement</th>
                        <th scope='col'>Place</th>
                        <th scope='col'>Début</th>
                        <th scope='col'>Fin</th>
                        <th>Superviseur</th>
                        <th scope='col'>Status</th>
                    </tr>
                </thead>
                <tbody>
                        {participantList && 
                            participantList.map((partiripant)=>(
                                <tr >
                                    <td>
                                        <input type='checkbox' checked={true} disabled={true}/>
                                    </td>
                                    <th>{partiripant.participant.ref}</th>
                                    <td>{partiripant.participant.last_name}</td>
                                    <td>{partiripant.participant.last_name}</td>
                                    <td>{partiripant.event.description}</td>
                                    <td>{partiripant.event.place}</td>
                                    <td>{partiripant.event.start_event_datetime}</td>
                                    <td>{partiripant.event.end_event_datetime}</td>
                                    <td>{partiripant.event.supervisor}</td>
                                    <td>
                                        <button className='btn btn-danger' 
                                            disabled={partiripant.status.toLowerCase() == "missing" && true}>Missing</button>
                                    </td>
                                </tr>
                            ))
                        }                    
                </tbody>
            </table>
            </div>
           <div className='eventp__pagination'>
              <Pagination/>
           </div>
        </div>
    )
}

export default EventParticipant
