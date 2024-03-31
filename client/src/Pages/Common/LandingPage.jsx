import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const LandingPage = () => {
    const {user, setuser} = useContext(AuthContext)

    
    return (
        <div>
            Landing Page
        </div>
    )
}

export default LandingPage