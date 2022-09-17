import React, { createContext, useContext, useState } from 'react';
import axios, { AxiosInstance } from 'axios';
import { GlobalContent } from '../type';
import { userType } from '../type/TypeUtils';

    const DataContext = createContext<GlobalContent>({
        userRole: '', 
        client: axios.create(),
        allUser: [],
    });

    export const useDataProvider = () => useContext(DataContext);

    export const DataProvider = ({ children }: any) => {
        const [allUser, setAllUser] = useState<userType[] | null>(null);
        const userRole = "STUDENT";
        const client:AxiosInstance = axios.create({
            baseURL: "http://localhost:8080"
        })
        const getUsers = () =>{
            client!.get("/users").then((response)=>{
                setAllUser(response.data)
            })
        }
        const contextValue = {
            userRole,
            client,
            allUser,
            getUsers
        };

        return (
            <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
        )
    }