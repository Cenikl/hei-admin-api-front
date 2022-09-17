import React from 'react'
import { card1PropType } from '../../type'
import './EventCard.css'

const EventCard: React.FC<Partial<card1PropType>> = (props) => {
    const {title, description, place, date, hour, image} = props

    return (
        <div className='event__container'>
            <div className='event__imageContainer'>
                <div className='imageContainer__element'>
                    <img src={image}/>
                </div>
                <div className='imageContainer__place'>{place}</div>
            </div>
            <div className='event__content'>
                <div className='event__title'>{title}</div>
                <div className='event__interval'>{date} | {hour}</div>
                <div className='event__description'>{description} </div>
            </div>
        </div>
    )
}

export default EventCard
