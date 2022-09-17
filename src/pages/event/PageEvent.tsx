import React, { FC, useState } from 'react'
import './PageEvent.css'
import EventCard from '../../components/container/EventCard'
import { eventPropType } from '../../type'
import Modal from '../../components/modal/Modal'
import Pagination from '../../components/pagination/Pagination'

const PageEvent: FC<Partial<eventPropType>> = (props) => {
    const {type, element} = props
    const [indexToShow, setIndexToShow] = useState<number>(0)
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const handleEventDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <div className='eventpage__container'>
            <Modal isActive={showDetails}
                handleModal={handleEventDetails}
                title={`Details de l'événement choisi ${indexToShow}`}
                >
                    hello
            </Modal>
            <div className='eventpage__type'>
                {type}
            </div>
            <div className='eventpage__element'>
                {element && element.map((element, index)=>(
                    <div key={'evt'+index} 
                        onClick={()=>{setIndexToShow(index); handleEventDetails()}}
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
            <div className='eventpage__pagination'>
                <Pagination/>
            </div>
        </div>
    )
}

export default PageEvent
