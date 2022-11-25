import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import app from '../Firebase/firebase.init'

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLoginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userUpdateProfile = (updateUser) => {
        console.log(updateUser)
        return updateProfile(auth.currentUser, updateUser)
    }

    const userLogout = () => {
        signOut(auth)
            .then(() => { })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        userRegister,
        userLogin,
        userLoginWithGoogle,
        userLogout,
        userUpdateProfile
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider