import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../Components/Loader/Loader'
import { AuthContext } from '../Context/AuthProvider'

function PriviteRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loader/>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
}

export default PriviteRoute