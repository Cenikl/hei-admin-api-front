import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useDataProvider } from '../context/ApiContext'


const Protected = () => {
    const { userRole } = useDataProvider();

    return ( (userRole!.toLocaleLowerCase() == 'manager'|| userRole!.toLocaleLowerCase() == 'teacher') ? <Outlet/> : <Navigate to='/login'/> )
}

export default Protected
