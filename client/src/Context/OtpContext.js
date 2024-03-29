import React, { useState, createContext } from 'react'

//import axios from "axios";

export const OtpContext = createContext();

export const OtpContextProvider = ({ children }) => {

    const [otpData, setOtpData] = useState(null)


    return (
        <OtpContext.Provider value={{ otpData, setOtpData }}>
            {children}
        </OtpContext.Provider>
    )
}