import React, { FC, useState } from 'react'
import './PageEvent.css'
import EventCard from '../../components/container/EventCard'
import { eventPropType } from '../../type'
import Modal from '../../components/modal/Modal'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import { useDataProvider } from '../../context/ApiContext'

const PageEvent: FC<Partial<eventPropType>> = (props) => {
    const { idEventChoose } = useDataProvider()
    const {type, element} = props
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0)
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
                    <div className='details__element'>
                      <div className='details__key'>Titre</div>
                      <div>{(element! && element[index].title)}</div>
                    </div>
                    <div className='details__element'>
                      <div className='details__key'>Description</div>
                      <div>{(element! && element[index].description)}</div>
                    </div>
                    <div className='details__element'>
                      <div className='details__key'>Date début</div>
                      <div>{(element! && element[index].start_event_datetime)}</div>
                    </div>
                    <div className='details__element'>
                      <div className='details__key'>Date fin</div>
                      <div>{(element! && element[index].end_event_datetime)}</div>
                    </div>
                    <div className='details__element'>
                      <div className='details__key'>place</div>
                      <div>{(element! && element[index].place)}</div>
                    </div>
                    <div className='details__element'>
                      <div className='details__key'>Superviseur</div>
                      <div>{(element! && element[index].supervisor)}</div>
                    </div>
                    <div className='details__element'>
                      <div className='details__key'>Status</div>
                      <div>{(element! && element[index].status)}</div>
                    </div>
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
