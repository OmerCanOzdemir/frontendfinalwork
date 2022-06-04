import { createContext, useContext, useEffect, useState } from "react"
import {auth} from "../auth/Firebase";
import { signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
const  AuthContext = createContext();


export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState();

    function login(email, password){
       return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(user) => {
            setCurrentUser(user);
        })
        return unsubscribe
    },[])
   

    const value = {
        currentUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value= {value}>
            {children}
        </AuthContext.Provider>
    )
}