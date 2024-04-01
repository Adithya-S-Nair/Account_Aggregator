import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/branch/verify')
        }
    }, [user])

    return (
        <div>
            Landing Page
        </div>
    )
}

export default LandingPage