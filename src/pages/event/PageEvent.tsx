import React, { FC, useState } from 'react'
import './PageEvent.css'
import EventCard from '../../components/container/EventCard'
import { eventPropType } from '../../type'
import Modal from '../../components/modal/Modal'
import Pagination from '../../components/pagination/Pagination'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import { useDataProvider } from '../../context/ApiContext'
import Input1 from '../../components/input/Input1'
import Select from '../../components/select/Select'

const PageEvent: FC<Partial<eventPropType>> = (props) => {
    const { idEventChoose } = useDataProvider()
    const {type, element} = props
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const { changeIdEventChoose } = useDataProvider();
    const handleEventDetails = () => {
        setShowDetails(!showDetails)
    }
    const navigate = useNavigate();
    const goPresence = () => {
        navigate('/faciale')
    }
    const viewParticipant = () => {
        navigate('/eventparticipant')
    }

    return (
        <div className='eventpage__container'>
            <Modal isActive={showDetails}
                handleModal={handleEventDetails}
                title={`Details de l'événement choisi`}
                >
                <div>
                      
                    <Button title='Participant' onClickButton={viewParticipant}/>
                    <Button title='Présence' onClickButton={goPresence}/>
                </div>
            </Modal>
            <div className='eventpage__type'>
                {type}
            </div>
            <div className='eventpage__element'>
                {element && element.map((element, index)=>(
                    <div key={'evt'+index} 
                        onClick={()=>{changeIdEventChoose(index); handleEventDetails()}}
                        className="click">
                            <EventCard title={element!.title}
                            description={element!.description}
                            place={element!.place}
                            date={element!.start_event_datetime}
                            hour={element!.end_event_datetime}
                            image={element!.image}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PageEvent
