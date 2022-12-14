import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();



const AuthProvider = ({ children }) => {

    // For theme changing 
    const [theme, setTheme] = useState(true);



    const auth = getAuth(app);


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const gProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gProvider);

    }

    const updateProfileUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }

    }, [])







    const authInfo = {
        theme, setTheme,
        user,
        createUser, login, loading, setLoading, logOut, updateProfileUser, googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;