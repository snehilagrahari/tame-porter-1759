import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [isAuth, setAuth] = useState(false);

    const [authId , setAuthId] = useState(null)
    const [authName, setAuthName ] = useState(null);

    const [loading , setLoading] = useState(false);

    const [error , setError] = useState(false);

    const toggleAuth = (val)=>{
        setAuth(val);
    }

    const toggleAuthId = (val)=>{
        setAuthId(val);
    }

    const toggleAuthName = (val) =>{
        setAuthName(val);
    }
    const toggleLoading = (val)=>{
        setLoading(val);
    }

    const toggleError = (val)=>{
        setError(val);
    }
    const value={
        isAuth,
        toggleAuth,
        authId,
        toggleAuthId,
        authName,
        toggleAuthName,
        loading,
        toggleLoading,
        error,
        toggleError
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext