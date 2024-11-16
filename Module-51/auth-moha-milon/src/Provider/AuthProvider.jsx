import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import  { createContext, useState } from "react";
import auth from "../firebase.init";


 const [user,setUser] = useState(null)

 export const AuthContext = createContext(null) ;

 const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,pasword) => {
        return signInWithEmailAndPassword(auth,email,pasword);
    }

  
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {  
            console.log('User is logged in:', currentUser);
            setUser(currentUser)
        } else {
            console.log('No user is logged in');
            setUser(null)
        }
    });
   

    const AuthInfo = {
        createUser,
        signInUser,
        user,
        
    }
    

    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




















