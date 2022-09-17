import React, { createContext, useContext, useState } from 'react';
import axios, { AxiosInstance } from 'axios';
import { GlobalContent } from '../type';
import { userType } from '../type/TypeUtils';

    const DataContext = createContext<GlobalContent>({
        userRole: '', 
        client: axios.create(),
        allUser: [],
        idEventChoose: 0,
        changeIdEventChoose: (value: number)=>{},
    });

    export const useDataProvider = () => useContext(DataContext);

    export const DataProvider = ({ children }: any) => {
        const [allUser, setAllUser] = useState<userType[] | null>(null);
        const [idEventChoose, setIdEventChoose] = useState<number>(0)
        const userRole = "MANAGER";
        const client:AxiosInstance = axios.create({
            baseURL: "http://localhost:8080"
        })
        const getUsers = () =>{
            client!.get("/users").then((response)=>{
                setAllUser(response.data)
            })
        }
        const changeIdEventChoose = (value: number) => {
            setIdEventChoose(value)
        }
        const contextValue = {
            userRole,
            client,
            allUser,
            getUsers,
            idEventChoose,
            changeIdEventChoose
        };

        return (
            <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
        )
    }