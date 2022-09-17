import React, { FC, useState, useEffect } from 'react'
import './Pagination.css'

export type paginationPropType = {
    collect: (value: number)=>void,
    maxPage: number
}

const Pagination: FC<Partial<paginationPropType>> = (props) => {
    const {collect, maxPage} = props
    const [actualPage, setActualPage] = useState<number>(1)

    useEffect(()=>{
        {collect && collect(actualPage)}
    }, [actualPage])

    const nextPage = () => {
        {actualPage < maxPage! &&
            setActualPage(actualPage + 1)
        }
    }

    const previousPage = () => {
        {actualPage > 1 &&
            setActualPage(actualPage - 1)
        }
    }

    return (
        <div className='pagination__container'>
            <button className='pagination__element'
                    onClick={()=>previousPage()}>
                <i className='fa fa-arrow-left'/>
            </button>
            <div className='pagination__element'>
                {actualPage}
            </div>
            <button className='pagination__element' 
                    onClick={()=>nextPage()}>
                <i className='fa fa-arrow-right'/>
            </button>
        </div>
    )
}

export default Pagination
