import React, { useState, useEffect, createContext } from 'react'
// import { makeRequest } from '../Axios';

export const AccountDetailContext = createContext();

export const AccountDetailContextProvider = ({ children }) => {

    const [accountDetail, setAccountDetail] = useState(null)
    const [aaid, setAaid] = useState(null)
    
    return (
        <AccountDetailContext.Provider value={{ accountDetail, setAccountDetail, aaid, setAaid }}>
            {children}
        </AccountDetailContext.Provider>
    )
}