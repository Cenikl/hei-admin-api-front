import React, { useState } from 'react'
import './Search.css'

type searchType = {
    search: (value:string)=>void;
    resetSearch: ()=>void
}

const Search = (props: searchType) => {
    const { search, resetSearch } = props;
    const [toSearch, setToSearch] = useState<string>('')

    return (
        <>
        <div className="d-flex align-items-start navbar position-fixed mt-4 body__search" >
            <div className='btn-group'>
                <input className="form-control text-dark" list="datalistOptions"
                        id="exampleDataList"
                        onChange={(e)=>{setToSearch(e.target.value)}}
                        placeholder="Rechercher l'événement" />
                <button className='btn btn-secondary' onClick={()=>{search(toSearch)}}>
                    <i className='fa fa-search ml-2 mr-2'/>
                </button>
                <button className='btn btn-secondary' onClick={()=>{resetSearch()}}>
                    <i className='fa fa-close'/>
                </button>
            </div>
           
        </div>
        </>
    )
}

export default Search
