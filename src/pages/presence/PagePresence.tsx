import React, { FC, useState } from 'react'
import '../event/PageEvent.css'
import EventCard from '../../components/container/EventCard'
import { eventPropType } from '../../type'
import Modal from '../../components/modal/Modal'
import Pagination from '../../components/pagination/Pagination'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'

const PagePresence: FC<Partial<eventPropType>> = (props) => {
    const {type, element} = props
    const navigate = useNavigate();
    const [doPresent, setDoPresent] = useState<boolean>(false)
    const [indexToShow, setIndexToShow] = useState<number>(0)
 

    const handlePresence = () => {
        setDoPresent(!doPresent)
    }

    return (
        <div className='eventpage__container'>
           <Modal isActive={doPresent}
                handleModal={handlePresence}
                title="Vous avez le choix entre : ">
                    <div className='event__button'>
                        <Button title='Liste participant' />
                        <Button title='Faire un appelle' onClickButton={()=>navigate("/faciale")}/>
                    </div>
            </Modal>
            <div className='eventpage__type'>
                {type}
            </div>
            <div className='eventpage__element'>
                {element && element.map((element, index)=>(
                    <div key={'evt'+index} 
                        onClick={()=>{setIndexToShow(index); handlePresence()}}
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

export default PagePresence
