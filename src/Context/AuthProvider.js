import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import app from '../Firebase/firebase.init'

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLoginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userUpdateProfile = (userUpdateInfo) =>{
        console.log(userUpdateInfo)
        return updateProfile(user, userUpdateInfo)
    }

    const userLogout = () => {
        signOut(auth)
            .then(() => { })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })

        return () => unSubscribe()
    }, [])

    const userInfo = {
        user,
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