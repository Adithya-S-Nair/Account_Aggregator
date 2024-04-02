import React, { useState, useEffect, createContext } from 'react'
// import { makeRequest } from '../Axios';

export const AccountDetailContext = createContext();

export const AccountDetailContextProvider = ({ children }) => {

    const [accountDetail, setAccountDetail] = useState(null)
    const [aaid, setAaid] = useState(null)
    const [consentData, setConsentData] = useState()
    
    return (
        <AccountDetailContext.Provider value={{ accountDetail, setAccountDetail, aaid, setAaid, consentData, setConsentData }}>
            {children}
        </AccountDetailContext.Provider>
    )
}